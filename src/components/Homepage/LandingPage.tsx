import img1 from "../../../public/images/safety-1.jpg";
import img2 from "../../../public/images/image2.jpg";
import img3 from "../../../public/images/imag3.jpeg";
import { useModal } from "../../context/ModalContext";
import { HIRE_US } from "../../constants/constants";
import { useMediaQuery } from "react-responsive";

function LandingPage() {
  const { toggleModal } = useModal();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!isMobile) {
    return (
      <div className="m-20 flex justify-center">
        <div className="relative flex flex-col gap-5 ml-50">
          <div>
            <img src={img1} alt="" className="w-[450px] ml-13 rounded-lg" />
          </div>
          <div className="flex gap-5">
            <img src={img2} alt="" className="w-[240px] rounded-lg" />
            <img src={img3} alt="" className="w-[240px] rounded-lg" />
          </div>
        </div>
        <div className="absolute">
          <p className="mr-100">
            <span className="block text-7xl bg-pink-50 w-100 rounded-b-lg">
              Unleash the
            </span>
            <span className="block text-7xl bg-pink-50 w-1/2 rounded-lg">
              Art of
            </span>
            <span className="block text-7xl bg-pink-50 w-110 rounded-t-lg">
              Photography
              <span className="block pt-10 pr-2 text-sm text-justify bg-pink-50 rounded-lg">
                At Capture Studio, we specialize in capturing life’s most
                precious moments, transforming them into timeless works of art.
                Our team of passionate photographers is dedicated to telling
                stories through the lens, ensuring that every click captures the
                essence of your unique journey.
              </span>
            </span>
          </p>
        </div>
        <button
          onClick={() => toggleModal(HIRE_US)}
          className="absolute top-[600px] left-65 w-50 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-900 transition duration-300 shadow-md"
        >
          Book Your Session Now
        </button>
      </div>
    );
  }

  if (isMobile) {
    return (
      <>
        <div className="w-screen overflow-hidden relative h-[250px] sm:h-[350px]">
          <img
            src={img1}
            alt="Photography"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute top-4 left-4 bg-white/70 backdrop-blur-md p-3 rounded-md shadow-md max-w-[75%]">
            <p className="text-md italic font-semibold text-black leading-tight">
              Unleash the Art of <br />
              <span className="text-red-600">Photography</span>
            </p>
          </div>
        </div>
        <p className="text-sm text-justify leading-relaxed tracking-wide text-gray-700 px-6 py-4">
          At <span className="font-semibold text-black">Capture Studio</span>,
          we specialize in preserving life’s most cherished moments, turning
          fleeting instants into timeless masterpieces. Our passionate team of
          photographers doesn't just take pictures — they craft visual stories
          that echo your unique journey with every frame, every flicker, every
          flash.
        </p>
      </>
    );
  }
}

export default LandingPage;
