import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
function NotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1);
      // go backwards
      // router.go(1);
      // go forward
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div>
      <h1>Not Found</h1>
      <p>
        Go Back to the{' '}
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
