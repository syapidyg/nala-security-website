function ServiceItem2({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <div className="px-4 sm:px-10 md:px-10 bg-primary font-primaryRegular text-white">
      <div>
        <div className=" max-w-screen-2xl py-10">
          <div className=" md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 ">
            <div
              data-aos="fade-zoom-out"
              data-aos-offset="100"
              data-aos-delay="50"
            >
              <img className="rounded-xl" src={image} alt="SSS" />
            </div>
            <div className="md:w-3/5 mx-auto">
              <h2 className="text-4xl font-primaryBold mb-4 md:w-11/12 text-5xl">
                {title}
              </h2>
              <p className="md:w-3/4 text-sm text-neutralGrey mb-4">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceItem2;
