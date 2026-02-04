## 2024-05-22 - Mobile Menu Accessibility
**Learning:** Common pattern: `div` used as hamburger button. Converting to `<button>` requires extensive CSS reset (background, border, padding) to match original design, but immediately enables keyboard focus.
**Action:** Always check `style.css` for button resets when converting semantic elements. Add `:focus-visible` to ensure the new button is usable.
