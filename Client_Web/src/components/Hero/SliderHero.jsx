import Slider from "react-slick";
import ExplanationCard from "../ExplanationCard";

const HeroData = [
    {
        _id: 1,
        title: "Class_1",
        description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
        teacher: "Teacher_1",
        videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqt5pAdBxxD0yj3vFDvdqUog61C-s-3dV9DQ&s"
    },
    {
        _id: 2,
        title: "Class_2",
        description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
        teacher: "Teacher_1",
        videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yT7qz5jH4X9pFJ80ZT6hOp4dA7iks07t6A&s"
    },
    {
        _id: 3,
        title: "Class_3",
        description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
        teacher: "Teacher_1",
        videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabmSuIL0tOShiHt6rz1IarYMo21bVtW4GDg&s"
    },
    {
        _id: 4,
        title: "Class_4",
        description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
        teacher: "Teacher_1",
        videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s"
    },
];

const SliderHero = () => {
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

    return (
        <div className="container">
            <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bg-gradient-to-r from-white to-gray-100 flex justify-center items-center">
                <div className="container pb-8 sm:pb-0">
                    {/* Hero section */}
                    <Slider {...settings}>
                        {HeroData.map((data) => (
                            <div key={data._id}>
                                <ExplanationCard data={data} />                               
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default SliderHero