import type { Product, CartItem, User } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`
}

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + (item.product.price * item.quantity), 0)
}

export const getUniqueCategories = (products: Product[]): string[] => {
  const categories = new Set(products.map(product => product.category))
  return Array.from(categories)
}

export const saveUserToLocalStorage = (user: User): void => {
  localStorage.setItem('currentUser', JSON.stringify(user))
}

export const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('currentUser')
  return user ? JSON.parse(user) : null
}

export const clearUserFromLocalStorage = (): void => {
  localStorage.removeItem('currentUser')
}

export const saveCartToLocalStorage = (cart: CartItem[]): void => {
  localStorage.setItem('shoppingCart', JSON.stringify(cart))
}

export const getCartFromLocalStorage = (): CartItem[] => {
  const cart = localStorage.getItem('shoppingCart')
  return cart ? JSON.parse(cart) : []
}

export const renderRatingStars = (rating: number): string => {
  const fullStars = '★'.repeat(Math.floor(rating))
  const halfStar = rating % 1 >= 0.5 ? '½' : ''
  const emptyStars = '☆'.repeat(5 - Math.ceil(rating))
  return `${fullStars}${halfStar}${emptyStars}`
}

export const handleError = (error: unknown): void => {
  if (error instanceof Error) {
    console.error('Error:', error.message)
    alert(`Error: ${error.message}`)
  } else {
    console.error('Unknown error occurred')
    alert('An unknown error occurred')
  }
}