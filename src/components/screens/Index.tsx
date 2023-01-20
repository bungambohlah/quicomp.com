import { Dialog } from '@headlessui/react';
import { useRef } from 'react';
import { Head } from '~/components/shared/Head';

function Index() {
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="TOP PAGE" />
      <div className="min-h-screen hero">
        <div className="text-center hero-content">
          <div>
            <h1 className="text-3xl font-bold">
              <a className="link link-primary" target="_blank" href="https://vitejs.dev/" rel="noreferrer noopener">
                Vite
              </a>{' '}
              +{' '}
              <a className="link link-primary" target="_blank" href="https://reactjs.org/" rel="noreferrer noopener">
                React
              </a>{' '}
              +{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://www.typescriptlang.org/"
                rel="noreferrer noopener"
              >
                TypeScript
              </a>{' '}
              +{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://tailwindcss.com/"
                rel="noreferrer noopener"
              >
                TailwindCSS
              </a>{' '}
              Starter
            </h1>
            <p className="mt-4 text-lg">
              For fast <b>prototyping</b>. Already set up{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/firebase/firebase-js-sdk"
                rel="noreferrer noopener"
              >
                Firebase(v9)
              </a>
              ,{' '}
              <a className="link link-primary" target="_blank" href="https://daisyui.com/" rel="noreferrer noopener">
                daisyUI
              </a>
              ,{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/eslint/eslint"
                rel="noreferrer noopener"
              >
                ESLint
              </a>
              ,{' '}
              <a
                className="link link-primary"
                target="_blank"
                href="https://github.com/prettier/prettier"
                rel="noreferrer noopener"
              >
                Prettier
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
