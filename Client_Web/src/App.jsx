import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import StudentMain from "./pages/Student/Main";
import StudentVideo from "./pages/Student/Video";
import StudentCart from "./pages/Student/Cart";
import StudentCheckout from "./pages/Student/Checkout";
import WatchVideo from "./pages/Student/WatchVideo";
import WatchLive from "./pages/Student/WatchLive";
import FilterData from "./pages/Student/FilterData";
import TeacherMain from "./pages/Teacher/Main";
import TeacherVideo from "./pages/Teacher/Video";
import TeacherLive from "./pages/Teacher/Live";
import UpdateVideo from "./pages/Teacher/UpdateVideo";
import Users from "./pages/Admin/Users";
import Videos from "./pages/Admin/Videos";
import Lives from "./pages/Admin/Lives";
import Permissions from "./pages/Admin/Permissions";
import Purchases from "./pages/Admin/Purchases";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />}></Route>

        <Route path="/student" element={<StudentMain />}></Route>
        <Route path="/student/video" element={<StudentVideo />}></Route>
        <Route path="/student/cart" element={<StudentCart />}></Route>
        <Route path="/student/checkout" element={<StudentCheckout />}></Route>
        <Route path="/watch/:id" element={<WatchVideo />}></Route>
        <Route path="/watchLive/:id" element={<WatchLive />}></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>

        <Route path="/teacher" element={<TeacherMain />}></Route>
        <Route path="/teacher/video" element={<TeacherVideo />}></Route>
        <Route path="/teacher/live" element={<TeacherLive />}></Route>
        <Route path="/updateVideo/:id" element={<UpdateVideo />}></Route>

        <Route path="/admin" element={<Users />}></Route>
        <Route path="/admin/videos" element={<Videos />}></Route>
        <Route path="/admin/lives" element={<Lives />}></Route>
        <Route path="/admin/permissions" element={<Permissions />}></Route>
        <Route path="/admin/purchases" element={<Purchases />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
