export const categories = ['Electronics', 'Fashion', 'Food', 'Books']

export const products = [
  { id: 1, name: 'Neon Pulse Earbuds', category: 'Electronics', price: 1299, stock: 9, accent: '#38bdf8' },
  { id: 2, name: 'Quantum Weave Hoodie', category: 'Fashion', price: 1799, stock: 4, accent: '#a78bfa' },
  { id: 3, name: 'Synth Noodle Pack', category: 'Food', price: 299, stock: 13, accent: '#22d3ee' },
  { id: 4, name: 'Glitch City Almanac', category: 'Books', price: 699, stock: 7, accent: '#818cf8' },
  { id: 5, name: 'Holo Lens Goggles', category: 'Electronics', price: 2499, stock: 2, accent: '#0ea5e9' },
  { id: 6, name: 'Signal Drift Sneakers', category: 'Fashion', price: 2199, stock: 5, accent: '#8b5cf6' },
  { id: 7, name: 'Static Berry Soda', category: 'Food', price: 179, stock: 18, accent: '#06b6d4' },
  { id: 8, name: 'Debuggers Pocket Guide', category: 'Books', price: 499, stock: 11, accent: '#6366f1' },
  { id: 9, name: 'Ghost Pixel Mouse', category: 'Electronics', price: 899, stock: 14, accent: '#60a5fa' },
  { id: 10, name: 'Vector Cut Jacket', category: 'Fashion', price: 2699, stock: 6, accent: '#9333ea' },
  { id: 11, name: 'Circuit Spice Chips', category: 'Food', price: 149, stock: 23, accent: '#0891b2' },
  { id: 12, name: 'Kernel Tales Vol. 2', category: 'Books', price: 799, stock: 3, accent: '#4f46e5' },
  { id: 13, name: 'FluxPad Mini Console', category: 'Electronics', price: 3299, stock: 3, accent: '#0284c7' },
  { id: 14, name: 'MonoChrome Cargo Set', category: 'Fashion', price: 1899, stock: 8, accent: '#7c3aed' },
  { id: 15, name: 'Binary Bean Coffee', category: 'Food', price: 349, stock: 12, accent: '#0e7490' },
  { id: 16, name: 'Infinite Loop Journal', category: 'Books', price: 359, stock: 17, accent: '#3730a3' },
  { id: 17, name: 'PulseDock Charger', category: 'Electronics', price: 1099, stock: 10, accent: '#38bdf8' },
  { id: 18, name: 'Neon Fiber Cap', category: 'Fashion', price: 649, stock: 9, accent: '#a855f7' },
  { id: 19, name: 'Patchwork Dumplings', category: 'Food', price: 219, stock: 15, accent: '#155e75' },
  { id: 20, name: 'Compiler Dreams', category: 'Books', price: 899, stock: 5, accent: '#4338ca' },
  { id: 21, name: 'Spectra VR Sleeve', category: 'Electronics', price: 1899, stock: 4, accent: '#0ea5e9' },
  { id: 22, name: 'Threadline Gloves', category: 'Fashion', price: 429, stock: 16, accent: '#6d28d9' },
  { id: 23, name: 'Coded Curry Bowl', category: 'Food', price: 259, stock: 8, accent: '#164e63' },
  { id: 24, name: 'Off By One Myths', category: 'Books', price: 559, stock: 14, accent: '#312e81' },
]

export function formatINR(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function stockLabel(stock) {
  if (stock <= 3) return 'LOW STOCK'
  return 'IN STOCK'
}
