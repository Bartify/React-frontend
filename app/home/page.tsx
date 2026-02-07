"use client"

import Link from "next/link"
import {
  Search,
  Shield,
  Bell,
  Star,
  TrendingUp,
  Package,
  Camera,
  Gamepad2,
  Book,
  Wrench,
  Shirt,
  PlusCircle,
  MessageSquare,
  User,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HomePage() {
  // Mock user data
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JD",
  }

  // Mock recommended items based on user preferences
  const recommendedItems = [
    {
      id: 1,
      title: "Professional Camera Kit",
      description: "Canon EOS R5 with lenses",
      image: "/placeholder.svg?height=200&width=300",
      category: "Electronics",
      wantedFor: "Mountain Bike",
      location: "San Francisco, CA",
      rating: 4.8,
      trades: 12,
    },
    {
      id: 2,
      title: "Vintage Guitar Collection",
      description: "3 acoustic guitars in excellent condition",
      image: "/placeholder.svg?height=200&width=300",
      category: "Music",
      wantedFor: "Photography Equipment",
      location: "Austin, TX",
      rating: 4.9,
      trades: 8,
    },
    {
      id: 3,
      title: "Gaming Setup",
      description: "High-end PC with peripherals",
      image: "/placeholder.svg?height=200&width=300",
      category: "Gaming",
      wantedFor: "Professional Tools",
      location: "Seattle, WA",
      rating: 4.7,
      trades: 15,
    },
    {
      id: 4,
      title: "Designer Furniture Set",
      description: "Modern living room furniture",
      image: "/placeholder.svg?height=200&width=300",
      category: "Furniture",
      wantedFor: "Art Supplies",
      location: "New York, NY",
      rating: 4.6,
      trades: 6,
    },
  ]

  // Mock recent activity
  const recentActivity = [
    {
      id: 1,
      type: "offer",
      message: "New offer on your Camera Kit",
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "message",
      message: "Sarah sent you a message",
      time: "Yesterday",
    },
    {
      id: 3,
      type: "trade",
      message: "Trade completed with Mike",
      time: "3 days ago",
    },
  ]

  const categories = [
    { name: "Electronics", icon: Camera, count: 1240 },
    { name: "Gaming", icon: Gamepad2, count: 856 },
    { name: "Books", icon: Book, count: 2100 },
    { name: "Tools", icon: Wrench, count: 680 },
    { name: "Fashion", icon: Shirt, count: 1520 },
    { name: "Sports", icon: Package, count: 940 },
  ]

  const stats = [
    { label: "Your Active Listings", value: "5", icon: Package },
    { label: "Pending Trades", value: "2", icon: TrendingUp },
    { label: "Completed Trades", value: "8", icon: Shield },
  ]

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logging out...")
    // Redirect to login page
    window.location.href = "/login"
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl flex h-14 items-center">
          <Link href="/home" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Bartify</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-6">
            <Link href="/browse" className="text-sm font-medium hover:text-blue-600">
              Browse
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-blue-600">
              Categories
            </Link>
            <Link href="/my-trades" className="text-sm font-medium hover:text-blue-600">
              My Trades
            </Link>
            <Link href="/messages">
              <Button variant="ghost" size="icon" className="relative">
                <MessageSquare className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </Link>
            <Link href="/notifications">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback>{user.initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Package className="mr-2 h-4 w-4" />
                  <span>My Listings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <TrendingUp className="mr-2 h-4 w-4" />
                  <span>Trade History</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Welcome Section */}
        <section className="w-full py-8 md:py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="space-y-2 mb-4 md:mb-0">
                <h1 className="text-2xl md:text-3xl font-bold">Welcome back, {user.name.split(" ")[0]}!</h1>
                <p className="text-gray-600">Find new trades or check your active listings</p>
              </div>
              <div className="flex space-x-3">
                <Link href="/list-item">
                  <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    List New Item
                  </Button>
                </Link>
                <Link href="/my-trades">
                  <Button variant="outline">View My Trades</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="w-full py-6 bg-white border-b">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search for items to trade..." className="pl-10" />
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Electronics</Badge>
                <Badge variant="secondary">Books</Badge>
                <Badge variant="secondary">Gaming</Badge>
                <Badge variant="secondary">Tools</Badge>
              </div>
              <Button type="submit">Search</Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-6 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <stat.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="w-full py-6 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Recent Activity</h2>
              <Link href="/activity" className="text-sm text-blue-600 hover:underline">
                View All
              </Link>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <Card key={activity.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full ${
                          activity.type === "offer"
                            ? "bg-green-100"
                            : activity.type === "message"
                              ? "bg-blue-100"
                              : "bg-purple-100"
                        }`}
                      >
                        {activity.type === "offer" ? (
                          <Package className="h-5 w-5 text-green-600" />
                        ) : activity.type === "message" ? (
                          <MessageSquare className="h-5 w-5 text-blue-600" />
                        ) : (
                          <TrendingUp className="h-5 w-5 text-purple-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{activity.message}</p>
                        <p className="text-sm text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Items */}
        <section className="w-full py-8 bg-white">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Recommended For You</h2>
              <Link href="/browse" className="text-sm text-blue-600 hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                    <Badge className="absolute top-2 left-2">{item.category}</Badge>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{item.rating}</span>
                      <span className="text-sm text-gray-500">({item.trades} trades)</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Wants:</strong> {item.wantedFor}
                    </div>
                    <div className="text-sm text-gray-500">{item.location}</div>
                    <Button className="w-full mt-2" size="sm">
                      View Trade
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="w-full py-8 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Browse Categories</h2>
              <Link href="/categories" className="text-sm text-blue-600 hover:underline">
                View All
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.name.toLowerCase()}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <category.icon className="h-8 w-8 mb-2 text-blue-600" />
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} items</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-screen-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Company</h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/careers">Careers</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Support</h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/safety">Safety</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Legal</h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/cookies">Cookie Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Connect</h3>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/community">Community</Link>
                </li>
                <li>
                  <Link href="/newsletter">Newsletter</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Bartify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
