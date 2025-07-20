import studio from "../../../public/images/studio/studio.jpg";
import studio2 from "../../../public/images/studio/studio2.jpeg";

function StudioCard() {
  return (
    <div className="flex  m-20 bg-red-600 pt-20 pl-10 pb-20 w-3/4 rounded-4xl shadow-xl">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold text-white">Step Into Our World</h1>
        <p className="text-white text-sm text-justify">
          <span className="block">
            Explore our studio like never before with our cutting edge 3D
          </span>
          <span className="block">
            visualisation.Take a virtual tour and experience the ambiance
          </span>
        </p>
        <button className="bg-white cursor-pointer text-black rounded-xl p-3 w-1/2 mt-5">
          Explore Our Studio
        </button>
      </div>
      <img
        src={studio}
        className="absolute right-100 top-[1000px] w-[200px] object-cover rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
      />
      <img
        src={studio2}
        className="absolute right-50 mt-40  h-auto object-cover rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
      />
    </div>
  );
}

export default StudioCard;
