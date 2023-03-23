import FeatureSvg from '../../../features.svg';

function Feature() {
  return (
    <div id="features" className="py-24 bg-blue-100 dark:bg-[#146C94]">
      <div className="container-section">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-5 lg:mb-0">
              <h2 className="mb-12 section-heading dark:text-white" data-aos="fade-down" data-aos-delay="300">
                Learn More About Us
              </h2>

              <div className="flex flex-wrap" data-aos="fade-down" data-aos-delay="800">
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon dark:text-sky-900">
                      <i className="lni lni-layers" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title dark:text-slate-200">Built with TailwindCSS</h4>
                      <p className="dark:text-slate-300">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon dark:text-sky-900">
                      <i className="lni lni-gift" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title dark:text-slate-200">Free to Use</h4>
                      <p className="dark:text-slate-300">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon dark:text-sky-900">
                      <i className="lni lni-laptop-phone" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title dark:text-slate-200">Fully Responsive</h4>
                      <p className="dark:text-slate-300">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon dark:text-sky-900">
                      <i className="lni lni-leaf" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title dark:text-slate-200">Easy to Customize</h4>
                      <p className="dark:text-slate-300">
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mx-3 lg:mr-0 lg:ml-3" data-aos="fade-right" data-aos-delay="300">
              <img src={FeatureSvg} alt="Our Feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
