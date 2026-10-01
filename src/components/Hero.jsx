const Hero = () => {
  return (
    // Hero page
    <section id="home" className=" min-h-screen">
      <div className=" max-w-7xl mx-auto px-8 flex justify-between items-center min-h-screen">
        <div className=" flex flex-col gap-6 max-w-xl  ">
          {/* headline */}
          <h1 className=" text-5xl font-bold leading-tight">
            Where Class Meets Style
          </h1>

          {/* paragraph */}
          <p className=" text-lg text-slate-600 ">
            From statement shoes to iconic accessories, every piece in our collection is chosen to make you look and feel like the best dressed person in the room.

          </p>

          <div className=" flex gap-4">
            {/* button link */}
            <a
              href="#shop"
              className=" bg-sky-600 text-white rounded-full px-6 py-3 font-medium transition duration-300 hover:-translate-y-1 hover:bg-sky-700 shadow-md hover:shadow-lg active:scale-95"
            >
              Shop Now
            </a>

            <a
              href="#collections"
              className=" border border-sky-600 text-sky-600 rounded-full px-6 py-3 font-medium transition duration-300 hover:bg-sky-100 active:scale-95 hover:-translate-y-1 hover:shadow-lg"
            >
              View Collections
            </a>
          </div>
        </div>

        <div className=" flex justify-center">
          {/* image */}
          <img
            src="Getty.webp"
            alt=""
            className=" w-full max-w-md rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
