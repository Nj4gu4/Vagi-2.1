import { useState } from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const products = [
  {
    id: 1,
    name: 'Floral Summer Dress',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    category: 'Women',
  },
  {
    id: 2,
    name: 'Classic Business Suit',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
    category: 'Men',
  },
  {
    id: 3,
    name: 'Designer Denim Collection',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1582418702059-97ebafb35d09',
    category: 'Unisex',
  },
  {
    id: 4,
    name: 'Evening Gown',
    price: 259.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae',
    category: 'Women',
  },
  {
    id: 5,
    name: 'Casual Blazer',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    category: 'Men',
  },
  {
    id: 6,
    name: 'Summer Collection Set',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b',
    category: 'Unisex',
  }
];

function Shop() {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop Collection</h1>
        <div className="flex gap-4">
          {['All', 'Men', 'Women', 'Unisex'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105"
          >
            <div className="relative h-80">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4">
                <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">${product.price}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition flex items-center gap-2"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;