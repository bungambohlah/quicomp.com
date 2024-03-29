import React from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import HeroSvg from '../../../hero.svg';
import { SignInButton } from '../auth/SignInButton';
function Hero(): React.ReactElement {
  const { state } = useAuthState();

  return (
    <section id="home" className="pt-48 pb-10">
      <div className="container-section">
        <div className="flex justify-between">
          <div className="w-full text-center">
            <h2
              className="mb-10 text-lg font-bold leading-snug text-[#283262] sm:text-2xl md:text-4xl"
              data-aos="fade-up"
            >
              Professional Computer Service
            </h2>
            <div className="mb-10 text-center" data-aos="fade-up">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? (
                <SignInButton label="Register Now" className="btn" />
              ) : (
                <a href="#" rel="nofollow" className="btn btn-disabled">
                  Already Registered
                </a>
              )}
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="1600">
              <div className="absolute z-10 w-[80%] rounded-full blur-[72px] shadow-md shadow-black/10 left-[10%] top-[10%] h-[100%] bg-gradient-to-tr from-[#B721FF] to-[#21D4FD]" />
              <img className="relative z-20 mx-auto rounded-full img-fluid" src={HeroSvg} alt="Hero Company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
