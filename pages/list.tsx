import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import VirtualList from '../components/VirtualList';
import { GetStaticProps } from 'next';
import companiesData from '../companies.json';
import { useRouter } from 'next/router';

const ListPage: React.FC = () => {
  const { data: session } = useSession();
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
        {session && (
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
      </div>
      <div>
        <h1>Top 10 IT Companies in the world today.</h1>
        <VirtualList items={companiesData} />
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

        h1 {
          margin-bottom: 1rem;
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
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default ListPage;
