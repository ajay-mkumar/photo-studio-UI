import { useMediaQuery } from "react-responsive";
import portfolio from "../../../public/images/portfolio.jpg";
import { PORTFOLIO } from "../../constants/constants";
import { useModal } from "../../context/ModalContext";

function PortfolioCard() {
  const { toggleModal } = useModal();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!isMobile)
    return (
      <div
        id="photo-section"
        className="sm:flex justify-center items-center  gap-10 w-3/4 mx-auto my-10"
      >
        <img
          src={portfolio}
          alt="Portfolio Preview"
          className="w-[400px] rounded shadow-lg"
        />
        <div className="text-left self-start">
          <p className="text-red-600 text-sm mb-2">
            Immortalize your memories
          </p>
          <h1 className="text-4xl font-bold leading-tight mb-3">
            <span className="block">Experience Photography</span>
            <span className="block text-indigo-600">Like Never Before</span>
          </h1>
          <p className="text-base text-gray-500">
            Dive into a world where every frame tells a story — captured with
            precision and passion.
          </p>
          <div className="mt-10">
            <button
              onClick={() => toggleModal(PORTFOLIO)}
              className="w-50 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-900 transition duration-300 shadow-md"
            >
              Explore Our Portfolio
            </button>
          </div>
        </div>
      </div>
    );

    if (isMobile)
      return (
        <div className="flex flex-col items-center px-5 py-6 space-y-5 bg-white rounded-2xl shadow-lg">
          {/* Image */}
          <img
            src={portfolio}
            alt="Portfolio Preview"
            className="w-full rounded-xl shadow-md object-cover"
          />
    
          {/* Text Content */}
          <div className="w-full text-left space-y-4">
            <p className="text-red-500 text-sm font-semibold uppercase tracking-wider">
              Immortalize your memories
            </p>
    
            <h1 className="text-2xl font-extrabold leading-tight text-gray-900">
              <span className="block">Experience Photography</span>
              <span className="block text-indigo-600 italic">Like Never Before</span>
            </h1>
    
            <p className="text-gray-700 text-sm leading-relaxed tracking-wide">
              Step into a realm where every click crafts emotion and every frame
              echoes your story — captured with purpose, preserved with passion.
            </p>
    
            {/* CTA Button */}
            <div className="pt-4">
              <button
                onClick={() => toggleModal(PORTFOLIO)}
                className="w-full bg-red-600 text-white font-medium py-3 rounded-xl hover:bg-red-700 active:scale-95 transition duration-300 ease-in-out shadow-md"
              >
                Explore Our Portfolio
              </button>
            </div>
          </div>
        </div>
      );
    
    
}

export default PortfolioCard;
