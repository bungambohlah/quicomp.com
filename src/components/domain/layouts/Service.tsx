import services from '~/constants/services';

function Service() {
  return (
    <section id="services" className="py-24">
      <div className="container-section">
        <div className="text-center">
          <h2 className="mb-12 section-heading" data-aos="fade-down" data-aos-delay="300">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 align-baseline sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <div key={`service-${idx + 1}`} className="flex flex-col gap-2">
              <div className="text-5xl icon">
                <i className={`lni ${service.icon}`} />
              </div>
              <h3 className="flex-grow service-title min-h-12">{service.title}</h3>
              <p className="text-[#8f9dac] flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Service };
