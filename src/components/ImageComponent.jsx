import React from "react";
import Image from "next/image";

const ImageComponent = ({ src, fallback, type = "image/webp", alt }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} alt={alt} layout="fill" />
    </picture>
  );
};

export default ImageComponent;
