'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBasket, Milk, Candy, Coffee, Cookie, Gamepad2, Boxes, UtensilsCrossed, Trash2, Sparkles, PenTool, Gift } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { createClient } from '@/lib/superbase/client';

interface Category {
  id: string;
  name: string;
  icon_name: string;
  color_gradient: string;
  image_url: string;
  created_at?: string;
}

// Map icon names to Lucide React icon components
function getIconComponent(iconName: string) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    ShoppingBasket,
    Milk,
    Candy,
    Coffee,
    Cookie,
    Gamepad2,
    Boxes,
    UtensilsCrossed,
    Trash2,
    Sparkles,
    PenTool,
    Gift,
  };

  const IconComponent = iconMap[iconName] || ShoppingBasket;
  return <IconComponent className="w-6 h-6" />;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          throw error;
        }

        setCategories(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        console.error('Error fetching categories:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Our Categories
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our wide range of products for all your daily needs
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-gray-600">Loading categories...</div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                Our Categories
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our wide range of products for all your daily needs
            </p>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="text-lg text-red-600">Error: {error}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Our Categories
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse through our wide range of products for all your daily needs
          </p>
        </div>

        <div className="relative group">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-16!"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="group rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer border border-gray-100 overflow-hidden h-full flex flex-col">
                  <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={category.image_url}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Optional overlay, but no text background */}
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1 px-6 pt-6 pb-8">
                    <div className={`w-14 h-14 bg-linear-to-br ${category.color_gradient} rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                      {getIconComponent(category.icon_name)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 transition-colors duration-200 group-hover:text-pink-600 text-center">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="swiper-button-prev hidden group-hover:flex absolute left-0 top-1/3 -translate-y-1/2 -translate-x-8 z-10 w-12 h-12 bg-linear-to-r from-pink-500 to-orange-500 text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button className="swiper-button-next hidden group-hover:flex absolute right-0 top-1/3 -translate-y-1/2 translate-x-8 z-10 w-12 h-12 bg-linear-to-r from-pink-500 to-orange-500 text-white rounded-full items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          background-color: #ec4899;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background-color: #ec4899;
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          position: absolute !important;
          width: auto !important;
          height: auto !important;
          background: transparent !important;
          color: inherit !important;
        }
      `}</style>
    </section>
  );
}