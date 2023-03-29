import { createContext, ReactNode, useContext, useReducer } from 'react';
import { User, signOut, getAuth } from 'firebase/auth';

type AuthActions = { type: 'SIGN_IN'; payload: { user: User } } | { type: 'SIGN_OUT' };

type AuthState = {
  state: 'SIGNED_IN' | 'SIGNED_OUT' | 'UNKNOWN';
  currentUser?: User;
};

const AuthReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        state: 'SIGNED_IN',
        currentUser: action.payload.user,
      };
    case 'SIGN_OUT':
      return {
        state: 'SIGNED_OUT',
      };
  }
};

type AuthContextProps = {
  state: AuthState;
  dispatch: (value: AuthActions) => void;
};

export const AuthContext = createContext<AuthContextProps>({ state: { state: 'UNKNOWN' }, dispatch: (val) => {} });

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AuthReducer, { state: 'UNKNOWN' });

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

const useAuthState = () => {
  const { state } = useContext(AuthContext);
  return {
    state,
  };
};

const useSignIn = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signIn: (user: User) => {
      dispatch({ type: 'SIGN_IN', payload: { user } });
    },
  };
};

const useSignOut = () => {
  const { dispatch } = useContext(AuthContext);
  return {
    signOut: async () => {
      const auth = getAuth();
      await signOut(auth);

      dispatch({ type: 'SIGN_OUT' });
    },
  };
};

export { useAuthState, useSignIn, useSignOut, AuthProvider };
