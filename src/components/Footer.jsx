import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VAGI Fashion</h3>
            <p className="text-gray-400 mb-4">Creating unique designs that celebrate individuality and self-expression.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition">
                <FaPinterest size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-purple-500 transition block">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-purple-500 transition block">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-purple-500 transition block">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-gray-400 hover:text-purple-500 transition block">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <FaMapMarkerAlt className="mr-2" />
                Thika Town, Kiambu County
              </li>
              <li className="flex items-center text-gray-400">
                <FaPhone className="mr-2" />
                +254 700 000000
              </li>
              <li className="flex items-center text-gray-400">
                <FaEnvelope className="mr-2" />
                info@vagifashion.com
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get special offers and updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <button 
                type="submit"
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} VAGI Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;