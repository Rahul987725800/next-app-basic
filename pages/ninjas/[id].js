import React from 'react';
export const getStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users/' + id
  );
  const data = await response.json();
  return {
    props: {
      user: data,
    },
  };
};
function Details({ user }) {
  return (
    <div>
      <h1>User Details Page</h1>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.website}</p>
    </div>
  );
}

export default Details;
