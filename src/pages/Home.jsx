import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaMapMarkerAlt } from 'react-icons/fa';
import Newsletter from '../components/Newsletter';
import Testimonials from '../components/Testimonials';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Fashion Banner"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-white max-w-lg">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Discover Your Unique Style
              </h1>
              <p className="text-xl mb-8">
                Elevate your wardrobe with our exclusive designs crafted for the modern individual.
              </p>
              <div className="space-x-4">
                <Link
                  to="/shop"
                  className="inline-block bg-white text-black px-8 py-3 rounded-full hover:bg-gray-200 transition"
                >
                  Shop Now
                </Link>
                <Link
                  to="/contact"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Men',
                image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              },
              {
                name: 'Women',
                image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              },
              {
                name: 'Unisex',
                image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              },
              {
                name: 'Accessories',
                image: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
              }
            ].map((category) => (
              <Link
                key={category.name}
                to="/shop"
                className="group relative h-96 overflow-hidden rounded-lg"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  <p className="text-white mt-2">Shop Now →</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                VAGI Fashion is more than just a clothing brand - it's a celebration of individuality and style. Founded with 
                a passion for creating unique, high-quality fashion pieces, we've grown into a destination for those who 
                seek to express themselves through their wardrobe.
              </p>
              <p className="text-gray-600 mb-8">
                Our team of experienced designers works tirelessly to create pieces that not only look stunning but also 
                feel comfortable and empowering. We believe that fashion should be inclusive, sustainable, and a true 
                reflection of one's personality.
              </p>
              <Link
                to="/about"
                className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
              >
                Learn More
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Design Studio"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e"
                alt="Fashion Design"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />

      {/* Location Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
              <div className="flex items-center gap-2 mb-4">
                <FaMapMarkerAlt className="text-2xl text-red-500" />
                <p className="text-xl">Thika Town, Kiambu County</p>
              </div>
              <p className="text-gray-600 mb-6">
                Experience our collections in person at our flagship store. Our fashion consultants are ready to help you 
                discover your perfect style.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Opening Hours:</span>
                  Mon - Sat: 9:00 AM - 8:00 PM
                </p>
                <p className="flex items-center gap-2">
                  <span className="font-semibold">Sunday:</span>
                  10:00 AM - 6:00 PM
                </p>
              </div>
              <a
                href="https://www.google.com/maps?q=thika+town+kiambu+county"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition mt-8"
              >
                Get Directions
              </a>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.128977665396!2d37.07291!3d-1.0387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126e5c4f9!2sThika!5e0!3m2!1sen!2ske!4v1650000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;