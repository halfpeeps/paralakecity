import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    window.location.href = 'http://www.paralakev6.com';
  }, []);

  return <p>Redirecting...</p>;
}