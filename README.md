# ElitBio modern webshop

A responsive, Hungarian-language commerce prototype for ElitBio. The single-page application includes a polished customer storefront, product discovery and filtering, a persistent-in-session basket and checkout flow, plus role-specific admin and owner dashboards.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL and use the role selector in the header to switch between **Vásárló**, **Admin**, and **Tulajdonos** views.

## Production build

```bash
npm run build
```

## Included flows

- Category tabs and real-time product search
- Add-to-cart, quantity editing, free-shipping progress, validated checkout, and order confirmation
- Newsletter signup confirmation
- Responsive desktop and mobile layouts
- Operational overview for staff, including KPIs, revenue visualization, stock shortcuts, popular products, and recent orders
- Expanded owner reporting with monthly-result visibility and analytics navigation

The product and dashboard data are currently local demo fixtures in `src/data.js`; they can be replaced with API queries when a commerce backend is connected.
