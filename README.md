# Digital CRM

A customer 360° dashboard built with React and Redux. The UI is built without external component libraries (no Bootstrap, MaterialUI, etc.), keeping the bundle small with clean, modular CSS.

## Getting Started (standalone app)

```bash
npm install
npm start          # dev server on http://localhost:3000
npm run build      # production app bundle → dist/
npm test           # Jest + @testing-library/react
```

## Using as a component library in Next.js

The project ships a production-ready library build that can be consumed by any Next.js project.

### 1. Install

```bash
npm install digital-crm
```

### 2. Import the CSS once

In your root layout (`app/layout.js` for App Router, or `pages/_app.js` for Pages Router):

```js
// app/layout.js
import "digital-crm/styles.css";
```

### 3. Use components

Client components that use interactivity (Tabs, etc.) must be wrapped in `"use client"`:

```jsx
"use client";

import { Tabs, TabLinks, TabLink, Tab, Loading, ReadOnlyData } from "digital-crm";

export default function MyCrmPage() {
  return (
    <>
      <Loading>Fetching data...</Loading>

      <ReadOnlyData label="Account" value="Acme Corp" />
      <ReadOnlyData label="Balance" value="$50,000" ccicon />

      <Tabs defaultActive="0">
        <TabLinks>
          <TabLink id="0">Overview</TabLink>
          <TabLink id="1">Transactions</TabLink>
        </TabLinks>
        <Tab id="0">
          <p>Overview content here.</p>
        </Tab>
        <Tab id="1" deferLoaded>
          <p>Transactions load on demand.</p>
        </Tab>
      </Tabs>
    </>
  );
}
```

### 4. Configure `next.config.mjs`

Add `digital-crm` to `transpilePackages` so Next.js processes its JSX correctly:

```js
// next.config.mjs
const nextConfig = {
  transpilePackages: ["digital-crm"],
};
export default nextConfig;
```

### Exported components

| Export | Description |
|---|---|
| `App` | Full CRM application (includes Redux Provider + store) |
| `Loading` | Loading spinner/message |
| `ReadOnlyData` | Label + value field with optional copy-to-clipboard button |
| `Tabs` | Tab container (manages active state) |
| `TabLinks` | Tab navigation bar |
| `TabLink` | Individual tab link |
| `Tab` | Tab content panel (supports `deferLoaded`) |
| `WidgetCard` | Card widget container |
| `Table` | Data table |
| `TableColumn` | Table column definition |
| `TableColumns` | Table column set |
| `TableRow` | Table row |
| `TableRows` | Table row set |
| `Layout` | Page layout wrapper |
| `AutoComplete` | Auto-complete input |

### Library build

To rebuild the library bundles after source changes:

```bash
npm run build:lib
```

This produces:
- `dist/index.cjs.js` — CommonJS (Next.js SSR / `require`)
- `dist/index.esm.js` — ES Module (tree-shaking / `import`)
- `dist/styles.css` — Extracted CSS

React and react-dom are **peer dependencies** and are not bundled.

### Screenshot — components running inside Next.js 16

![Digital CRM components rendered in a Next.js production app](https://github.com/user-attachments/assets/e42f330d-77d9-4b37-af26-db1358edfe6e)

A working example lives in [`examples/nextjs-demo/`](./examples/nextjs-demo/).

## Unit Tests

Tests use Jest + `@testing-library/react`:

```bash
npm test
```
