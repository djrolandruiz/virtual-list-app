import React from 'react';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

const Home: React.FC = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <>
        <div className="navbar">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/list">List</Link>
            </li>
          </ul>
          <button className="signout-button" onClick={() => signOut()}>
            Sign Out
          </button>
          
        </div>

        <div className="container">
          <h1>Welcome, {session?.user?.name}</h1>
        </div>

        <style jsx>{`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #f0f0f0;
            padding: 10px;
            margin-bottom: 20px;
            height: 60px;
          }
  
          ul {
            list-style-type: none;
          }
  
          li {
            display: inline-block;
            margin-right: 10px;
            text-decoration: none;
            color: black;
          }

          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .signout-button {
            background-color: #ff0000;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  } else {
    return (
      <div className="container">
        <h1>Welcome to My Virtual List App Demo</h1>
        <button className="signin-button" onClick={() => signIn()}>
          Sign in
        </button>

        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .signin-button {
            background-color: #0070f3;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin-top: 1rem;
          }
        `}</style>
      </div>
    );
  }
};

export default Home;
