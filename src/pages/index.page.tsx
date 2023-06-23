import { Contact } from '~/components/domain/layouts/Contact';
import { Feature } from '~/components/domain/layouts/Feature';
import { Hero } from '~/components/domain/layouts/Hero';
import { Service } from '~/components/domain/layouts/Service';
import useScript from '~/lib/hooks/useScript';

function Page() {
  useScript('/js/aos.js');
  // useScript('/js/tiny-slider.js');
  useScript('/js/index.js');

  return (
    <>
      <div className="min-h-screen">
        <Hero />
        <Service />
        <Feature />
        <Contact />
      </div>
    </>
  );
}

export { Page };
