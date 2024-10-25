import StudentPageNavbar from "../../components/Navbar/StudentPageNavbar";
import Videos from "../../components/Video/Student/Video";

const Video = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <StudentPageNavbar />
      <Videos isMy={true} />
    </main>
  )
}

export default Video