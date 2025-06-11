const DividerSection = () => {
  return (
    <section
      className="relative w-full py-20 text-white text-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/5f/4b/52/5f4b52469868262ddb70c68765969995.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // use 'fixed' on desktop only for better mobile compatibility
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="text-left max-w-xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#f7f0e8]">
            We are SAS Ayurvedic College & Hospital
          </h1>
          <p className="text-lg sm:text-xl text-[#f5e1d3]">
            We are <span className="text-[#d2b48c] font-semibold">Different</span>, we make{" "}
            <span className="text-[#d2b48c] font-semibold">Learning Great</span>
          </p>
        </div>

        {/* Right Button */}
        <div className="mt-6 md:mt-0">
          <a
            href="#apply"
            className="bg-[#a67c52] hover:bg-amber-900 text-white px-6 py-3 rounded-full text-lg shadow-lg transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default DividerSection;
