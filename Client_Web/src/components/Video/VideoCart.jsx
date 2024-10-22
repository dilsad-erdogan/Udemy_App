import { useState } from "react";
import { FaStar } from "react-icons/fa"
import Modal from "../Modal";
import ExplanationCard from "../ExplanationCard";

const VideoCart = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div onClick={() => setIsModalOpen(true)}>
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
        <img src={data.videoUrl} alt="" className="w-full h-48 object-contain mb-4" />

        <h3 className="text-lg font-semibold">{data.title}</h3>

        <p className="text-gray-500">${data.price}</p>

        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-gray-300" />
        </div>

        <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-primary text-white text-sm rounded-full">
          <span className="group-hover:hidden">+</span>
        </div>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        <ExplanationCard data={data} />
      </Modal>
    </div>
  )
}

export default VideoCart