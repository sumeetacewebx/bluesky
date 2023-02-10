
import { useRouter } from 'next/router';

import * as React from "react";
import { useContext, useEffect, useState } from 'react';
export default function Home() {
  const router = useRouter();  
  useEffect(() => {
    router.push('/dashboard');
  }, [router]); 

}  
