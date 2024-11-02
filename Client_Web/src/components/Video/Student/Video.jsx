import { useDispatch, useSelector } from "react-redux"
import VideoCart from "./VideoCart"
import MyVideoCart from "./MyVideoCart"
import { useEffect } from "react";
import { fetchVideos } from "../../../redux/videoSlice";

const Video = ({ isMy }) => {
  const dispatch = useDispatch();
  const videos = useSelector(state => state.video.videos);

  useEffect(() => {
    dispatch(fetchVideos());
  }, [dispatch]);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold mb-6 text-center">Videos</h2>

        {isMy ? 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {videos?.data?.map(((data) => (
              <div key={data._id}>
                <MyVideoCart data={data} />
              </div>
            )))}
          </div>
          :
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
            {videos?.data?.map(((data) => (
              <div key={data._id}>
                <VideoCart data={data} />
              </div>
            )))}
          </div>
        }
    </div>
  )
}

export default Video