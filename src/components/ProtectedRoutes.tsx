import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import {LoginContext} from '../contexts/AuthContext';
import { LoginContextTye } from "../types/auth";


const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const authContext = useContext(LoginContext) as LoginContextTye;

  const [loading, setLoading] = useState(true);
  const router = useRouter();  
  
  useEffect(() => {
    const checkUser = async () => {
      if (await authContext?.isLogin()) {
        setLoading(false);
      } else router.push('/login');
    };    
    checkUser();
  }, []);  
  if (loading) return <div>Loading...</div>;  return children;
};export default ProtectedRoute;