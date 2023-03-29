import Logo from '../../../logo.png';

function Footer() {
  return (
    <>
      <footer id="footer" className="py-16 bg-[#282734]">
        <div className="container-section">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
              <div className="mx-3 mb-8">
                <div className="w-10/12 mb-3 footer-logo">
                  <img src={Logo} alt="Company Logo" />
                </div>
                <p className="text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam excepturi quasi, ipsam voluptatem.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2" data-aos="fade-up" data-aos-delay="800">
              <div className="mx-3 mb-8">
                <h3 className="mb-5 text-xl font-bold text-white">Find us on</h3>

                <ul className="flex justify-start social-icons">
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-indigo-500" title="facebook icon">
                      <i className="lni lni-facebook-original" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-blue-400" title="twitter icon">
                      <i className="lni lni-twitter-original" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-red-500" title="instagram icon">
                      <i className="lni lni-instagram-original" aria-hidden="true" />
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="#" className="footer-icon hover:bg-indigo-600" title="linkedin icon">
                      <i className="lni lni-linkedin-original" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section className="py-6 bg-[#282734] border-t-2 border-[#45435a] border-dotted">
        <div className="container-section">
          <div className="flex flex-wrap">
            <div className="w-full text-center">
              <p className="text-white">
                Designed by{' '}
                <a
                  className="text-white duration-300 hover:text-blue-600"
                  href="https://afif.dev"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  afif.dev
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Footer };
