
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fashion-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-fashion-800">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Fique por dentro das novidades
            </h2>
            <p className="text-fashion-300 mb-8 text-lg">
              Receba em primeira mão lançamentos, ofertas exclusivas e dicas de estilo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-white text-fashion-900 border-0 focus:ring-fashion-500"
              />
              <Button className="bg-fashion-700 hover:bg-fashion-600 text-white">
                <Mail className="mr-2 h-4 w-4" />
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Fashion Store</h3>
            <p className="text-fashion-300 leading-relaxed">
              Sua loja de moda online com as melhores tendências e qualidade excepcional. 
              Estilo, conforto e elegância em cada peça.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-fashion-300 hover:text-white hover:bg-fashion-800">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-fashion-300 hover:text-white hover:bg-fashion-800">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-fashion-300 hover:text-white hover:bg-fashion-800">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                'Sobre Nós',
                'Produtos',
                'Promoções',
                'Blog',
                'Contato',
                'Trabalhe Conosco'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-fashion-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Atendimento</h4>
            <ul className="space-y-2">
              {[
                'Central de Ajuda',
                'Minha Conta',
                'Pedidos',
                'Trocas e Devoluções',
                'Política de Privacidade',
                'Termos de Uso'
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-fashion-300 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fashion-400" />
                <div>
                  <p className="text-fashion-300">(11) 99999-9999</p>
                  <p className="text-sm text-fashion-400">Seg-Sex: 9h às 18h</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fashion-400" />
                <div>
                  <p className="text-fashion-300">contato@fashionstore.com</p>
                  <p className="text-sm text-fashion-400">Respondemos em até 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-fashion-400 mt-1" />
                <div>
                  <p className="text-fashion-300">Rua da Moda, 123</p>
                  <p className="text-fashion-300">São Paulo, SP</p>
                  <p className="text-sm text-fashion-400">CEP: 01234-567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-fashion-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-fashion-400 text-sm">
              © 2024 Fashion Store. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-fashion-400 text-sm">Pagamento seguro:</span>
              <div className="flex items-center space-x-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-fashion-900">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-fashion-900">MASTER</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-xs font-bold text-fashion-900">PIX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
