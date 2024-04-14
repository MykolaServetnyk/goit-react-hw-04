import { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';

import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SearchBar />
      <ImageGallery/>
    </>
  )
}

 
