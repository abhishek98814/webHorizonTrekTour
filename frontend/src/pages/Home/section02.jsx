const slide1 = "/assets/slide1.jpg";
const slide2 = "/assets/slide2.jpg";
const slide3 = "/assets/slide3.jpg";

const Section02 = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="text-center sm:text-left my-16 px-16 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Journey to the <br /> Himalayan Lands
          </h1>
          <p className="text-lg text-gray-600">
            Unveiling Hidden Wonders: Nepal, Bhutan, Tibet, and Beyond - Inspire Your Journey!
          </p>
        </section>

        <section className="flex justify-center sm:justify-start">
          <img src={slide1} alt="Himalayan view" className="w-full h-100 rounded-lg shadow-md" />
        </section>

        <section className="grid gap-4">
          <div className="flex">
            <img src={slide2} alt="Mountain Landscape" className="w-full h-60 rounded-lg shadow-md" />
          </div>
          <div className="flex justify-center">
            <img src={slide3} alt="Adventure in the Himalayas" className="w-full h-60 rounded-lg shadow-md" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section02;
