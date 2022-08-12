import * as AuthContext from "../common/context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContext.AuthProvider>
      <div style={{ fontFamily: "Jaldi" }}>
        <Component {...pageProps} />
      </div>
    </AuthContext.AuthProvider>
  );
}

export default MyApp;
