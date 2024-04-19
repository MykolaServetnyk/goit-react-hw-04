import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, imageUrl }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      overlayClassName="Overlay"
      className="Modal"
    >
      {imageUrl && <img src={imageUrl} alt="Large" />}
    </Modal>
  );
}
