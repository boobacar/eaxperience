import { useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/content";
import logo from "../assets/logo.png";

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 text-white">
    <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-brand-orange/70 bg-white/5 p-1 shadow-glow">
      <img
        src={logo}
        alt="EAXperience logo"
        className="h-full w-full object-contain scale-[1.1]"
      />
    </div>
    <div className="leading-none">
      <span className="block font-display text-xl">EAXperience</span>
      <span className="text-xs uppercase tracking-[0.25em] text-brand-orange/80">
        Transform
      </span>
    </div>
  </Link>
);

const Dropdown = ({ items, onNavigate, onEnter, onLeave }) => (
  <div
    className="absolute left-0 top-full mt-2 min-w-[240px] rounded-2xl bg-brand-carbon/95 p-3 shadow-card ring-1 ring-white/10 backdrop-blur-lg"
    onMouseEnter={onEnter}
    onMouseLeave={onLeave}
  >
    {items.map((item) => (
      <Link
        key={item.to}
        to={item.to}
        onClick={onNavigate}
        className="block rounded-xl px-4 py-3 text-sm font-medium text-white/90 hover:bg-orange-400/20"
      >
        {item.label}
      </Link>
    ))}
  </div>
);

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimer = useRef(null);
  const location = useLocation();

  const handleNavigate = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const openMenu = (label) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const closeMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-gradient-to-b from-[#07090f]/95 via-[#07090f]/80 to-transparent backdrop-blur-xl border-b border-white/5">
      <div className="section-shell flex items-center justify-between py-5">
        <Logo />

        <nav className="hidden lg:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => {
            const hasChildren = Array.isArray(link.children);
            const isDropdownOnly = hasChildren && !link.to;
            const active =
              (link.to &&
                (location.pathname === link.to ||
                  (link.to !== "/" &&
                    location.pathname.startsWith(link.to)))) ||
              (isDropdownOnly && location.pathname.startsWith("/resources"));

            return (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => hasChildren && openMenu(link.label)}
                onMouseLeave={() => hasChildren && closeMenu()}
              >
                {isDropdownOnly ? (
                  <button
                    type="button"
                    className={[
                      "px-4 py-2 rounded-full transition-colors flex items-center gap-1",
                      active
                        ? "text-white bg-white/5"
                        : "text-white/70 hover:text-brand-orange",
                    ].join(" ")}
                    aria-haspopup="menu"
                    aria-expanded={openDropdown === link.label}
                  >
                    {link.label}
                    {hasChildren && (
                      <span className="text-xs text-brand-orange/80">▼</span>
                    )}
                  </button>
                ) : (
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      [
                        "px-4 py-2 rounded-full transition-colors flex items-center gap-1",
                        isActive || active
                          ? "text-white bg-white/5"
                          : "text-white/70 hover:text-brand-orange",
                      ].join(" ")
                    }
                  >
                    {link.label}
                    {hasChildren && (
                      <span className="text-xs text-brand-orange/80">▼</span>
                    )}
                  </NavLink>
                )}
                {hasChildren && openDropdown === link.label && (
                  <Dropdown
                    items={link.children}
                    onNavigate={handleNavigate}
                    onEnter={() => openMenu(link.label)}
                    onLeave={closeMenu}
                  />
                )}
              </div>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="orange-glow inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
          >
            Contact us
            <span className="text-lg">↗</span>
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="lg:hidden relative h-12 w-12 rounded-2xl border border-white/10 bg-white/5 text-white"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 space-y-1.5">
            <span
              className={`block h-0.5 bg-white transition ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/5 bg-[#07090f]/95 backdrop-blur-xl">
          <div className="section-shell flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col gap-2">
                {link.to ? (
                  <Link
                    to={link.to}
                    onClick={handleNavigate}
                    className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-white"
                  >
                    <span>{link.label}</span>
                    {link.children && (
                      <span className="text-xs uppercase text-white/60">
                        Menu
                      </span>
                    )}
                  </Link>
                ) : (
                  <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-white">
                    <span>{link.label}</span>
                    {link.children && (
                      <span className="text-xs uppercase text-white/60">
                        Menu
                      </span>
                    )}
                  </div>
                )}
                {link.children && (
                  <div className="grid gap-1 pl-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        onClick={handleNavigate}
                        className="rounded-lg px-3 py-2 text-sm text-white/80 hover:bg-white/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              onClick={handleNavigate}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-4 py-3 text-sm font-semibold text-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
