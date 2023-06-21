const colors = [
  {
    name: 'slate',
    swatches: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#0f172a',
      900: '#020617',
      950: '#020617',
    },
  },
  {
    name: 'emerald',
    swatches: {
      50: '#ecfdf5',
      100: '#d1fae5',
      200: '#a7f3d0',
      300: '#6ee7b7',
      400: '#34d399',
      500: '#10b981',
      600: '#0596699',
      700: '#047857',
      800: '#065f46',
      900: '#064e3b',
      950: '#052e16',
    },
  },
];

console.log(colors);

function createSwatches() {}

function addToDOM(colorsArr) {
  const swatchesEl = document.getElementById('swatches');
}

function init() {
  console.log('init');
}

document.addEventListener('DOMContentLoaded', init);
