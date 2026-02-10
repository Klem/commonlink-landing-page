# Lien Commun — Landing Page

Landing page pour **Lien Commun**, plateforme de traçabilité des dépenses associatives.

## Aperçu

Lien Commun permet aux donateurs de suivre l'utilisation des fonds chez les associations partenaires, avec des preuves simples à consulter. La technologie reste invisible pour l'utilisateur — pas de jargon crypto ou blockchain.

**Lancement prévu : T2 2026**

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Astro 5.x |
| Styling | Tailwind CSS 3.4.x |
| Islands | React (si interactivité requise) |
| Polices | Manrope (UI) + Luciole (lecture, accessibilité) |
| Icônes | SVG inline (style Lucide) |

## Installation

```bash
# Cloner le repo
git clone <repo-url>
cd landing-page

# Installer les dépendances
npm install

# Lancer le serveur de dev
npm run dev
```

Le site est accessible sur `http://localhost:4321`

## Commandes

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Preview du build |

## Structure du projet

```
landing-page/
├── public/
│   └── fonts/                # Polices Luciole (woff2)
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── HowItWorks.astro
│   │   ├── Traceability.astro
│   │   ├── Credibility.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   ├── ui/               # Composants réutilisables
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Tag.astro
│   │   │   └── SectionWrapper.astro
│   │   └── islands/          # Composants React (hydratés)
│   ├── layouts/
│   │   └── Base.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── CLAUDE.md                 # Instructions pour Claude Code
└── README.md
```

## Palette de couleurs

| Nom | Hex | Usage |
|-----|-----|-------|
| `petrol` | `#1A3B4C` | Titres, navigation, boutons (60-70%) |
| `mint` | `#35B8A6` | Tags statut, preuves, checks (10-15%) |
| `apricot` | `#FF9E6B` | Accents rares (0-5%) |
| `warm-gray` | `#F7F7F5` | Fond principal |
| `dark` | `#102027` | Texte, footer |

## Polices

- **Manrope** : Titres, navigation, boutons, chiffres
- **Luciole** : Corps de texte, FAQ (conçue pour l'accessibilité)

Les fichiers Luciole doivent être placés dans `public/fonts/` :
- `Luciole-Regular.woff2`
- `Luciole-Bold.woff2`

## Accessibilité

- Contraste AA minimum (4.5:1 texte, 3:1 titres)
- Focus clavier visible (outline 3px petrol)
- Skip-to-content link
- Support `prefers-reduced-motion`
- Police Luciole pour malvoyants
- Cibles tactiles min 44px

## Sections de la page

1. **Hero** — Promesse principale + illustration
2. **Problème** — Constats donateurs/associations
3. **Solution** — 3 promesses (Transparence, Preuves, Simplicité)
4. **Comment ça marche** — 3 étapes
5. **Traçabilité** — Encadré explicatif (anti-tech)
6. **Crédibilité** — État d'avancement honnête
7. **FAQ** — 6 questions dont "Est-ce de la crypto ?"
8. **Footer** — Mentions légales, navigation, contact

## Déploiement

Pour déployer sur Vercel ou Netlify, ajouter l'adapter correspondant :

```bash
# Vercel
npx astro add vercel

# Netlify
npx astro add netlify
```

Puis modifier `astro.config.mjs` pour inclure l'adapter.

## Licence

Projet privé — Tous droits réservés.

---

*Construit avec [Astro](https://astro.build)*
