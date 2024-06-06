"use client";

import { useEffect, useState } from 'react';

const OfflineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 9999, display: !isOnline ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', textAlign: 'center' }}>
        أنت غير متصل بالإنترنت.
      </div>

    </div>
  );
};

export default OfflineStatus;
