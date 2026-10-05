const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Categories", href: "#categories" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/2340000000000" },
  { label: "Email", href: "mailto:your-email@example.com" },
  { label: "Instagram", href: "https://instagram.com/your-handle" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-slate-900 text-slate-300 px-8 py-16">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className=" flex flex-col gap-3">
          <h2 className=" text-2xl font-bold text-white">Mayvee Collections</h2>

          <p className=" text-slate-400">
            Luxury, personally curated. Est. 2015
          </p>
        </div>

        <div className=" flex flex-col gap-3">
          <h3 className=" text-white font-semibold mb-2">Quick Links</h3>
          {quickLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className=" hover:text-white transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        <div className=" flex flex-col gap-3">
          <h3 className=" text-white font-semibold mb-2">Connect</h3>
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className=" hover:text-white transition duration-300"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className=" max-w-7xl mx-auto border-t border-slate-700 mt-12 pt-6 text-center text-slate-500 text-sm">
        © {year} Mayvee Collections, All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
