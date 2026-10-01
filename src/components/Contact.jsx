const contact = [
  {
    label: "WhatsApp",
    value: "+234 000 000 0000",
    href: "https://wa.me/2340000000000",
  },
  {
    label: "Email",
    value: "your-email@example.com",
    href: "mailto:your-email@example.com",
  },
  {
    label: "Instagram",
    value: "@your-handle",
    href: "https://instagram.com/your-handle",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className=" max-w-7xl mx-auto px-8 py-24 flex justify-between items-center gap-12"
    >
      <div className=" flex flex-col gap-6 max-w-xl">
        <h2 className=" text-4xl font-bold leading-tight">
          {" "}
          Can't find it? We'll Source It
        </h2>

        <p className=" text-lg text-slate-600">
          Tell us what you're looking for. A specific piece, a rare find,
          something you've searched everywhere for. Mayvee will take it from
          there.
        </p>
      </div>

      <div className=" flex flex-col gap-4 w-full max-w-md">
        {contact.map(({ label, value, href }) => (
          <a
            key={label}
            href={href}
            className="border border-slate-300 rounded-2xl px-6 py-5 flex flex-col hover:border-sky-600 hover:text-sky-600 hover:-translate-y-1 transition duration-300 active:scale-95 "
          >
            <span className=" text-sm uppercase tracking-wide text-slate-500">
              {label}
            </span>
            <span className=" text-lg font-medium">{value}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
