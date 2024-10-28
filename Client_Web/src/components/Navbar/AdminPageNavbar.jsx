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

            <button className="primary-btn">LogOut</button>
        </div>
    </nav>
  )
}

export default AdminPageNavbar