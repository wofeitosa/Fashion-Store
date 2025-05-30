
import React, { useState } from 'react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Check } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: product.colors[0]
    });
    
    // Mostrar feedback visual
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao carrinho.`,
    });
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-fashion-100 hover:border-fashion-200 animate-fade-in">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-fashion-50">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount > 0 && (
            <Badge variant="destructive" className="bg-red-500 text-white">
              -{discount}%
            </Badge>
          )}
          {product.featured && (
            <Badge variant="secondary" className="bg-fashion-900 text-white">
              Destaque
            </Badge>
          )}
        </div>

        {/* Like Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
          onClick={handleLike}
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-fashion-600'
            }`} 
          />
        </Button>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            variant="secondary"
            size="sm"
            className="flex-1 bg-white/90 backdrop-blur-sm hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
          >
            Ver Detalhes
          </Button>
          <Button
            size="sm"
            className={`px-4 transition-all duration-300 ${
              isAdded 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-fashion-900 hover:bg-fashion-800 text-white'
            }`}
            onClick={handleAddToCart}
          >
            {isAdded ? <Check className="h-4 w-4" /> : <ShoppingCart className="h-4 w-4" />}
          </Button>
        </div>

        {/* Added to Cart Alert */}
        {isAdded && (
          <div className="absolute inset-0 bg-green-500/20 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-in fade-in zoom-in duration-300">
              <Check className="h-4 w-4" />
              <span className="text-sm font-medium">Adicionado!</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-fashion-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-fashion-500">
            ({product.reviews})
          </span>
        </div>

        {/* Name */}
        <h3 className="font-semibold text-fashion-900 line-clamp-2 group-hover:text-fashion-700 transition-colors">
          {product.name}
        </h3>

        {/* Category */}
        <p className="text-sm text-fashion-500 capitalize">
          {product.category}
        </p>

        {/* Sizes */}
        <div className="flex flex-wrap gap-1">
          {product.sizes.slice(0, 4).map((size) => (
            <button
              key={size}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size);
              }}
              className={`text-xs px-2 py-1 rounded border transition-colors ${
                selectedSize === size
                  ? 'bg-fashion-900 text-white border-fashion-900'
                  : 'border-fashion-200 text-fashion-600 hover:border-fashion-300'
              }`}
            >
              {size}
            </button>
          ))}
          {product.sizes.length > 4 && (
            <span className="text-xs text-fashion-500 px-2 py-1">
              +{product.sizes.length - 4}
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-fashion-900">
              R$ {product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-fashion-400 line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {!product.inStock && (
            <Badge variant="outline" className="text-red-500 border-red-200">
              Esgotado
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
