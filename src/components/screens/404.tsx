import { Head } from '~/components/shared/Head';

function Page404() {
  return (
    <>
      <Head title="The page is not found" />
      <div className="min-h-screen bg-[#282734]">
        <div className="text-3xl font-bold text-center">
          <div>
            <h1>The page is not found.</h1>
            <div className="mt-4">
              <a href="/" className="link-primary">
                Top Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
