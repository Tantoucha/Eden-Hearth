#!/usr/bin/env node

import { writeFileSync } from 'fs'
import { join } from 'path'

// UK landscaping placeholder images from Unsplash
const images = [
  {
    filename: 'land-01.jpg',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center',
    alt: 'Modern UK patio with porcelain tiles and raised planters'
  },
  {
    filename: 'land-02.jpg', 
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&crop=center',
    alt: 'Closeboard fence with landscaped border planting'
  },
  {
    filename: 'land-03.jpg',
    url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop&crop=center',
    alt: 'Sandstone patio with natural stone steps'
  },
  {
    filename: 'land-04.jpg',
    url: 'https://images.unsplash.com/photo-1574482620313-1d913e86415f?w=800&h=600&fit=crop&crop=center',
    alt: 'Contemporary garden with artificial grass and sleeper borders'
  },
  {
    filename: 'land-05.jpg',
    url: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop&crop=center',
    alt: 'UK rear garden transformation with decking and planting'
  },
  {
    filename: 'land-06.jpg',
    url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&crop=center',
    alt: 'Block paved driveway and front garden landscaping'
  }
]

console.log('🔗 Landscaping image URLs for download:')
console.log('Run these curl commands to download the images:')
console.log('')

images.forEach(({ filename, url, alt }) => {
  console.log(`curl -L "${url}" -o "public/images/landscaping/${filename}"`)
})

console.log('')
console.log(`📁 Images will be saved to: public/images/landscaping/`)
console.log('🏗️  These images will be used to populate the landscaping portfolio.')
