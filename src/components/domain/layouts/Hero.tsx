import { useAuthState } from '~/components/contexts/UserContext';
import HeroSvg from '../../../hero.svg';
import { SignInButton } from '../auth/SignInButton';
function Hero() {
  const { state } = useAuthState();

  return (
    <section id="home" className="pt-48 pb-10 bg-blue-100">
      <div className="container-section">
        <div className="flex justify-between">
          <div className="w-full text-center">
            <h2
              className="mb-10 text-lg font-bold leading-snug text-gray-700 sm:text-2xl md:text-4xl"
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
              <img className="mx-auto img-fluid" src={HeroSvg} alt="Hero Company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
