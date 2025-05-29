
import React from 'react';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ShoppingBag, Plus, Minus, Trash2, CreditCard } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Cart = () => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    toast({
      title: "Direcionando para pagamento",
      description: "Você será redirecionado para finalizar sua compra.",
    });
    // Aqui seria implementada a integração com gateway de pagamento
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-fashion-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-12">
              <ShoppingBag className="h-24 w-24 text-fashion-300 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-fashion-900 mb-4">
                Seu carrinho está vazio
              </h2>
              <p className="text-fashion-600 mb-8">
                Adicione alguns produtos incríveis ao seu carrinho e volte aqui para finalizar sua compra.
              </p>
              <Button 
                size="lg"
                className="bg-fashion-900 hover:bg-fashion-800 text-white px-8"
              >
                Continuar Comprando
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-fashion-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-fashion-900 mb-4">
              Seu Carrinho
            </h1>
            <p className="text-lg text-fashion-600">
              Revise seus itens antes de finalizar a compra
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-xl shadow-sm border border-fashion-100 overflow-hidden">
                <div className="p-6 border-b border-fashion-100">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-fashion-900">
                      Itens do Carrinho ({items.length})
                    </h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearCart}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Limpar Carrinho
                    </Button>
                  </div>
                </div>

                <div className="divide-y divide-fashion-100">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="p-6">
                      <div className="flex items-start gap-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-24 object-cover rounded-lg border border-fashion-200"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-fashion-900 mb-2">
                            {item.name}
                          </h3>
                          
                          <div className="flex items-center gap-4 mb-3">
                            <Badge variant="outline" className="text-xs">
                              Tamanho: {item.size}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              Cor: {item.color}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.size, item.color, Math.max(1, item.quantity - 1))}
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              
                              <span className="font-medium text-fashion-900 min-w-[2rem] text-center">
                                {item.quantity}
                              </span>
                              
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>

                            <div className="text-right">
                              <p className="font-bold text-fashion-900">
                                R$ {(item.price * item.quantity).toFixed(2)}
                              </p>
                              <p className="text-sm text-fashion-500">
                                R$ {item.price.toFixed(2)} cada
                              </p>
                            </div>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-fashion-100 p-6 sticky top-6">
                <h2 className="text-xl font-semibold text-fashion-900 mb-6">
                  Resumo do Pedido
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-fashion-600">
                    <span>Subtotal</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between text-fashion-600">
                    <span>Frete</span>
                    <span className="text-green-600 font-medium">Grátis</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-bold text-fashion-900">
                    <span>Total</span>
                    <span>R$ {getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-fashion-900 hover:bg-fashion-800 text-white mb-4"
                  onClick={handleCheckout}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Finalizar Compra
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-fashion-300 text-fashion-700 hover:bg-fashion-50"
                >
                  Continuar Comprando
                </Button>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t border-fashion-100">
                  <h3 className="font-semibold text-fashion-900 mb-3">
                    Benefícios da sua compra:
                  </h3>
                  <ul className="space-y-2 text-sm text-fashion-600">
                    <li>✓ Frete grátis em todo o Brasil</li>
                    <li>✓ Troca e devolução em até 30 dias</li>
                    <li>✓ Pagamento seguro e protegido</li>
                    <li>✓ Garantia de qualidade</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
