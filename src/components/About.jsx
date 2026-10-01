const About = () => {
  return (
    <section
      id="about"
      className=" max-w-7xl mx-auto px-8 py-24 flex justify-between items-center gap-12 "
    >
      <div className=" flex justify-center">
        <img
          src="VA.jpg"
          alt=" Victoria Agada, Founder of Mayvee Collections"
          className=" w-full max-w-md rounded-3xl shadow-xl "
        />
      </div>

      <div className=" flex flex-col gap-6 max-w-xl ">
        <h2 className=" text-4xl font-bold leading-tight">
          {" "}
          Luxury, Personally Curated
        </h2>

        <p className=" text-lg text-slate-600">
          Founded in 2015, Mayvee Collections is a personal shopping experience
          built for those who refuse to compromise. No matter how rare or
          difficult to find, if it's luxury, we procure it with guaranteed
          sourcing and 100% authentic goods, every time.
        </p>

        <p className=" text-lg text-slate-600">
          At the helm is Victoria Agada, a name synonymous with luxury
          expertise, ensuring every piece that reaches you carries the same
          standard. Unmistakable class.
        </p>
      </div>
    </section>
  );
};

export default About;
