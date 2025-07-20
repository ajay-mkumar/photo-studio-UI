import icon from "../../public/images/icons8-camera-100.png";

function ExpertiseComponent() {
  return (
    <div className="flex justify-center gap-16 bg-blue-400 mx-5 py-10 rounded-lg text-white">
      {[
        { title: "Professional editing" },
        { title: "Long hour shoots" },
        { title: "Extensive equipments" },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center max-w-[200px]">
          <img src={icon} alt="icon" className="w-20 h-20 mb-4" />
          <h5 className="font-bold text-lg mb-2">{item.title}</h5>
          <p className="text-sm leading-snug">
            <span className="block">Your creativity our inspiration,</span>
            <span className="block">whatever you want</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ExpertiseComponent;
    