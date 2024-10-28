import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import Modal from "../Modal";
import Login from "../userOperations/Login";
import Register from "../userOperations/Register";
import FALogin from "../userOperations/FALogin";

const NavbarMenu = [
    { id: 1, title: "Home", path: "home" },
    { id: 2, title: "Services", path: "services" },
    { id: 5, title: "Contact Me", path: "contact" },
];

const StartPageNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("login");

  const openRegister = () => {
    setIsLogin("register");
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin("login");
    setIsModalOpen(true);
  };

  const openFALogin = () => {
    setIsLogin("falogin");
    setIsModalOpen(true);
  };

  return (
    <nav>
      <div className="container py-8 flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">UDEMY | DLSD</h1>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-3 items-center">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link to={menu.path} smooth={true} duration={500} className="inline-block py-2 px-3 cursor-pointer hover:text-secondary relative group" >
                  {menu.title}
                </Link>
              </li>
            ))}
            <button className="primary-btn" onClick={() => setIsModalOpen(true)}>Login</button>
          </ul>
        </div>
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        {menuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col items-start gap-2">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link to={menu.path} smooth={true} duration={500} className="inline-block py-2 px-3 cursor-pointer hover:text-secondary relative group" >
                    {menu.title}
                  </Link>
                </li>
              ))}
              <button className="primary-btn" onClick={() => setIsModalOpen(true)}>Login</button>
            </ul>                        
          </div>
        )}
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        { isLogin === "login" && <Login openFALogin={openFALogin} openRegister={openRegister} /> }
        { isLogin === "register" && <Register openLogin={openLogin} /> }
        { isLogin === "falogin" && <FALogin openLogin={openLogin} openRegister={openRegister} /> }
      </Modal>
    </nav>
  );
};

export default StartPageNavbar;