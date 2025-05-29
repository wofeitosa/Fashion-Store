
import React, { useState, useMemo } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProductGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-50':
          filtered = filtered.filter(product => product.price < 50);
          break;
        case '50-100':
          filtered = filtered.filter(product => product.price >= 50 && product.price <= 100);
          break;
        case '100-200':
          filtered = filtered.filter(product => product.price > 100 && product.price <= 200);
          break;
        case 'over-200':
          filtered = filtered.filter(product => product.price > 200);
          break;
      }
    }

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange]);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-fashion-900 mb-4">
            Nossa Coleção
          </h2>
          <p className="text-lg text-fashion-600 max-w-2xl mx-auto">
            Descubra peças únicas que refletem seu estilo pessoal. 
            Qualidade, conforto e elegância em cada produto.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Categories */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-fashion-700 mb-3 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Categorias
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-fashion-900 text-white hover:bg-fashion-800'
                      : 'border-fashion-200 text-fashion-700 hover:bg-fashion-50'
                  }`}
                >
                  {category.name}
                  <Badge variant="secondary" className="ml-2 bg-fashion-100 text-fashion-700">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Sort and Price Filter */}
          <div className="flex flex-col sm:flex-row gap-4 lg:w-auto">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-fashion-700 flex items-center">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Ordenar por
              </label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Destaques</SelectItem>
                  <SelectItem value="price-low">Menor Preço</SelectItem>
                  <SelectItem value="price-high">Maior Preço</SelectItem>
                  <SelectItem value="rating">Melhor Avaliado</SelectItem>
                  <SelectItem value="name">Nome A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-fashion-700">
                Faixa de Preço
              </label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Todos os preços" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os preços</SelectItem>
                  <SelectItem value="under-50">Até R$ 50</SelectItem>
                  <SelectItem value="50-100">R$ 50 - R$ 100</SelectItem>
                  <SelectItem value="100-200">R$ 100 - R$ 200</SelectItem>
                  <SelectItem value="over-200">Acima de R$ 200</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className="flex items-center justify-between mb-6 py-4 border-t border-b border-fashion-100">
          <p className="text-fashion-600">
            Mostrando <span className="font-semibold">{filteredAndSortedProducts.length}</span> produtos
            {selectedCategory !== 'all' && (
              <span> em <span className="font-semibold">
                {categories.find(c => c.id === selectedCategory)?.name}
              </span></span>
            )}
          </p>
          
          {(selectedCategory !== 'all' || priceRange !== 'all') && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="text-fashion-600 hover:text-fashion-900"
            >
              Limpar Filtros
            </Button>
          )}
        </div>

        {/* Products Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-fashion-400 mb-4">
              <SlidersHorizontal className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-fashion-700 mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-fashion-500 mb-6">
              Tente ajustar os filtros para encontrar o que procura.
            </p>
            <Button
              onClick={() => {
                setSelectedCategory('all');
                setPriceRange('all');
              }}
              className="bg-fashion-900 hover:bg-fashion-800 text-white"
            >
              Ver Todos os Produtos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
