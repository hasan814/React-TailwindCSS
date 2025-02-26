const Subscribe = () => {
  return (
    <section className="py-20">
      <div className="bg-white rounded-xl shadow-lg lg:p-16 md:p-12 p-8 hover:shadow-2xl transition-all duration-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="lg:text-4xl md:text-3xl text-2xl font-bold text-heading-text mb-5">
              Subscripbe Now for <br />
              Get Special Features!
            </h2>
            <p className="text-primary-text">
              Let's Subscribe with us and find the fun.
            </p>
          </div>
          <div>
            <button className="bg-primary text-white hover:bg-red-600 lg:px-16 md:px-12 md:py-3 lg:py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
