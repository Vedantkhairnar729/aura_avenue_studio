import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Plus, Minus, ShoppingBag, Lock } from "lucide-react";
import { useState } from "react";
import collectionImage from "@/assets/collection-new.jpg";
import womenImage from "@/assets/category-women.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      name: "Essential Silk Blouse", 
      price: 120, 
      quantity: 1, 
      size: "M", 
      color: "Ivory", 
      image: womenImage 
    },
    { 
      id: 2, 
      name: "Cashmere Sweater", 
      price: 220, 
      quantity: 2, 
      size: "L", 
      color: "Navy", 
      image: collectionImage 
    },
    { 
      id: 3, 
      name: "Midi Dress", 
      price: 180, 
      quantity: 1, 
      size: "S", 
      color: "Black", 
      image: womenImage 
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 25;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <ShoppingBag className="h-6 w-6" />
          <h1 className="text-section">Shopping Cart ({cartItems.length} items)</h1>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 pb-6 border-b border-border">
                  <div className="w-24 h-24 bg-muted overflow-hidden flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium mb-2">{item.name}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                      <span>Size: {item.size}</span>
                      <span>Color: {item.color}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <span className="font-medium">${item.price * item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-muted-foreground hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted/30 p-6 space-y-6">
                <h2 className="text-lg font-medium">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>${shipping}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>${total}</span>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input placeholder="Promo code" className="flex-1" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                {/* Checkout Button */}
                <Button className="w-full btn-hero gap-2">
                  <Lock className="h-4 w-4" />
                  Secure Checkout
                </Button>

                {/* Benefits */}
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Free</Badge>
                    <span>Free shipping on orders over $150</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">30 Days</Badge>
                    <span>Easy returns within 30 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-6">
              Discover our collections and find something you love.
            </p>
            <Button className="btn-hero">Continue Shopping</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;