const AdminPageNavbar = () => {
  return (
    <nav>
        <div className="container py-8 flex justify-between items-center">
            {/* Logo Section */}
            <div>
                <h1 className="font-bold text-2xl">UDEMY | DLSD</h1>
            </div>

            <button className="primary-btn">LogOut</button>
        </div>
    </nav>
  )
}

export default AdminPageNavbar