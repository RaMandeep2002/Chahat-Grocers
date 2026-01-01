CREATE TABLE IF NOT EXISTS categories (
    id uuid primary key default gen_random_uuid(),
    name text not null,
    icon_name text not null,
    color_gradient text not null,
    image_url text not null,
    created_at timestamp with time zone default now()
);

alter table categories enable row level security;

create policy "Categories are publicly readable"
on categories
for select
using (true);


INSERT INTO categories (name, icon_name, color_gradient, image_url) VALUES
  ('Grocery', 'ShoppingBasket', 'from-pink-500 to-orange-500', 'https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Dairy Products', 'Milk', 'from-blue-500 to-cyan-500', 'https://images.pexels.com/photos/3944151/pexels-photo-3944151.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Confectionery', 'Candy', 'from-pink-500 to-rose-500', 'https://images.pexels.com/photos/5632658/pexels-photo-5632658.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Cold Drinks', 'Coffee', 'from-orange-500 to-yellow-500', 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Ice Cream', 'Cookie', 'from-cyan-500 to-blue-500', 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Toys', 'Gamepad2', 'from-pink-500 to-fuchsia-500', 'https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Plastic Wares', 'Boxes', 'from-green-500 to-emerald-500', 'https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Kitchen Wares', 'UtensilsCrossed', 'from-orange-500 to-red-500', 'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Disposable Items', 'Trash2', 'from-gray-500 to-slate-600', 'https://images.pexels.com/photos/3962283/pexels-photo-3962283.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Cosmetics', 'Sparkles', 'from-pink-500 to-purple-500', 'https://images.pexels.com/photos/3962282/pexels-photo-3962282.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Toiletry', 'Sparkles', 'from-blue-500 to-cyan-500', 'https://images.pexels.com/photos/3962281/pexels-photo-3962281.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Stationery', 'PenTool', 'from-orange-500 to-amber-500', 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600'),
  ('Gift Items', 'Gift', 'from-rose-500 to-pink-500', 'https://images.pexels.com/photos/3764528/pexels-photo-3764528.jpeg?auto=compress&cs=tinysrgb&w=600')
ON CONFLICT DO NOTHING;
