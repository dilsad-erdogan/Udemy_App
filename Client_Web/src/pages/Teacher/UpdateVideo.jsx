import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import TeacherPageNavbar from "../../components/Navbar/TeacherPageNavbar";
import ReactPlayer from 'react-player';
import { deleteVideo, fetchVideosByUser, updateVideoDescription, updateVideoPrice, updateVideoTitle } from "../../redux/videoSlice";

const UpdateVideo = () => {
    const { id } = useParams();
    const [video, setVideo] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const videos = useSelector(state => state.video.videos);

    useEffect(() => {
        const userData = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if (userData && userData.user._id) {
            dispatch(fetchVideosByUser(userData.user._id));
        }
    }, [dispatch]);

    useEffect(() => {
        if(videos?.data) {
            const newVideo = videos.data.find((video) => video._id === id);
            setVideo(newVideo);
        }
    }, [id, videos]);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setVideo((prevVideo) => ({
            ...prevVideo,
            [id]: value,
        }));
    };

    const handleSubmit = () => {
        const title = {
            data: video.title
        };
        const description = {
            data: video.description
        };
        const price = {
            data: video.price
        };
        dispatch(updateVideoTitle({id: video._id, data: title}))
        dispatch(updateVideoDescription({id: video._id, data: description}))
        dispatch(updateVideoPrice({id: video._id, data: price}))

        alert('All changes saved!');
    };

    const handleDelete = () => {
        dispatch(deleteVideo(video._id));
        navigate('/teacher');
    };

    if (!video) return <div>Loading...</div>;

    return (
        <div>
            <TeacherPageNavbar />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-5">
                <div className="col-span-2 flex justify-center items-center bg-gray-100 p-4">
                    <ReactPlayer url={video.video_url} controls width="100%" height="500px" />
                </div>

                <div className="col-span-1 flex flex-col border-l p-4 space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-xl font-semibold mb-2">Title</label>
                        <input type="text" id="title" value={video.title} onChange={handleInputChange} className="w-full p-2 text-2xl font-bold border rounded-md" />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-xl font-semibold mb-2">Açıklama</label>
                        <textarea id="description" value={video.description} rows={5} onChange={handleInputChange} className="w-full p-2 text-xl border rounded-md resize-none" />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-xl font-semibold mb-2">Fiyat</label>
                        <input type="text" id="price" value={video.price} onChange={handleInputChange} className="w-full text-xl p-2 border rounded-md" />
                    </div>

                    <button type="submit" className="primary-btn" onClick={handleSubmit}>Edit</button>

                    <button type="submit" className="primary-btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateVideo;