import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Package, Heart, Settings, MapPin, CreditCard, Bell } from "lucide-react";
import collectionImage from "@/assets/collection-new.jpg";
import womenImage from "@/assets/category-women.jpg";

const Profile = () => {
  const orderHistory = [
    { 
      id: "ORD-001", 
      date: "Dec 15, 2024", 
      total: "$340", 
      status: "Delivered", 
      items: 2,
      image: womenImage 
    },
    { 
      id: "ORD-002", 
      date: "Dec 8, 2024", 
      total: "$180", 
      status: "Shipped", 
      items: 1,
      image: collectionImage 
    },
    { 
      id: "ORD-003", 
      date: "Nov 28, 2024", 
      total: "$420", 
      status: "Delivered", 
      items: 3,
      image: womenImage 
    },
  ];

  const wishlistItems = [
    { id: 1, name: "Silk Evening Dress", price: "$320", image: womenImage },
    { id: 2, name: "Cashmere Coat", price: "$450", image: collectionImage },
    { id: 3, name: "Gold Bracelet", price: "$180", image: womenImage },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <User className="h-6 w-6" />
          <h1 className="text-section">My Account</h1>
        </div>

        <Tabs defaultValue="profile" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            <TabsTrigger value="profile" className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </TabsTrigger>
            <TabsTrigger value="orders" className="gap-2">
              <Package className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="gap-2">
              <Heart className="h-4 w-4" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="addresses" className="gap-2">
              <MapPin className="h-4 w-4" />
              Addresses
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="Sarah" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Johnson" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue="sarah.johnson@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <Button>Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Account Statistics</CardTitle>
                  <CardDescription>Your shopping summary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Total Orders</span>
                    <Badge variant="secondary">12</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Total Spent</span>
                    <Badge variant="secondary">$2,340</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>Wishlist Items</span>
                    <Badge variant="secondary">8</Badge>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Member Since</span>
                    <Badge variant="secondary">Jan 2024</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>Track your recent purchases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orderHistory.map((order) => (
                    <div key={order.id} className="flex items-center gap-4 p-4 border rounded-lg">
                      <div className="w-16 h-16 bg-muted overflow-hidden flex-shrink-0">
                        <img 
                          src={order.image} 
                          alt="Order"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">Order {order.id}</h4>
                            <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                          </div>
                          <Badge variant={order.status === "Delivered" ? "default" : "secondary"}>
                            {order.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{order.total}</span>
                          <Button variant="outline" size="sm">View Details</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>Wishlist</CardTitle>
                <CardDescription>Items you've saved for later</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div key={item.id} className="group">
                      <div className="aspect-square overflow-hidden bg-muted mb-4">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <h4 className="font-medium mb-2">{item.name}</h4>
                      <p className="text-muted-foreground mb-3">{item.price}</p>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">Add to Cart</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses Tab */}
          <TabsContent value="addresses">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                  <CardDescription>Your default shipping address</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address1">Address Line 1</Label>
                    <Input id="address1" defaultValue="123 Fashion Street" />
                  </div>
                  <div>
                    <Label htmlFor="address2">Address Line 2</Label>
                    <Input id="address2" defaultValue="Apt 4B" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="New York" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" defaultValue="10001" />
                    </div>
                  </div>
                  <Button>Update Address</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                    <div className="flex-1">
                      <p className="font-medium">**** **** **** 4567</p>
                      <p className="text-sm text-muted-foreground">Expires 12/26</p>
                    </div>
                    <Badge>Default</Badge>
                  </div>
                  <Button variant="outline" className="w-full">Add New Payment Method</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Manage your notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-4 w-4" />
                      <span>Email Notifications</span>
                    </div>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Package className="h-4 w-4" />
                      <span>Order Updates</span>
                    </div>
                    <Badge variant="outline">Enabled</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Heart className="h-4 w-4" />
                      <span>Promotional Emails</span>
                    </div>
                    <Badge variant="secondary">Disabled</Badge>
                  </div>
                  <Button>Update Preferences</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Security</CardTitle>
                  <CardDescription>Keep your account secure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">Change Password</Button>
                  <Button variant="outline" className="w-full">Enable Two-Factor Authentication</Button>
                  <Button variant="outline" className="w-full">Download Account Data</Button>
                  <Button variant="destructive" className="w-full">Delete Account</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Profile;