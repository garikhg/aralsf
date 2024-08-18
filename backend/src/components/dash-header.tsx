import React from 'react';

const DashHeader = () => {
  return (
    <header
      className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-14 sm:border-0 sm:bg-transparent sm:px-6">
      <h1>Dashboard</h1>
    </header>
  );
};

export default DashHeader;
