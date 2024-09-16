'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

const restaurants = [
  { id: 1, name: "Chez Karim", image: "/placeholder.svg?height=200&width=400" },
  { id: 2, name: "Mr N Fast Food", image: "/placeholder.svg?height=200&width=400" },
  { id: 3, name: "Restaurant 3", image: "/placeholder.svg?height=200&width=400" },
]

export function RestaurantListingComponent() {
  return (
    <div className="flex flex-col h-screen">
      <header className="flex justify-between items-center p-4 bg-green-50">
        <h1 className="text-xl font-semibold">Panel Admin Centrale</h1>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </div>
      </header>

      <main className="flex-1 overflow-hidden">
        <h2 className="text-2xl font-bold p-4">Restaurant</h2>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          <div className="p-4 space-y-4">
            {restaurants.map((restaurant) => (
              <Card key={restaurant.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <img src={restaurant.image} alt={restaurant.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <CardTitle>{restaurant.name}</CardTitle>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </main>

      <footer className="bg-white border-t">
        <nav className="flex justify-around p-2">
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </button>
          <button className="p-2 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h18v18H3zM20 8H8M4 12h16M4 16h16M4 20h16"></path>
            </svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </button>
          <button className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </button>
        </nav>
      </footer>
    </div>
  )
}