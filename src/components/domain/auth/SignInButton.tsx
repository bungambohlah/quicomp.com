import { ReactNode } from 'react';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import { useAuth } from '~/lib/firebase';

export type SignInButtonProps = {
  className?: string;
  label?: string;
  children?: ReactNode;
};

export const SignInButton = ({ className, label, children }: SignInButtonProps) => {
  const handleClick = () => {
    const provider = new GoogleAuthProvider();
    const auth = useAuth();
    // @see https://firebase.google.com/docs/auth/web/google-signin
    auth.languageCode = 'en';

    signInWithRedirect(auth, provider);
  };
  const btnClass = className || 'normal-case w-max btn btn-primary';

  return (
    <button onClick={handleClick} type="button" className={btnClass}>
      {label || 'Sign In'}
      {children || null}
    </button>
  );
};
