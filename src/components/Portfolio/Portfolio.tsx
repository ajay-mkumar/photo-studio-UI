import portfolio from "../../../public/images/portfolio/portfolio.jpg";
import portfolio2 from "../../../public/images/portfolio/portfolio2.jpg";
import portfolio3 from "../../../public/images/portfolio/portfolio3.jpeg";
import portfolio4 from "../../../public/images/portfolio/portfolio4.jpg";
import portfolio5 from "../../../public/images/portfolio/portfolio6.jpeg";

const gallery = [
  {
    img: portfolio,
    alt: "Modern Architecture Portfolio",
  },
  {
    img: portfolio2,
    alt: "Creative Studio Portfolio",
  },
  {
    img: portfolio5,
    alt: "Urban Aesthetic Portfolio",
  },
  {
    img: portfolio4,
    alt: "Nature-Inspired Design",
  },
  {
    img: portfolio3,
    alt: "Futuristic Concept Art",
  },
];

function Portfolio() {
  return (
    <div className="px-10 py-6">
      <h1 className="text-3xl font-bold mb-6 text-[#252752]">Journey Through Our Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
        {gallery.map((item, index) => (
          <img
            key={index}
            src={item.img}
            alt={item.alt}
            className="w-full h-auto object-cover rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-300 ease-in-out"
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
