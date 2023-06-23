import { useEffect } from 'react';

const useScript = (url: string, async?: boolean) => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = url;
    if (async) script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
