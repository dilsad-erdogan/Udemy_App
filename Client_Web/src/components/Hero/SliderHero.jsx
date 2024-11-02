import Slider from "react-slick";
import ExplanationCard from "../Cart/ExplanationCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchLiveData } from "../../redux/liveSlice";

const SliderHero = () => {
    const dispatch = useDispatch();
    const lives = useSelector(state => state.live.liveData);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
    };

    useEffect(() => {
        dispatch(fetchLiveData());
    }, [dispatch]);

    return (
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gradient-to-r from-white to-gray-100 flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    {/* Hero section */}
                    <Slider {...settings}>
                        {lives?.data?.slice(0, 4).map((data) => (
                            <div key={data._id}>
                                <ExplanationCard data={data} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default SliderHero;