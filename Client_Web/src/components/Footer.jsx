import { FaLocationArrow, FaMobileAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container py-8 md:flex md:justify-between items-center">
      {/* Company details */}
      <div className="py-8 px-4">
        <a href="#" className="text-primary tracking-widest text-2xl font-bold sm:text-3xl">UDEMY | DLSD</a>
        <p className="text-gray-600 lg:pr-24 pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>
        <p className="text-gray-500 mt-4">Made with 💕 by The Dilşad Rukiye Erdoğan</p>
        <div className="flex gap-3 pt-5">
          <a href="https://www.linkedin.com/in/dilşad-erdoğan-089547221/" target="_blank" className="primary-btn">Visit my Linkedin Profile</a>
          <a href="https://github.com/dilsad-erdogan" target="_blank" className="primary-btn">Visit my Github Profile</a>                      
        </div>
      </div>

      {/* Footer links */}
      <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
        <div className="py-8 px-4 col-span-2 sm:col-auto">
          <h1 className="text-xl font-bold sm:text-left mb-3 text-primary">Address</h1>
          <div>
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-3xl text-primary duration-300" />
              <p className="text-lg duration-300">Selçuklu, Konya</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <FaMobileAlt className="text-3xl text-primary duration-300" />
              <p className="text-lg duration-300">+90 507 184 52 46</p>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <FaInstagram className="text-3xl text-primary duration-300" />
              <FaLinkedin className="text-3xl text-primary duration-300" />
              <FaGithub className="text-3xl text-primary duration-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer