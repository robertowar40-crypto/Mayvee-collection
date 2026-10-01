const categories = ["Clothing", "Shoes", "Bags", "Accessories"];

const Categories = () => {
  return (
    <section id="categories" className=" max-w-7xl mx-auto px-8 py-24">
      <div className=" text-center mb-12">
        <h2 className=" text-4xl font-bold">Shop by Category</h2>
        <p className=" text-slate-600 mt-2">Four categories. One standard: Unmistakable class.</p>
      </div>

      <div className=" grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
          key={category}
          className=" border border-slate-300 rounded-2xl py-9 text-center font-medium text-lg hover:border-sky-600 hover:text-sky-600 transition duration-300 cursor-pointer hover:-translate-y-1 active:scale-95">
            {category}
          </div>
        )
      )}
      </div>
    </section>
  );
};

export default Categories;
