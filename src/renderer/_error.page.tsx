function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <>
        <div className="min-h-screen">
          <div className="text-3xl font-bold text-center">
            <div>
              <h1>The page is not found.</h1>
              <div className="mt-4">
                <a href="/" className="link-primary">
                  Go back to Home Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>500 Internal Error</h1>
        <p>Something went wrong.</p>
      </>
    );
  }
}

export { Page };
