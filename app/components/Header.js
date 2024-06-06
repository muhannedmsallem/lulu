"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaHome, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { usePathname, useRouter } from 'next/navigation';
import Router from 'next/router';

const Header = () => {
  const currentPath = usePathname();
  const [activePath, setActivePath] = useState(currentPath);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setActivePath(currentPath);

    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  }, [currentPath]);

  const iconStyle = (isActive) => ({
    fontSize: '1.6rem',
    fontWeight: 'bold',
    fill: isActive ? 'currentColor' : 'none',
    stroke: 'currentColor',
    strokeWidth: isActive ? '0' : '43',
  });

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="spinner"></div>
        </div>
      )}
      <header className="bg-gray-100 text-black p-4 fixed bottom-0 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex justify-around w-full">
            <Link href="/cart" passHref prefetch>
              <div
                onClick={() => setActivePath('/cart')}
                className={`flex flex-col items-center justify-center ${activePath === '/cart' ? 'text-gray-700 font-semibold' : 'text-gray-700'}`}
              >
                <FaShoppingCart className="text-4xl" style={iconStyle(activePath === '/cart')} />
                <span className="text-xs mt-1">عربة التسوق</span>
              </div>
            </Link>
            <Link href="/shop" passHref prefetch>
              <div
                onClick={() => setActivePath('/shop')}
                className={`flex flex-col items-center justify-center ${activePath === '/shop' ? 'text-gray-700 font-semibold' : 'text-gray-700'}`}
              >
                <FaShoppingBag className="text-4xl" style={iconStyle(activePath === '/shop')} />
                <span className="text-xs mt-1">تسوق</span>
              </div>
            </Link>
            <Link href="/" passHref prefetch>
              <div
                onClick={() => setActivePath('/')}
                className={`flex flex-col items-center justify-center ${activePath === '/' ? 'text-gray-700 font-semibold' : 'text-gray-700'}`}
              >
                <FaHome className="text-4xl" style={iconStyle(activePath === '/')} />
                <span className="text-xs mt-1">الرئيسية</span>
              </div>
            </Link>
          </nav>
        </div>
      </header>
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #000;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
