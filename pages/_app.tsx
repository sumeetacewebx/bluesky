import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import AuthContextProvider from "../src/contexts/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../src/components/ProtectedRoutes";



const unprotectedRoutes = ['/login', '/register','/auth/forgot-password'];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath } = router;  

  const renderApp = () => {
    return (
    <AuthContextProvider>
      <ToastContainer />
        <Component {...pageProps} />
     </AuthContextProvider>
     )
  };

  if (
    unprotectedRoutes.some((unprotectedRoute) =>
      asPath.startsWith(unprotectedRoute)
    )
  ) {
    return renderApp();
  }  // Protected route only needs AuthContext for now.


    return (
      <>
        <AuthContextProvider>
          <ProtectedRoute>{renderApp()}</ProtectedRoute>
        </AuthContextProvider>
      </>
    );
  

}
