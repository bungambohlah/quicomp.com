import { Head } from '~/components/shared/Head';
import { Hero } from '../domain/layouts/Hero';

function Index() {
  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen hero">
        <Hero />
      </div>
    </>
  );
}

export default Index;
