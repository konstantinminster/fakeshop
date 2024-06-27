//import { useState } from 'react'

import Footer from './components/Footer'
import Header from './components/Header'
import Filternav from './components/Filternav'
import Products from './components/Products'

function App() {
 
  return (
    <>
      <Header />
      <Filternav />
      <Products />
      <Footer />
    </>
  )
}

export default App


// Requirements:
// Navigation Bar:
    // Available in all routes (create a layout component for your route 😉)
    // Include links to Home and Cart.
// Home Page:
  // Show a list of all categories from https://fakestoreapi.com/products/categories. You are free to choose how they are displayed.
  //Show a list of all products from https://fakestoreapi.com/products as cards.
        // DONE: Each card should display:
        // DONE: title
        // DONE: price
        // link to the product category
        // add to cart button
        // If a product is already in the cart, render buttons to remove and add more to the cart (manage quantity, e.g., never go below zero, remove the item instead).
        // It should also show the current amount in the cart.
//
// Cart Page:
// Render a table with the products, the sum of each line, and a total amount.
// It should also be possible to add or remove items.

