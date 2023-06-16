import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

const About: React.FC = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };  

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
        <button className="signout-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <div className="about-content">
        <h1>About Page</h1>
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
          position: fixed;
          top: 0;
          width: 100%;
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

        .signout-button {
          background-color: #ff0000;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .about-content {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
      `}</style>
    </>
  );
};

export default About;
