import portfolio from "../../../public/images/portfolio.jpg";

function PortfolioCard() {
  return (
    <div
      id="photo-section"
      className="flex justify-center items-center  gap-10 w-3/4 mx-auto my-10"
    >
      <img
        src={portfolio}
        alt="Portfolio Preview"
        className="w-[400px] rounded shadow-lg"
      />
      <div className="text-left self-start">
        <p className="text-red-600 text-sm   mb-2">Immortalize your memories</p>
        <h1 className="text-4xl font-bold leading-tight mb-3">
          <span className="block">Experience Photography</span>
          <span className="block text-indigo-600">Like Never Before</span>
        </h1>
        <p className="text-base text-gray-500">
          Dive into a world where every frame tells a story — captured with
          precision and passion.
        </p>
        <div className="mt-10">
        <button className="w-50 bg-red-600 text-white font-semibold py-3 rounded-xl hover:bg-red-900 transition duration-300 shadow-md">
          Explore Our Portfolio
        </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
