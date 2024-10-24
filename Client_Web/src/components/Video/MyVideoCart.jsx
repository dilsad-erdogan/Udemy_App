import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

const MyVideoCart = ({ data }) => {
  return (
    <Link to={`/watch/${data._id}`}>
      <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
        <img src={data.videoPng} alt="" className="w-full h-48 object-contain mb-4" />

        <h3 className="text-lg font-semibold">{data.title}</h3>

        <div className="flex items-center mt-2">
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-yellow-500" />
          <FaStar className="text-gray-300" />
        </div>
      </div>
    </Link>
  )
}

export default MyVideoCart