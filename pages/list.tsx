import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import VirtualList from '../components/VirtualList';
import { GetStaticProps } from 'next';
import companiesData from '../companies.json';
import { useRouter } from 'next/router';

interface Company {
  name: string;
  rank: number;
  country: string;
  description: string;
}

const ListPage: React.FC = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/');
  };

  const handleItemClick = (company: Company) => {
    setSelectedCompany(company);
  };

  return (
    <div>
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
      <div className="container">
        <div className="content">
          <h1>Top 10 IT Companies in the world today.</h1>
          <h4>Select Company to know more about them:</h4>
          <div className="list-container">
            <VirtualList items={companiesData} onItemClick={handleItemClick} />
          </div>
          {selectedCompany && (
            <div className="description">
              <h2>{selectedCompany.name}</h2>
              <p>Rank: {selectedCompany.rank}</p>
              <p>Country: {selectedCompany.country}</p>
              <p>Description: {selectedCompany.description}</p>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding-top: 4.5rem;
        }

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

        .list-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          height: 400px;
          width: 300px;
          overflow: auto;
          cursor: pointer;
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

        h4 {
          margin-bottom: 1rem;
          text-align: center;
        }

        .signout-button {
          background-color: #ff0000;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .description {
          margin: 20px auto;
          max-height: 200px;
          width: 300px;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

export default ListPage;
