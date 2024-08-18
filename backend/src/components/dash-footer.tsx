import React from 'react';
import { dashSettings } from '@/config/dashboard';

const DashFooter = () => {
  return (
    <footer
      className="mt-auto flex h-14 justify-between items-center gap-4 border-b bg-background px-4 py-5 sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <p className="text-sm text-gray-500">{dashSettings.copyright}</p>
      <p className="text-sm text-gray-500">v{dashSettings.version}</p>
    </footer>
  );
};

export default DashFooter;
