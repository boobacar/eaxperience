import { useState } from "react";

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = String(reader.result || "");
      resolve(result.split(",")[1]);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

// ─── Publish Form ────────────────────────────────────────────────────────────
function PublishForm({ password }) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!image) { setStatus("Please upload a cover image."); return; }
    try {
      setLoading(true);
      setStatus("Publishing...");
      const imageBase64 = await toBase64(image);
      const ext = image.name.split(".").pop() || "jpg";
      const res = await fetch("/api/blog/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-password": password },
        body: JSON.stringify({
          title, text, imageBase64, imageExt: ext,
          tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Publish failed");
      setStatus(`✅ Published: ${data.url}`);
      setTitle(""); setText(""); setTags(""); setImage(null);
    } catch (err) {
      setStatus(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
      <h2 className="font-display text-2xl text-white">New Post</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" required />
        <textarea placeholder="Content (empty lines = new paragraphs)" value={text} onChange={(e) => setText(e.target.value)}
          className="w-full min-h-56 rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" required />
        <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" />
        <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" required />
        <button type="submit" disabled={loading}
          className="rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">
          {loading ? "Publishing..." : "Publish"}
        </button>
      </form>
      {status && <p className="text-sm text-white/80">{status}</p>}
    </div>
  );
}

// ─── Edit Form ───────────────────────────────────────────────────────────────
function EditForm({ post, password, onDone, onCancel }) {
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(
    Array.isArray(post.sections)
      ? post.sections.flatMap((s) => (s.body || [])).join("\n\n")
      : ""
  );
  const [tags, setTags] = useState((post.tags || []).join(", "));
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setStatus("Updating...");
      const body = {
        slug: post.slug, title, text,
        tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      };
      if (image) {
        body.imageBase64 = await toBase64(image);
        body.imageExt = image.name.split(".").pop() || "jpg";
      }
      const res = await fetch("/api/blog/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-admin-password": password },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Update failed");
      setStatus("✅ Updated!");
      setTimeout(onDone, 800);
    } catch (err) {
      setStatus(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl border border-brand-orange/40 bg-white/5 p-6 md:p-8 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-white">Edit Post</h2>
        <button onClick={onCancel} className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20">
          Cancel
        </button>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" required />
        <textarea placeholder="Content" value={text} onChange={(e) => setText(e.target.value)}
          className="w-full min-h-56 rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" required />
        <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={(e) => setTags(e.target.value)}
          className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" />
        <div className="space-y-1">
          {post.cover && (
            <div className="flex items-center gap-3">
              <img src={post.cover} alt="current cover" className="h-16 w-24 rounded-lg object-cover opacity-70" />
              <span className="text-xs text-white/50">Current image — leave empty to keep it</span>
            </div>
          )}
          <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" />
        </div>
        <button type="submit" disabled={loading}
          className="rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">
          {loading ? "Updating..." : "Update Post"}
        </button>
      </form>
      {status && <p className="text-sm text-white/80">{status}</p>}
    </div>
  );
}

// ─── Posts List ──────────────────────────────────────────────────────────────
function PostsList({ password, onEdit }) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingSlug, setDeletingSlug] = useState(null);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await fetch("/api/blog/list", {
        headers: { "x-admin-password": password },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load posts");
      setPosts(data.posts);
    } catch (err) {
      setError(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (post) => {
    if (!window.confirm(`Delete "${post.title}"? This action cannot be undone.`)) return;
    try {
      setDeletingSlug(post.slug);
      const res = await fetch("/api/blog/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json", "x-admin-password": password },
        body: JSON.stringify({ slug: post.slug }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Delete failed");
      setPosts((prev) => prev.filter((p) => p.slug !== post.slug));
    } catch (err) {
      setError(`❌ ${err.message}`);
    } finally {
      setDeletingSlug(null);
    }
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-white">All Posts</h2>
        <button onClick={loadPosts} disabled={loading}
          className="rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20 disabled:opacity-60">
          {loading ? "Loading..." : posts ? "Refresh" : "Load Posts"}
        </button>
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {posts === null && !loading && (
        <p className="text-sm text-white/50">Click "Load Posts" to display the list.</p>
      )}

      {posts !== null && posts.length === 0 && (
        <p className="text-sm text-white/50">No posts found.</p>
      )}

      {posts && posts.length > 0 && (
        <ul className="space-y-3">
          {posts.map((post) => (
            <li key={post.slug}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 p-4">
              {post.cover && (
                <img src={post.cover} alt={post.title}
                  className="h-14 w-20 flex-shrink-0 rounded-lg object-cover" />
              )}
              <div className="flex-1 min-w-0">
                <p className="truncate font-semibold text-white">{post.title}</p>
                <p className="text-xs text-white/50">{post.date} · {post.readingTime}</p>
                {post.tags?.length > 0 && (
                  <p className="mt-1 text-xs text-white/40">{post.tags.join(", ")}</p>
                )}
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <button onClick={() => onEdit(post)}
                  className="rounded-xl bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20">
                  ✏️ Modifier
                </button>
                <button onClick={() => handleDelete(post)}
                  disabled={deletingSlug === post.slug}
                  className="rounded-xl bg-red-600/80 px-3 py-2 text-sm text-white hover:bg-red-600 disabled:opacity-60">
                  {deletingSlug === post.slug ? "..." : "🗑️ Supprimer"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AdminBlog() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [listKey, setListKey] = useState(0);

  const handleAuth = (e) => {
    e.preventDefault();
    if (password.trim()) setAuthed(true);
  };

  const handleEditDone = () => {
    setEditingPost(null);
    setListKey((k) => k + 1);
  };

  return (
    <div className="section-shell py-12">
      <div className="mx-auto max-w-3xl space-y-8">
        <h1 className="font-display text-3xl text-white">Blog Admin</h1>
        <p className="text-sm text-white/70">
          Author is set automatically: <strong>EAXperience Team</strong>
        </p>

        {!authed ? (
          <form onSubmit={handleAuth}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
            <p className="text-white/70 text-sm">Enter the admin password to continue.</p>
            <input type="password" placeholder="Admin password" value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-white" required />
            <button type="submit"
              className="rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white">
              Access
            </button>
          </form>
        ) : (
          <>
            {editingPost ? (
              <EditForm
                post={editingPost}
                password={password}
                onDone={handleEditDone}
                onCancel={() => setEditingPost(null)}
              />
            ) : (
              <PublishForm password={password} />
            )}

            <PostsList
              key={listKey}
              password={password}
              onEdit={(post) => { setEditingPost(post); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            />
          </>
        )}
      </div>
    </div>
  );
}
