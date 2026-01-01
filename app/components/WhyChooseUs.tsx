import { Truck, Package, DollarSign, Heart } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free & Quick Home Delivery',
    description: 'Get your orders delivered to your doorstep quickly and at no extra cost',
    color: 'from-pink-500 to-orange-500',
  },
  {
    icon: Package,
    title: 'Wide Range of Daily Essentials',
    description: 'Everything you need for your daily life, all in one place',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Best prices in town with regular discounts and special offers',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Trusted Local Store',
    description: 'Your neighborhood store serving the community with care and quality',
    color: 'from-rose-500 to-pink-500',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-pink-50 via-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We&apos;re committed to providing the best shopping experience for our customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-linear-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-pink-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
