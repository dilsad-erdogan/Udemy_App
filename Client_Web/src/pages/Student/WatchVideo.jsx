import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";

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
                    <img src={video.videoUrl} alt="Video" className="w-full h-auto" />
                </div>

                <div className="col-span-1 flex flex-col bg-gray-50 border-l p-4">
                    <div className="flex-1 overflow-y-auto">
                        <p>User 1: Hello!</p>
                        <p>User 2: Hi there!</p>
                        <p>User 1: How are you?</p>
                    </div>

                    <div className="mt-4">
                        <input type="text" placeholder="Type a message" className="w-full border py-2 px-4" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchVideo;