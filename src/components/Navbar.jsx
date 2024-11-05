import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Menu, Transition } from '@headlessui/react';
import { ShoppingBagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Failed to log out');
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
              VAGI
            </span>
            <span className="text-2xl font-light">Fashion</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-purple-600 transition">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-purple-600 transition">
              Shop
            </Link>
            {user?.isAdmin && (
              <Link to="/admin" className="text-gray-600 hover:text-purple-600 transition">
                Admin
              </Link>
            )}
          </div>

          <div className="flex items-center space-x-6">
            {user && (
              <Link to="/cart" className="relative text-gray-600 hover:text-purple-600 transition">
                <ShoppingBagIcon className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {itemCount}
                  </span>
                )}
              </Link>
            )}

            <Menu as="div" className="relative">
              <Menu.Button className="flex items-center text-gray-600 hover:text-purple-600 transition">
                <UserCircleIcon className="h-6 w-6" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {user ? (
                    <>
                      <Menu.Item>
                        <div className="px-4 py-2 text-sm text-gray-500 border-b">
                          {user.email}
                        </div>
                      </Menu.Item>
                      <Menu.Item>
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        >
                          Sign out
                        </button>
                      </Menu.Item>
                    </>
                  ) : (
                    <>
                      <Menu.Item>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        >
                          Sign in
                        </Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link
                          to="/signup"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50"
                        >
                          Sign up
                        </Link>
                      </Menu.Item>
                    </>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;