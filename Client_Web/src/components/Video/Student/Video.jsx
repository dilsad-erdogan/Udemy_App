import { useDispatch, useSelector } from "react-redux";
import VideoCart from "./VideoCart";
import MyVideoCart from "./MyVideoCart";
import { useEffect, useState } from "react";
import { fetchVideoById, fetchVideos } from "../../../redux/videoSlice";
import { fetchPurchasesByUser } from "../../../redux/purchaseSlice";

const Video = ({ isMy }) => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.video.videos);
  const userVideos = useSelector(state => state.video.userVideos);
  const purchases = useSelector(state => state.purchase.purchases);

  const [myVideos, setMyVideos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await dispatch(fetchVideos());
      const id = JSON.parse(localStorage.getItem('user')).user._id;
      await dispatch(fetchPurchasesByUser(id));
    };

    loadData();
  }, [dispatch]);

  useEffect(() => {
    const fetchUserVideos = () => {
      purchases?.data?.forEach(purchase => {
        dispatch(fetchVideoById(purchase.video_id));
      });
    };

    if (purchases?.data) {
      fetchUserVideos();
    }
  }, [purchases, dispatch]);

  useEffect(() => {
    if (userVideos?.data && typeof userVideos.data === "object") {
      setMyVideos(prevVideos => {
        const isVideoExists = prevVideos.some(video => video._id === userVideos.data._id);
        
        if (!isVideoExists) {
          return [...prevVideos, userVideos.data];
        }

        return prevVideos;
      });
    }
  }, [userVideos]);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Videos</h2>

      {isMy ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {myVideos.map((data) => (
            <div key={data._id}>
              <MyVideoCart data={data} />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {videos?.data?.map((data) => (
            <div key={data._id}>
              <VideoCart data={data} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Video;