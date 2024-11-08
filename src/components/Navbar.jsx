import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <p className="text-3xl">MA</p>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/muhammad-abbas-azam-543523133/">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/abbasazam1236">
          <FaGithub />
        </a>
        <FaInstagram />
      </div>
    </nav>
  );
};

export default Navbar;
