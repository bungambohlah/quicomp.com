import FeatureSvg from '../../../features.svg';

function Feature() {
  return (
    <div id="features" className="py-24 bg-blue-100">
      <div className="container-section">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-1/2">
            <div className="mb-5 lg:mb-0">
              <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">
                Learn More About Us
              </h2>

              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon">
                      <i className="lni lni-layers" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Built with TailwindCSS</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon">
                      <i className="lni lni-gift" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Free to Use</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon">
                      <i className="lni lni-laptop-phone" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Fully Responsive</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/2">
                  <div className="m-3">
                    <div className="text-4xl icon">
                      <i className="lni lni-leaf" />
                    </div>
                    <div className="features-content">
                      <h4 className="feature-title">Easy to Customize</h4>
                      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
              <img src={FeatureSvg} alt="Our Feature" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
