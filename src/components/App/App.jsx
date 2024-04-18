import { useState, useEffect } from 'react'
import { fetchImages } from '../../image-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ReactModal from 'react-modal';


import './App.css'

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);


   useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setError(false);
        setLoader(true);

        const newImages = await fetchImages(page, query );
        setImages((prevImages) => [...prevImages, ...newImages]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getImages();
   }, [query, page]);
  
   const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
  };



  return (
    <>
      <SearchBar onSubmit={handleSubmit}/>
      {images.length > 0 && <ImageGallery items={images} />}
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {images.length > 0 && !loader && <LoadMoreBtn onClick={handleLoadMore} />}
    </>
  )
}

 
