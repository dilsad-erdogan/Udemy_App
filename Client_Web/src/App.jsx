import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import StudentMain from "./pages/Student/Main";
import StudentVideo from "./pages/Student/Video";
import StudentCart from "./pages/Student/Cart";
import WatchVideo from "./pages/Student/WatchVideo";
import WatchLive from "./pages/Student/WatchLive";
import TeacherMain from "./pages/Teacher/Main";
import TeacherVideo from "./pages/Teacher/Video";
import TeacherLive from "./pages/Teacher/Live";
import UpdateVideo from "./pages/Teacher/UpdateVideo";
import AdminMain from "./pages/Admin/Main";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setVideos } from "./redux/videoSlice";

const Data = [
  {
    _id: 1,
    title: "Class_1",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqt5pAdBxxD0yj3vFDvdqUog61C-s-3dV9DQ&s",
    videoUrl: "https://www.youtube.com/watch?v=rPvPdeAB_pM"
  },
  {
    _id: 2,
    title: "Class_2",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yT7qz5jH4X9pFJ80ZT6hOp4dA7iks07t6A&s",
    videoUrl: "https://www.youtube.com/watch?v=YpPXTYFkql0"
  },
  {
    _id: 3,
    title: "Class_3",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTabmSuIL0tOShiHt6rz1IarYMo21bVtW4GDg&s",
    videoUrl: "https://www.youtube.com/watch?v=Fzv-rgwcFKk"
  },
  {
    _id: 4,
    title: "Class_4",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s",
    videoUrl: "https://www.youtube.com/watch?v=msGQOO6f3h0"
  },
  {
    _id: 5,
    title: "Class_5",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s",
    videoUrl: "https://www.youtube.com/watch?v=8eSsUWOU18I"
  },
  {
    _id: 6,
    title: "Class_6",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s",
    videoUrl: "https://www.youtube.com/watch?v=CfqEP0uJyX0"
  },
  {
    _id: 7,
    title: "Class_7",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s",
    videoUrl: "https://www.youtube.com/watch?v=vikzxIRDZOU"
  },
  {
    _id: 8,
    title: "Class_8",
    description: "sdfghjnhbvsdefrtgyhjnhbvcxsdrftgyhjukmnbhvgfcdcftgyhjmnvffgtyhjuOLKJhgtfdxsdrftgyhgvfcdxcfg.",
    teacher: "Teacher_1",
    price: 20,
    videoPng: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsEJVmxpp5xZpcAo4UkYFkUu99HIlSvj0Uzg&s",
    videoUrl: "https://www.youtube.com/watch?v=w-WOJ2afMic"
  },
];

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVideos(Data));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />}></Route>

        <Route path="/student" element={<StudentMain />}></Route>
        <Route path="/student/video" element={<StudentVideo />}></Route>
        <Route path="/student/cart" element={<StudentCart />}></Route>
        <Route path="/watch/:id" element={<WatchVideo />}></Route>
        <Route path="/watchLive/:id" element={<WatchLive />}></Route>

        <Route path="/teacher" element={<TeacherMain />}></Route>
        <Route path="/teacher/video" element={<TeacherVideo />}></Route>
        <Route path="/teacher/live" element={<TeacherLive />}></Route>
        <Route path="/updateVideo/:id" element={<UpdateVideo />}></Route>

        <Route path="/admin" element={<AdminMain />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
