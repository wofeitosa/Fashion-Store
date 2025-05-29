export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  sizes: string[];
  colors: string[];
  images: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Camiseta Básica Premium",
    price: 49.90,
    originalPrice: 69.90,
    description: "Camiseta básica de algodão premium, perfeita para o dia a dia. Tecido macio e confortável.",
    category: "camisetas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Preto", "Cinza"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1583743089695-4b566c1b5a9e?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: "2",
    name: "Calça Jeans Skinny",
    price: 129.90,
    description: "Calça jeans skinny de alta qualidade com lavagem escura. Modelagem moderna e confortável.",
    category: "calcas",
    sizes: ["38", "40", "42", "44", "46"],
    colors: ["Azul Escuro", "Azul Claro"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: "3",
    name: "Vestido Floral Elegante",
    price: 189.90,
    originalPrice: 229.90,
    description: "Vestido midi com estampa floral delicada. Perfeito para ocasiões especiais e eventos casuais.",
    category: "vestidos",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Floral Rosa", "Floral Azul"],
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.9,
    reviews: 67
  },
  {
    id: "4",
    name: "Blusa Social Feminina",
    price: 89.90,
    description: "Blusa social elegante, ideal para ambiente corporativo. Tecido de alta qualidade e corte moderno.",
    category: "blusas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Branco", "Azul Marinho", "Rosa"],
    images: [
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: "5",
    name: "Jaqueta Jeans Clássica",
    price: 159.90,
    description: "Jaqueta jeans clássica unissex. Perfeita para compor looks casuais e despojados.",
    category: "jaquetas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Médio", "Azul Escuro"],
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.5,
    reviews: 203
  },
  {
    id: "6",
    name: "Short Jeans Destroyed",
    price: 79.90,
    originalPrice: 99.90,
    description: "Short jeans com detalhes destroyed e lavagem clara. Ideal para o verão e looks descontraídos.",
    category: "shorts",
    sizes: ["38", "40", "42", "44"],
    colors: ["Azul Claro", "Azul Médio"],
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.4,
    reviews: 78
  },
  {
    id: "7",
    name: "Moletom Oversized",
    price: 119.90,
    description: "Moletom oversized confortável com capuz. Perfeito para dias frios e looks street style.",
    category: "moletons",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Cinza", "Preto", "Bege"],
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviews: 91
  },
  {
    id: "8",
    name: "Saia Midi Plissada",
    price: 99.90,
    description: "Saia midi plissada em tecido fluido. Elegante e versátil para diversas ocasiões.",
    category: "saias",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Preto", "Nude", "Azul Marinho"],
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=600&fit=crop"
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviews: 134
  }
];

export const categories = [
  { id: "all", name: "Todos os Produtos", count: products.length },
  { id: "camisetas", name: "Camisetas", count: products.filter(p => p.category === "camisetas").length },
  { id: "calcas", name: "Calças", count: products.filter(p => p.category === "calcas").length },
  { id: "vestidos", name: "Vestidos", count: products.filter(p => p.category === "vestidos").length },
  { id: "blusas", name: "Blusas", count: products.filter(p => p.category === "blusas").length },
  { id: "jaquetas", name: "Jaquetas", count: products.filter(p => p.category === "jaquetas").length },
  { id: "shorts", name: "Shorts", count: products.filter(p => p.category === "shorts").length },
  { id: "moletons", name: "Moletons", count: products.filter(p => p.category === "moletons").length },
  { id: "saias", name: "Saias", count: products.filter(p => p.category === "saias").length }
];
