import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import Videos from "../../components/Video/Video";

const HeroData = [
  {
    _id: 1,
    title: "Class_1",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqt5pAdBxxD0yj3vFDvdqUog61C-s-3dV9DQ&s"
  },
  {
    _id: 2,
    title: "Class_2",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yT7qz5jH4X9pFJ80ZT6hOp4dA7iks07t6A&s"
  },
  {
    _id: 3,
    title: "Class_3",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabmSuIL0tOShiHt6rz1IarYMo21bVtW4GDg&s"
  },
  {
    _id: 4,
    title: "Class_4",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s"
  },
  {
    _id: 5,
    title: "Class_5",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s"
  },
  {
    _id: 6,
    title: "Class_6",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s"
  },
  {
    _id: 7,
    title: "Class_7",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s"
  },
  {
    _id: 8,
    title: "Class_8",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: "20",
    videoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s"
  },
];

const Video = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StudentPageNavbar />
      <Videos HeroData={HeroData} />
    </main>
  )
}

export default Video