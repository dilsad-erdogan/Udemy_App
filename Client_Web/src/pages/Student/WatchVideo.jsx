import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import ReactPlayer from 'react-player';
import { fetchVideos } from "../../redux/videoSlice";

const WatchVideo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const videos = useSelector(state => state.video.videos);
  const [video, setVideo] = useState();

  useEffect(() => {
    if(videos?.data) {
      const newVideo = videos.data.find((video) => video._id === id);
      setVideo(newVideo);
    }
  }, [id, videos]);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <StudentPageNavbar />

      <div className="mt-5">
        <div className="flex justify-center items-center bg-gray-100 p-4">
            <ReactPlayer url={video.video_url} controls width="100%" height="600px" />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;