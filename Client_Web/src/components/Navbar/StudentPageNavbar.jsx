import { FaSearch, FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

const StudentPageNavbar = () => {
  const videos = useSelector(state => state.cart.videos);
  const navigate = useNavigate();

  const logout = () => {
    navigate('/');
    localStorage.clear();
  };

  return (
    <nav>
        <div className="container py-8 flex justify-between items-center">
            {/* Logo Section */}
            <div>
                <h1 className="font-bold text-2xl" onClick={() => navigate('/student')}>UDEMY | DLSD</h1>
            </div>

            {/* Search Section */}
            <div className="relative flex-1 mx-4">
                <form>
                    <input type="text" placeholder="Search Book" className="w-full border py-2 px-4" />
                    <FaSearch className="absolute top-3 right-3 text-red-500" />
                </form>
            </div>

            <div className="flex text-center justify-center items-center gap-2 mr-3">
                <div onClick={() => navigate('/student/video')} className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                    <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                    My Videos
                </div>

                <Link to="/student/cart" className="relative">
                    <FaShoppingCart className="hover:text-secondary relative font-bold" />
                    {videos.length > 0 && (
                    <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                        {videos.length}
                    </span>
                    )}
                </Link>
            </div>

            <button className="primary-btn" onClick={logout}>LogOut</button>
        </div>
    </nav>
  )
}

export default StudentPageNavbar