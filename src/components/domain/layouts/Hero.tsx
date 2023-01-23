import { useAuthState } from '~/components/contexts/UserContext';
import HeroSvg from '../../../hero.svg';
import { SignInButton } from '../auth/SignInButton';
function Hero() {
  const { state } = useAuthState();

  return (
    <section id="hero-area" className="pt-48 pb-10 bg-blue-100">
      <div className="container">
        <div className="flex justify-between">
          <div className="w-full text-center">
            <h2 className="mb-10 text-4xl font-bold leading-snug text-gray-700 wow fadeInUp" data-wow-delay="1s">
              Quicomp <br className="hidden lg:block" />
              Professional Computer Service Provider
            </h2>
            <div className="mb-10 text-center wow fadeInUp" data-wow-delay="1.2s">
              {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? (
                <SignInButton label="Register Now" className="btn" />
              ) : (
                <a href="#" rel="nofollow" className="btn btn-disabled">
                  Already Registered
                </a>
              )}
            </div>
            <div className="text-center wow fadeInUp" data-wow-delay="1.6s">
              <img className="mx-auto img-fluid" src={HeroSvg} alt="Hero Company" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };
