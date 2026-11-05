# AgriVision Launch & Reliability Implementation Plan

Plan to diagnose and permanently resolve opening issues for **AgriVision – Indian Agricultural Crop Production Analysis System**, ensuring flawless rendering in the AI Studio preview iframe, production builds, and local development environments.

## User Review & Critical Decisions

> [!IMPORTANT]
> The dev server has been restarted and verified with HTTP 200 responses. To ensure zero blank screens under any network latency or unexpected client exception, we are implementing a resilient top-level Error Boundary with diagnostic auto-recovery and direct asset import references.

- **Confirmed Decision 1**: Implement a bulletproof React Error Boundary in `src/main.tsx` with auto-reload and fallback diagnostics.
- **Confirmed Decision 2**: Ensure all internal images have inline CSS/SVG fallback containers so missing or slow network assets never halt component mounting.
- **Confirmed Decision 3**: Retain full interactive scope (36 States/UTs, 20+ crops, multi-year trends, state comparison, and weather advisories) with zero regression.

---

## 1. Overview & Core Concept

- **What It Does**: Provides real-time and historical agricultural intelligence across all 28 states and 8 union territories of India, synthesizing data from the Directorate of Economics and Statistics (DES), ICAR, and IMD into interactive maps, comparison matrices, and crop advisories.
- **Target Audience**: Agricultural researchers, farmers, policy analysts, students, and agribusiness professionals.
- **Key Value**: Instant exploration of soil profiles, crop cultivars, seasonal windows, production rankings, and agro-climatic advisories in a unified interface.

---

## 2. User Experience & Visual Design

- **Reliability & Loading State**:
  - Top-level Error Boundary presenting a clean recovery screen with an "AgriVision Reload" action if an unhandled JavaScript exception occurs.
  - Zero-blank-screen assurance: if an image or network resource fails to load, styled SVG placeholders preserve layout geometry without visual breakage.
- **Visual Identity & Theme**:
  - Palette: Deep agricultural emerald (`#166534`), harvest sage (`#10b981`), warm soil stone (`#F8FAF6` canvas, `#1c1917` text).
  - Typography: `Plus Jakarta Sans` for clean titles and UI controls, paired with monospace tabular figures (`font-mono tabular-nums`) for production stats.
  - Controls: Single-line buttons and tabs with visible focus rings and WCAG AA contrast compliance.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Resilience Architecture**
  - *Chosen Approach*: Wrap the root application in a React Error Boundary with console diagnostic tracing.
  - *Why*: In sandboxed iframes, a single uncaught exception (such as `window.print` or an unexpected null property) can unmount the entire DOM tree without an error boundary.
- **Decision 2: Dev Server & Cache Invalidation**
  - *Chosen Approach*: Restart Vite dev server and verify pre-bundled dependencies.
  - *Why*: When the initial placeholder app is updated, Vite with `DISABLE_HMR=true` requires an explicit fresh process spawn to serve updated modules.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────┐
│                      index.html                        │
│         (Google Fonts + Plus Jakarta Sans)             │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│                      main.tsx                          │
│     ┌────────────────────────────────────────────┐     │
│     │            Root Error Boundary             │     │
│     └─────────────────────┬──────────────────────┘     │
│                           │                            │
│     ┌─────────────────────▼──────────────────────┐     │
│     │                 App.tsx                    │     │
│     │  (Active Tab State, Cross-Nav & Modals)    │     │
│     └───────┬─────────────┬─────────────┬────────┘     │
└─────────────┼─────────────┼─────────────┼──────────────┘
              │             │             │
   ┌──────────▼────┐ ┌──────▼──────┐ ┌────▼─────────────┐
   │ Interactive   │ │ Crop        │ │ Production       │
   │ India Map     │ │ Database    │ │ Dashboard        │
   │ (36 States)   │ │ (20+ Crops) │ │ & State Compare  │
   └───────────────┘ └─────────────┘ └──────────────────┘
```

### Planned Sub-Tasks for Execution:
1. **Root Error Boundary**: Create `src/components/ErrorBoundary.tsx` and wrap `<App />` in `src/main.tsx`.
2. **Vite Config Modernization**: Clean up `__dirname` deprecation in `vite.config.ts` to `import.meta.dirname` to eliminate bundler warnings.
3. **Verified Image Imports**: Ensure all image references use robust path resolution with explicit fallbacks.
4. **Dev Server Verification**: Verify server serves 200 OK on port 3000 and passes both `compile_applet` and `lint_applet`.
