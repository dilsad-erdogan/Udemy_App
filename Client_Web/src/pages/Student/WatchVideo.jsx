import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import ChatBox from "../../components/Chat/ChatBox";
import SendMessage from "../../components/Chat/SendMessage";
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        <div className="col-span-2 flex justify-center items-center bg-gray-100 p-4">
            <ReactPlayer url={video.videoUrl} controls width="100%" height="500px" />
        </div>

        <div className="col-span-1 flex flex-col border-l p-4 relative">
          <div className="flex-1 overflow-auto">
            <ChatBox />
          </div>

          <div className="sticky bottom-0">
            <SendMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;