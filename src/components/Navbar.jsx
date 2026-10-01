const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center px-8 py-4 sticky top-0 z-50 bg-white">
      <h1 className=" text-3xl font-bold">Mayvee Collections</h1>

      <ul className=" flex gap-6">
        <li>
          <a
            href="#home"
            className="hover:text-sky-600 hover:-translate-y-1 transition duration-300 inline-block hover:uppercase active:scale-95"
          >
            Home
          </a>
        </li>

        

        <li>
          <a
            href="#categories"
            className=" hover:-translate-y-1 hover:text-sky-600 hover:uppercase transition duration-300 inline-block active:scale-95"
          >
            Categories
          </a>
        </li>

        <li>
          <a
            href="#testimonials"
            className=" hover:uppercase hover:text-sky-600 hover:-translate-y-1 transition duration-300 inline-block active:scale-95"
          >
            Testimonials
          </a>
        </li>

        <li>
          <a
            href="#about"
            className=" hover:uppercase hover:text-sky-600 hover:-translate-y-1 transition duration-300 inline-block active:scale-95"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className=" hover:-translate-y-1 hover:text-sky-600 hover:uppercase transition duration-300 inline-block active:scale-95"
          >
            Contact
          </a>
        </li>
      </ul>

      <a
        href="#bag"
        className=" px-5 py-3 bg-sky-600 rounded-3xl text-white hover:bg-sky-400 transition duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
      >
        My Bag
      </a>
    </nav>
  );
};

export default Navbar;
