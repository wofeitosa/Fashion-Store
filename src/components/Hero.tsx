
import React from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-fashion-50 to-fashion-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="1"%3E%3Ccircle cx="7" cy="7" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-fashion-900 mb-6 leading-tight">
              Moda que
              <span className="text-transparent bg-gradient-to-r from-fashion-600 to-fashion-800 bg-clip-text">
                {" "}inspira
              </span>
            </h1>
            <p className="text-xl text-fashion-600 mb-8 max-w-2xl">
              Descubra nossa coleção exclusiva de roupas que combinam estilo, 
              conforto e qualidade. Desde o casual chic até o elegante formal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-fashion-900 hover:bg-fashion-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Explorar Coleção
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-fashion-300 text-fashion-700 hover:bg-fashion-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Ver Ofertas
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-fashion-200">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-fashion-900">500+</h3>
                <p className="text-fashion-600">Produtos</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-fashion-900">10k+</h3>
                <p className="text-fashion-600">Clientes</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-fashion-900">99%</h3>
                <p className="text-fashion-600">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=800&fit=crop"
                alt="Fashion Model"
                className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              
              {/* Floating Cards */}
              <div className="absolute top-6 right-6 bg-white p-4 rounded-xl shadow-lg backdrop-blur-sm bg-white/90">
                <p className="text-sm font-semibold text-fashion-900">Frete Grátis</p>
                <p className="text-xs text-fashion-600">Em compras acima de R$ 199</p>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg backdrop-blur-sm bg-white/90">
                <p className="text-sm font-semibold text-fashion-900">Novo Lançamento</p>
                <p className="text-xs text-fashion-600">Coleção Outono/Inverno</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
