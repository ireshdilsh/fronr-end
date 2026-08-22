import { cloneElement, useEffect, useState } from "react";
import {
  authApi,
  clearSession,
  getAccessToken,
  getStoredUser,
} from "../../api/api";
import { ConnectedAuthModal } from "../auth/ConnectedAuthModal";
import { Footer } from "../common/Footer";
import { Header } from "./Header";

export function Layout({ children }) {
  const [auth, setAuth] = useState(null);
  const [loggedIn, setLoggedIn] = useState(Boolean(getAccessToken()));
  const [user, setUser] = useState(getStoredUser());
  useEffect(() => {
    if (getAccessToken())
      authApi
        .me()
        .then(setUser)
        .catch(() => {
          clearSession();
          setLoggedIn(false);
        });
  }, []);
  const logout = () => {
    clearSession();
    setUser(null);
    setLoggedIn(false);
  };
  return (
    <>
      <Header loggedIn={loggedIn} setLoggedIn={logout} openAuth={setAuth} />
      <main>{cloneElement(children, { loggedIn, user })}</main>
      <Footer />
      {auth && (
        <ConnectedAuthModal
          mode={auth}
          onClose={() => setAuth(null)}
          onSwitch={setAuth}
          onSuccess={(result) => {
            setUser(result.user);
            setAuth(null);
            setLoggedIn(true);
          }}
        />
      )}
    </>
  );
}
