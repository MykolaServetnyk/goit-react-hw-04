// App.js
import { useState, useEffect } from 'react';
import { fetchImages } from '../../image-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

import './App.css';

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const getImages = async () => {
      try {
        setError(false);
        setLoader(true);
        const newImages = await fetchImages(page, query);
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

  const openModal = (imageUrl, altDescription, imageTags, authorName, likes) => {
    setSelectedImage({ imageUrl, altDescription, imageTags, authorName, likes });
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {images.length > 0 && !loader && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        imageInfo={selectedImage}
      />
    </>
  );
}
