import { HIRE_US } from "../constants/constants";
import { useModal } from "../context/ModalContext";

function NavBar() {
  const { toggleModal } = useModal();

  return (
    <div className="flex items-center justify-between h-16 px-6 relative">
      {/* Left: Logo */}
      <h3 className="text-xl font-semibold text-gray-700 z-10 leading tight">
        {" "}
        <span className="block">Aj</span>
        <span className="block">Studio</span>
      </h3>

      {/* Center: Menu */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 ">
        <ul className="bg-white rounded-lg px-6  flex gap-6 text-gray-700 text-lg shadow-md font-semibold">
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            Home
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            Services
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            About Us
          </li>
          <li className="hover:text-red-500 transition duration-200 cursor-pointer">
            Portfolio
          </li>
        </ul>
      </div>

      {/* Right: Button */}
      <button
        onClick={() => toggleModal(HIRE_US)}
        className="border-pink text-red-500 px-6 py-1 cursor-pointer border rounded-lg shadow hover:bg-red-500 hover:text-white transition duration-200 z-10"
      >
        Hire us
      </button>
    </div>
  );
}

export default NavBar;
