import { ShoppingBasket, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <ShoppingBasket className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Chahat Grocers</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted neighborhood store for all daily essentials. Quality products, affordable prices, and exceptional service.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-pink-500 hover:to-orange-500 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center">
                  Home
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center">
                  Categories
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors flex items-center">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Categories</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Grocery</li>
              <li className="text-gray-400">Dairy Products</li>
              <li className="text-gray-400">Confectionery</li>
              <li className="text-gray-400">Cold Drinks</li>
              <li className="text-gray-400">Kitchen Wares</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-pink-400 shrink-0 mt-1" />
                <div>
                  <a href="tel:+1234567890" className="text-gray-400 hover:text-pink-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-pink-400 shrink-0 mt-1" />
                <div>
                  <a href="mailto:info@chahatgrocers.com" className="text-gray-400 hover:text-pink-400 transition-colors">
                    info@chahatgrocers.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-1" />
                <div>
                  <span className="text-gray-400">
                    123 Main Street<br />Your City, State 12345
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              {currentYear} Chahat Grocers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
