import { Link } from 'react-router-dom';

interface CategoryCardProps {
  name: string;
  slug: string;
  image: string;
  count?: number;
}

const CategoryCard = ({ name, slug, image, count }: CategoryCardProps) => {
  return (
    <Link to={`/category/${slug}`} className="category-card block">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="category-overlay">
          <div>
            <h3 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
              {name}
            </h3>
            {count !== undefined && (
              <p className="text-white/70 text-sm mt-1">{count} templates</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
