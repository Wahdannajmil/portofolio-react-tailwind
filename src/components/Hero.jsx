import { content } from "../Content";
const Hero = () => {
const { hero } = content;

  
    const handleClick = () => {
    window.open("https://www.linkedin.com/in/wahdan-najmil-fata-949aa825a/", "_blank");
  };
return (
  <section id="home" className="overflow-hidden">
    <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
  <div
    data-aos="slide-left"
    data-aos-delay="1200"
    className="absolute w-full h-full bg-primaryLinear -z-10 pb-4"
  >
    <h1 className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#ffff] pb-20">
      <br />
      {hero.firstName}{" "}
      <span className="text-dark_primary">{hero.LastName}</span>
    </h1>
  </div>


      {/* Elemen hero.title */}
      <div className="pb-16 px-6 pt-5" data-aos="fade-down">
        <h2>{hero.title}</h2>
        <br />
        <div className="flex justify-end">
          <button className="btn" onClick={handleClick}>
            {hero.btnText}
          </button>
        </div>
        <div className="flex flex-col gap-10 mt-10">
          {hero.hero_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-down"
              data-aos-delay={i * 300}
              className={`flex items-center w-80 gap-5
              ${i === 1 && " flex-row-reverse text-right"}  `}
            >
              <h3>{content.count}</h3>
              <p>{content.text}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  </section>
);



};

export default Hero;
