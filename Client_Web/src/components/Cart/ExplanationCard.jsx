import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchById } from "../../redux/userSlice";

const ExplanationCard = ({ data }) => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);

    useEffect(() => {
        if (data.teacher_id) {
            dispatch(fetchById(data.teacher_id));
        }
    }, [dispatch, data.teacher_id]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                <p className="text-xl sm:text-3xl lg:text-xl font-bold text-right">
                    {users?.data?.name || "Loading..."}
                </p>
                <p className="text-xl sm:text-3xl lg:text-xl font-bold break-words">{data.description}</p>
            </div>

            <div className="flex flex-col gap-5">
                <img src={data.video_png} alt="" className="w-[300px] sm:w-[500px] mx-auto" />
                <Link to={`/watchLive/${data._id}`} className="primary-btn mt-5 flex justify-center items-center">
                    <span>Watch live stream</span>
                </Link>
            </div>
        </div> 
    );
};

export default ExplanationCard;