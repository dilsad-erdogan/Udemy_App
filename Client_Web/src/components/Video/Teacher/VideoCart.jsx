import { Link } from "react-router-dom"

const VideoCart = ({ data }) => {
    return (
        <Link to={`/updateVideo/${data._id}`}>
            <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
                <img src={data.video_png} alt="" className="w-full h-48 object-contain mb-4" />

                <h3 className="text-lg font-semibold">{data.title}</h3>
            </div>
        </Link>
    )
}

export default VideoCart