import * as AuthContext from "../common/context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext.AuthProvider>
      <Component {...pageProps} />
    </AuthContext.AuthProvider>
  );
}

export default MyApp;
