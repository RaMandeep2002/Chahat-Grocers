import { Phone, MapPin, Clock, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re here to help! Reach out to us for orders, inquiries, or home delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-linear-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone Number</h4>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-pink-600 transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Store Location</h4>
                  <p className="text-gray-600">123 Main Street, Your City, State 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Store Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 7:00 AM - 10:00 PM</p>
                  <p className="text-gray-600">Sunday: 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                  <a href="mailto:info@chahatgrocers.com" className="text-gray-600 hover:text-pink-600 transition-colors">
                    info@chahatgrocers.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-pink-50 to-orange-50 rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h3>

            <div className="space-y-4">
              <a
                href="tel:+1234567890"
                className="group flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Call for Order
                  </h4>
                  <p className="text-sm text-gray-600">Quick phone orders</p>
                </div>
              </a>

              {/* <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                    WhatsApp Us
                  </h4>
                  <p className="text-sm text-gray-600">Chat with us directly</p>
                </div>
              </a> */}

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Get Directions
                  </h4>
                  <p className="text-sm text-gray-600">Find us on map</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
