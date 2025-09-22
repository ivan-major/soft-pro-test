# Realty Map — Vue 3 App

A simple application for displaying real estate objects on a map using Vue 3, Vite, TailwindCSS, Vue Router, and MapLibre GL.

# 🚀 Technology stack

- Vue 3 + Vite
- Tailwind CSS
- Vue Router
- @indoorequal/vue-maplibre-gl
- TypeScript

## Project Setup
```sh
git clone https://github.com/username/realty-map.git

cd realty-map
```

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

# 📂 Project structure (FSD)

src/
 ├─ entities/      # all objects of app, there UI, stores, api
 ├─ layouts/       # page layouts
 ├─ router/        # app routes
 ├─ shared/        # UI-components, utils, static data, helpers
 ├─ views/         # pages (Home, Map, Property)
 ├─ widgets/       # global components, header, footer etc.
 └─ App.vue        # main component
