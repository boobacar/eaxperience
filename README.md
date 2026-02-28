# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form email setup (SMTP)

The contact form now sends data to `/api/contact`, and the server sends an HTML email.

Create these environment variables in Vercel (or your host):

- `EMAIL_SMTP_HOST` (ex: `smtp.gmail.com`)
- `EMAIL_SMTP_PORT` (ex: `465` for SSL or `587` for TLS)
- `EMAIL_SMTP_USER` (SMTP username / sender email)
- `EMAIL_SMTP_PASS` (SMTP password or app password)
- `CONTACT_TO` (destination inbox, ex: `boubsfal@gmail.com`)

### Gmail quick setup

- Use `smtp.gmail.com`
- Use a Google **App Password** (not your normal password)
- For SSL set port `465`

If `CONTACT_TO` is not set, the API defaults to `boubsfal@gmail.com`.
