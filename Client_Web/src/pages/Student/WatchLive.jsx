import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import ChatBox from "../../components/Chat/ChatBox";
import SendMessage from "../../components/Chat/SendMessage";
import ReactPlayer from 'react-player';
import { fetchLiveData } from "../../redux/liveSlice";

const WatchLive = () => {
  const dispatch = useDispatch();
  const lives = useSelector(state => state.live.liveData);
  const { id } = useParams();
  const [live, setLive] = useState();

  useEffect(() => {
    if (lives?.data) {
      const newLive = lives.data.find((live) => live._id === id);
      setLive(newLive);
    }
  }, [id, lives]);

  useEffect(() => {
    dispatch(fetchLiveData());
  }, [dispatch]);

  if (!live) return <div>Loading...</div>;

  return (
    <div>
      <StudentPageNavbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
        <div className="col-span-2 flex justify-center items-center bg-gray-100 p-4">
          <ReactPlayer url={live.video_url} controls width="100%" height="500px" />
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

export default WatchLive;