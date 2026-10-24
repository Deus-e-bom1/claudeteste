@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #ffffff;
  color: #1d1d1f;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Titanium surface used by the card */
.titanium {
  background:
    linear-gradient(115deg, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0.0) 62%),
    linear-gradient(135deg, #f4f5f7 0%, #c9ccd2 28%, #eceef1 52%, #aeb2ba 78%, #d9dce1 100%);
}

.titanium-brushed::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background-image: repeating-linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.07) 0px,
    rgba(255, 255, 255, 0.07) 1px,
    rgba(0, 0, 0, 0.03) 1px,
    rgba(0, 0, 0, 0.03) 2px
  );
  mix-blend-mode: overlay;
  pointer-events: none;
}

.btn-press:active {
  transform: scale(0.97);
}
