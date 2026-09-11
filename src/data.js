export const products = [
  { id: 1, name: 'Bio zabital, barista', brand: 'Oatly', category: 'Növényi italok', price: 1090, oldPrice: 1290, unit: '1 l', image: 'https://images.unsplash.com/photo-1600788907416-456578634209?auto=format&fit=crop&w=700&q=82', badge: '–15%', color: '#ece2cf' },
  { id: 2, name: 'Krémes mandulavaj', brand: 'Rapunzel', category: 'Reggeli', price: 2890, unit: '250 g', image: 'https://images.unsplash.com/photo-1528750955925-9c7480bca0cf?auto=format&fit=crop&w=700&q=82', badge: 'Kedvenc', color: '#ead9bf' },
  { id: 3, name: 'Extra szűz olívaolaj', brand: 'Bio Planète', category: 'Főzés', price: 4490, unit: '500 ml', image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=82', badge: 'Új', color: '#e7e3c8' },
  { id: 4, name: 'Ceremoniális matcha', brand: 'Moya', category: 'Tea & kávé', price: 5390, unit: '30 g', image: 'https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&w=700&q=82', badge: 'Prémium', color: '#dce8cd' },
  { id: 5, name: 'Pirított granola', brand: 'ElitBio', category: 'Reggeli', price: 2290, unit: '350 g', image: 'https://images.unsplash.com/photo-1517093157656-b9eccef91cb1?auto=format&fit=crop&w=700&q=82', badge: 'Saját márka', color: '#eadcc9' },
  { id: 6, name: 'Étcsokoládé 85%', brand: 'Vivani', category: 'Nasik', price: 1290, unit: '100 g', image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=700&q=82', badge: 'Vegán', color: '#ded3c8' },
  { id: 7, name: 'Virágméz termelői', brand: 'Mézesem', category: 'Reggeli', price: 2690, unit: '400 g', image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=700&q=82', badge: 'Hazai', color: '#f0dfae' },
  { id: 8, name: 'Bio basmati rizs', brand: 'Green Organics', category: 'Főzés', price: 1790, unit: '500 g', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=82', badge: 'Bio', color: '#e6e0d4' }
]

export const orders = [
  { id: '#EB-2849', customer: 'Nagy Anna', date: 'Ma, 10:42', total: 14270, status: 'Feldolgozás' },
  { id: '#EB-2848', customer: 'Kiss Dániel', date: 'Ma, 09:16', total: 8990, status: 'Csomagolva' },
  { id: '#EB-2847', customer: 'Szabó Lili', date: 'Tegnap, 18:03', total: 21680, status: 'Átadva' },
  { id: '#EB-2846', customer: 'Varga Péter', date: 'Tegnap, 15:31', total: 6340, status: 'Átadva' }
]

export const money = value => new Intl.NumberFormat('hu-HU').format(value) + ' Ft'
