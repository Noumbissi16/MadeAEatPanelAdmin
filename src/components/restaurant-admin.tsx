'use client'

import { Home, Users, TruckIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function RestaurantAdmin() {
  return (
    <div className="max-w-md mx-auto bg-gray-100 h-screen flex flex-col">
      <header className="bg-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Panel Admin Centrale</h1>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </div>
      </header>

      <main className="flex-grow overflow-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Restaurant</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Chez Karim Restaurant"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Mr N Fast Food</h3>
                <p className="text-sm text-gray-500">Enfoussam</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Restaurant Interior"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Mr N Fast Food</h3>
                <p className="text-sm text-gray-500">Enfoussam</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-0">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Colorful Restaurant"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Mr N Fast Food</h3>
                <p className="text-sm text-gray-500">Enfoussam</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-green-700 text-white p-4">
        <nav className="flex justify-around">
          <button className="flex flex-col items-center">
            <Home className="h-6 w-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center">
            <Users className="h-6 w-6" />
            <span className="text-xs">Restaurants</span>
          </button>
          <button className="flex flex-col items-center">
            <TruckIcon className="h-6 w-6" />
            <span className="text-xs">Delivery</span>
          </button>
        </nav>
      </footer>
    </div>
  )
}