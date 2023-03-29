function Contact() {
  return (
    <>
      <section id="contact" className="py-24 bg-[#282734]">
        <div className="container-section">
          <div className="text-center">
            <h2 className="mb-12 text-4xl font-bold tracking-wide text-white" data-aos="fade-down" data-aos-delay="300">
              Contact
            </h2>
          </div>

          <div className="flex flex-wrap gap-y-12 contact-form-area" data-aos="fade-up" data-aos-delay="400">
            <div className="w-full md:w-1/2">
              <div className="contact">
                <h2 className="mb-5 ml-3 text-xl font-bold uppercase text-slate-200">Contact Form</h2>
                <form id="contactForm" action="assets/contact.php">
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                      <div className="mx-3">
                        <input
                          type="text"
                          className="rounded-full form-input"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          data-error="Please enter your name"
                        />
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-full lg:w-1/2">
                      <div className="mx-3">
                        <input
                          type="text"
                          placeholder="Email"
                          id="email"
                          className="rounded-full form-input"
                          name="email"
                          required
                          data-error="Please enter your email"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <input
                          type="text"
                          placeholder="Subject"
                          id="subject"
                          name="subject"
                          className="rounded-full form-input"
                          required
                          data-error="Please enter your subject"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3">
                        <textarea
                          className="rounded-lg form-input"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          rows={5}
                          data-error="Write your message"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="mx-3 submit-button">
                        <button className="btn" id="form-submit" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="ml-3 md:ml-12" data-aos="fade">
                <h2 className="mb-5 text-xl font-bold uppercase text-slate-200">Get In Touch</h2>
                <div>
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker" />
                    </div>
                    <p className="pl-3 text-slate-200">Skopje, Macedonia</p>
                  </div>
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="contact-icon">
                      <i className="lni lni-envelope" />
                    </div>
                    <p className="pl-3 text-slate-200">
                      <a href="#" className="block">
                        email@gmail.com
                      </a>
                      <a href="#" className="block">
                        tomsaulnier@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="contact-icon">
                      <i className="lni lni-phone-set" />
                    </div>
                    <p className="pl-3 text-slate-200">
                      <a href="#" className="block">
                        +42 374 5967
                      </a>
                      <a href="#" className="block">
                        +99 123 5967
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="google-map-area" className="bg-[#282734]" data-aos="fade-down" data-aos-delay="500">
        <div className="mx-6">
          <div className="flex">
            <div className="w-full">
              <object
                className="google-map-contact"
                data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
                title="Google Map Marker"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { Contact };
