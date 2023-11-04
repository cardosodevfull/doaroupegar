import React, { useEffect, useState } from 'react';
import router from 'next/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { app } from './firebaseConfig';
import Spinner from '../components/Spinner';

const auth = firebase.auth();

const withAuth = Component => props => {
    const [authloading,setAuthloading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(auth => {
          if (!auth) {
            setAuthloading(false);
            router.push('/signin');
          }
          else{
            setAuthloading(false);            
          }
        });
      }, []);
    

    return authloading ? <Spinner /> :(
        <div>
          <Component {...props} />
        </div>
      )
}

export default withAuth;