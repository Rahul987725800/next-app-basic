import Link from 'next/link';
import React from 'react';

function Ninjas({ users }) {
  return (
    <div>
      <h1>Ninjas</h1>
      {users.map((user, i) => {
        return (
          <div key={user.id}>
            <Link href={`/ninjas/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};
export default Ninjas;
