import { useNavigate } from "react-router-dom";

const TeacherPageNavbar = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="container py-8 flex justify-between items-center">
                {/* Logo Section */}
                <div>
                    <h1 className="font-bold text-2xl" onClick={() => navigate('/teacher')}>UDEMY | DLSD</h1>
                </div>

                {/* Pages Section */}
                <div className="flex">
                    <a href="/teacher/video" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                        <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                        Add Video
                    </a>
                    <a href="/teacher/live" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                        <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                        Add Live
                    </a>
                </div>

                <button className="primary-btn">LogOut</button>
            </div>
        </nav>
    )
}

export default TeacherPageNavbar