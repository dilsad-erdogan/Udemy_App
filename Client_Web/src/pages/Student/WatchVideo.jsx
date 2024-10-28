import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import ReactPlayer from 'react-player';

const WatchVideo = () => {
  const { id } = useParams();
  const videos = useSelector((state) => state.video.videos);
  const [video, setVideo] = useState();

  useEffect(() => {
    const newVideo = videos.find((video) => video._id === parseInt(id));
    setVideo(newVideo);
  }, [id, videos]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <StudentPageNavbar />

      <div className="mt-5">
        <div className="flex justify-center items-center bg-gray-100 p-4">
            <ReactPlayer url={video.videoUrl} controls width="100%" height="600px" />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;