const testimonials = [
  {
    name: " Chidinma O.",
    quote:
      "Victoria found me a bag I'd been searching two years for, I still don't know how she did it, but i'm not complaining",
  },
  {
    name: "Tunde A",
    quote:
      " Every piece I've bought through Mayvee has been 100% authentic, exactly as promised. That piece of mind is worth everything",
  },
  {
    name: "Amara K.",
    quote:
      "It doesn't feel like shoping. It feels like having a personal luxury concierge who just gets you.",
  },
];
const Testimonials = () => {
  return (
    <section id="testimonials" className=" max-w-7xl mx-auto px-8 py-24">
      <div className=" text-center mb-12">
        <h2 className=" text-4xl font-bold">What Our Clients Say</h2>
        <p className=" text-slate-600 mt-2">
          Trust, built one piece at a time.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ name, quote }) => (
          <div
            key={name}
            className=" bg-slate-50 rounded-2xl p-8 flex flex-col gap-4"
          >
            <p className=" text-slate-600 italic">"{quote}"</p>
            <p className=" font-semibold">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
