import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartingPage from "./pages/StartingPage";
import StudentMain from "./pages/Student/Main";
import StudentVideo from "./pages/Student/Video";
import TeacherMain from "./pages/Teacher/Main";
import TeacherVideo from "./pages/Teacher/Video";
import TeacherLive from "./pages/Teacher/Live";
import AdminMain from "./pages/Admin/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartingPage />}></Route>

        <Route path="/student" element={<StudentMain />}></Route>
        <Route path="/student/video" element={<StudentVideo />}></Route>

        <Route path="/teacher" element={<TeacherMain />}></Route>
        <Route path="/teacher/video" element={<TeacherVideo />}></Route>
        <Route path="/teacher/live" element={<TeacherLive />}></Route>

        <Route path="/admin" element={<AdminMain />}></Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
