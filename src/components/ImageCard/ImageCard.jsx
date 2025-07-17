import React from "react";
import { FiPlus } from "react-icons/fi";

export default function ImageCard({ image,openModal }) {
  console.log;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <div className="image-card position-relative" onClick={()=>openModal(image)}>
          <img src={image.src} alt={image.alt} className="w-100 rounded-2" />
          <div className="img-layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0">
            <FiPlus className="fs-1 fw-bold text-white" />
          </div>
        </div>
      </div>
    </>
  );
}
