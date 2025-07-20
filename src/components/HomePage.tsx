import img1 from "../../public/images/safety-1.jpg";
import img2 from "../../public/images/image2.jpg";
import img3 from "../../public/images/imag3.jpeg";
import PortfolioCard from "./PortfolioCard";

function HomePage() {
  return (
    <>
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
          className="absolute top-[600px] left-65 w-50 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-900 transition duration-300 shadow-md"
        >
          Book Your Session Now
        </button>
      </div>
      <PortfolioCard />
    </>
  );
}

export default HomePage;
