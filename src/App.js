import React from "react";
import { ReactImageGallery } from "react-image-gallery";

const App = () => {
  const productDetailItem = {
    images: [
      {
        original: "https://imgd.aeplcdn.com/1920x1080/ec/57/97/17732/img/ol/Hyundai-4S-Fluidic-Verna-Right-Side-47886.jpg?v=201711021421&q=80&q=80",
        thumbnail: "car.png",
      },
      // Add more images as needed
    ],
    // Other product details (title, brand, availability, price, etc.)
  };

  return (
    <div className="product-detail">
      <ReactImageGallery items={productDetailItem.images} />
      <h2>Hyundai Fluidic Verna</h2>
      {/* Other product details (description, size options, etc.) */}
    </div>
  );
};

export default App;
