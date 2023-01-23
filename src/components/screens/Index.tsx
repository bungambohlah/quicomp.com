import { Head } from '~/components/shared/Head';
import { Feature } from '../domain/layouts/Feature';
import { Hero } from '../domain/layouts/Hero';
import { Service } from '../domain/layouts/Service';

function Index() {
  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen">
        <Hero />
        <Service />
        <Feature />
      </div>
    </>
  );
}

export default Index;
