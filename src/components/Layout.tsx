import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout() {
  const location = useLocation();

  // Scroll to top on route change (unless there's a hash)
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
