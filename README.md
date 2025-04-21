# 🛡️ Maora – Site Vitrine

Interface de présentation de la solution **Maora**, dédiée à la tokenisation confidentielle d’actifs financiers pour les institutions.

---

## 🚀 Démarrage local

### 📦 Prérequis

- Node.js >= 18.x
- pnpm (recommandé) ou npm/yarn

### 🔧 Installation

```bash
pnpm install
```

### 🧪 Lancer en mode dev

```bash
pnpm dev
```

Le site sera dispo sur `http://localhost:5173`

---

## 📦 Build de production

```bash
pnpm build
```

Les fichiers statiques seront générés dans le dossier `/dist`.

---

## 🧙‍♂️ Stack utilisée

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [vue-i18n](https://vue-i18n.intlify.dev/) (gestion multilingue)
- Animations CSS personnalisées (fadeInUp, glow, etc.)

---

## 🧑‍💻 Structure du projet

```bash
src/
├─ components/         # Composants de sections
├─ assets/             # Fonts, images, etc.
├─ locales/            # Fichiers i18n
├─ App.vue             # Composition de la page
├─ main.js             # Entry point
```
