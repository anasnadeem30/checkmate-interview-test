import Head from 'next/head'
import GoogleButton from 'react-google-button'
import {getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult} from "firebase/auth";
import {useRouter} from "next/router";
import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';

// Task 0: Initialize Firebase
// Replace the following with your app's Firebase project configuration
// https://firebase.google.com/docs/web/setup
const firebaseConfig = {
  // Enter your own firebase config here
  apiKey: "AIzaSyDAnJMMUNae8ZiVnlPMxyrrNZDa8zfVPfg",
  authDomain: "checkmate-jokes.firebaseapp.com",
  projectId: "checkmate-jokes",
  storageBucket: "checkmate-jokes.appspot.com",
  messagingSenderId: "906256796436",
  appId: "1:906256796436:web:f5340edb67163754e45001",
  measurementId: "G-58QCV9ZC6L"
};

const app = initializeApp(firebaseConfig);

// GoogleAuthProvider instance
const provider = new GoogleAuthProvider();
// Firebase Auth instance
const auth = getAuth(app);

export default function Home() {
  //Next.js router
  const router = useRouter();

  // Task 1: Implement Google Sign in with Firebase
  // https://firebase.google.com/docs/auth/web/google-signin
  const signIn = () => {
    signInWithRedirect(auth, provider);
  };

  useEffect(() => {
    const handleRedirectResult = () => {
      getRedirectResult(auth)
        .then((result) => {
          if (result.user) {
            console.log(result);
            router.push('/signed-in');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };

    handleRedirectResult();
  }, [router, auth]);
  

  return (
    <>
      <Head>
        <title>Sign in to see the public holidays in HK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        <main style={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column'}}>
          <h1 className="title">
            Welcome to <a href="https://checkmatehk.io">CheckMate</a>
          </h1>
          <h3>Sign in to see a random programming joke 😳</h3>

          {/* Button for user to sign in with Google */}
          {/* Task 1: Implement Google Sign in with Firebase */}
          <GoogleButton
            label={'Sign in with Google'}
            type="light"
            style={{ width: '50%', display:"flex", justifyContent: 'center', alignItems: 'center', fontFamily: 'Roboto, sans-serif', color:'#444' }}
            onClick={signIn}
          />
        </main>
      </div>
    </>
  )
}