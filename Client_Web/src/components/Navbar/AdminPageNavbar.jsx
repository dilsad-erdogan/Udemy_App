import { useNavigate } from "react-router-dom";

const AdminPageNavbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
        <div className="container py-8 flex justify-between items-center">
            {/* Logo Section */}
            <div>
                <h1 className="font-bold text-2xl" onClick={() => navigate('/admin')}>UDEMY | DLSD</h1>
            </div>

            {/* Pages Section */}
            <div className="flex">
              <a href="/admin/users" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                User Table
              </a>
              <a href="/admin/videos" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                Video Table
              </a>
              <a href="/admin/lives" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                Live Table
              </a>
              <a href="/admin/permissions" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                Permission Table
              </a>
              <a href="/admin/purchases" className="inline-block py-2 px-3 hover:text-secondary relative group font-bold">
                <div className="w-2 h-2 absolute bg-secondary mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                Purchase Table
              </a>
            </div>

            <button className="primary-btn">LogOut</button>
        </div>
    </nav>
  )
}

export default AdminPageNavbar