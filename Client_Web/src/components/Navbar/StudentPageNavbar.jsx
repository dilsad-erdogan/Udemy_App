import { FaSearch } from "react-icons/fa"

const StudentPageNavbar = () => {
  return (
    <nav>
        <div className="container py-8 flex justify-between items-center">
            {/* Logo Section */}
            <div>
                <h1 className="font-bold text-2xl">UDEMY | DLSD</h1>
            </div>

            {/* Search Section */}
            <div className="relative flex-1 mx-4">
                <form>
                    <input type="text" placeholder="Search Book" className="w-full border py-2 px-4" />
                    <FaSearch className="absolute top-3 right-3 text-red-500" />
                </form>
            </div>

            <div>
                <a href="/student/video" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                    <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    My Videos
                </a>
            </div>

            <button className="primary-btn">LogOut</button>
        </div>
    </nav>
  )
}

export default StudentPageNavbar