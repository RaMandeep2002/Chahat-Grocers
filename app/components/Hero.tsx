import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[50vh] flex items-center justify-center py-28 sm:py-36 lg:py-44 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-pink-50 via-orange-50 to-white overflow-hidden"
    >
      {/* Blurred cool background shapes using absolute divs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-linear-to-br from-pink-400 via-fuchsia-400 to-orange-400 opacity-30 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute top-36 right-12 w-72 h-72 bg-linear-to-br from-orange-300 via-yellow-200 to-purple-300 opacity-20 rounded-full blur-2xl z-0 pointer-events-none" />
      <img
        src="https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=900"
        alt="Colorful groceries background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none z-0"
      />

      <div className="relative z-10 w-full flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-14">
        {/* Left: Hero text section */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-white/80 text-pink-600 font-semibold text-xs tracking-widest shadow mb-5 border border-orange-100">
            FAST & LOCAL
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-5">
            <span className="bg-linear-to-r from-pink-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Chahat Grocers
            </span>
          </h1>

          <p className="text-lg sm:text-2xl lg:text-3xl font-medium text-gray-700 leading-snug mb-5">
            Your One-Point Solution for
            <br className="hidden sm:inline" /> Daily Essentials
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-10 max-w-xl md:max-w-md mx-auto md:mx-0">
            Shop quality groceries at the best prices. Ultra-fast delivery to
            your doorstep, Experience the new way to shop locally!
          </p>
          <div className="flex flex-col xs:flex-row gap-4 justify-center md:justify-start items-center">
            {/* <a
              href="#categories"
              className="group flex items-center space-x-3 bg-linear-to-r from-pink-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full xs:w-auto justify-center border border-orange-200"
            >
              <ShoppingCart className="w-6 h-6 group-hover:animate-pulse" />
              <span>Order Now</span>
            </a> */}
            <a
              href="tel:+1234567890"
              className="group flex items-center space-x-3 bg-white/90 text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow border-2 border-pink-100 hover:border-pink-400 hover:shadow-xl transition-all duration-300 hover:scale-105 w-full xs:w-auto justify-center"
            >
              <Phone className="w-6 h-6 text-pink-600 group-hover:animate-pulse" />
              <span>Call for Delivery</span>
            </a>
          </div>
        </div>

        {/* Right: Card with floating effect */}

        <div className="flex-1 flex justify-center">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border border-orange-100 bg-white/70 backdrop-blur-xl shadow-xl p-8 min-w-[320px]">
            {/* Products */}
            <div className="group flex flex-col items-center justify-center p-6">
              <span className="text-4xl font-extrabold bg-linear-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent mb-1">
                500+
              </span>
              <span className="text-sm font-medium text-gray-600 tracking-wide">
                Products
              </span>
            </div>

            {/* Customers */}
            <div className="group flex flex-col items-center justify-center p-6 ">
              <span className="text-4xl font-extrabold bg-linear-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-1">
                1000+
              </span>
              <span className="text-sm font-medium text-gray-600 tracking-wide">
                Happy Customers
              </span>
            </div>

            {/* Delivery */}
            <div className="col-span-2 group flex flex-col items-center justify-center p-6 ">
              <span className="text-3xl font-extrabold bg-linear-to-r from-green-400 to-orange-500 bg-clip-text text-transparent mb-1">
                Fast Delivery
              </span>
              {/* <span className="text-sm font-medium text-gray-600 tracking-wide">
                Across India
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
