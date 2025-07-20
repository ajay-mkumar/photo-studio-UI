import icon from "../../public/images/icons8-camera-100.png";

function ExpertiseComponent() {
  return (
    <div className="bg-[#c3c4cd] m-20 h-1/2 rounded-lg shadow-xl">
      <h1 className="text-center text-3xl font-extrabold text-[#252752] pt-10">
        Explore Our Expertise
      </h1>

      <div className="flex justify-center gap-16 m-10 py-10">
        {[
          { title: "Professional Editing" },
          { title: "Long Hour Shoots" },
          { title: "Extensive Equipment" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-[200px] bg-white p-6 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <img src={icon} alt="icon" className="w-20 h-20 mb-4" />
            <h5 className="font-bold text-lg mb-2 text-[#252752]">
              {item.title}
            </h5>
            <p className="text-sm leading-snug text-[#4a4b57] font-medium">
              <span className="block">Your creativity, our inspiration.</span>
              <span className="block">Whatever you dream, we capture.</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpertiseComponent;
