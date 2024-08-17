'use client';

import React from 'react';
import Link from 'next/link';
import { Box, LayoutDashboard, NotepadTextDashed, Settings, Users, Image } from 'lucide-react';
import { cn } from '@lib/utils';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <DesktopNav />
      <div className="flex flex-col sm:gap-4 sm:py-4 pl-56">
        <header
          className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1>Dashboard</h1>
        </header>
        <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/60" role="main">
          {children}
        </main>
      </div>
    </div>
  );
}

const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-56 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col gap-1 px-2 sm:py-5">
        <Link
          href="/"
          className={cn(
            'flex h-9 p-2 gap-2 items-center rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent',
            { 'bg-accent text-black': pathname === '/' }
          )}
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>
        <Link
          href="/admin/content"
          className={cn(
            'flex h-9 p-2 gap-2 items-center rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground' +
            ' hover:bg-accent',
            { 'bg-accent text-black': pathname === '/admin/content' }
          )}
        >
          <NotepadTextDashed size={18} />
          <span>Content</span>
        </Link>
        <Link
          href="/admin/products"
          className={cn(
            'flex h-9 p-2 gap-2 items-center rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground' +
            ' hover:bg-accent',
            { 'bg-accent text-black': pathname === '/admin/products' }
          )}
        >
          <Box size={18} />
          <span>Products</span>
        </Link>
        <Link
          href="/admin/asset"
          className={cn(
            'flex h-9 p-2 gap-2 items-center rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground' +
            ' hover:bg-accent',
            { 'bg-accent text-black': pathname === '/admin/asset' }
          )}
        >
          <Image size={18} />
          <span>Asset</span>
        </Link>
        <Link
          href="/admin/users"
          className={cn(
            'flex h-9 p-2 gap-2 items-center rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground' +
            ' hover:bg-accent',
            { 'bg-accent text-black': pathname === '/admin/users' }
          )}
        >
          <Users size={18} />
          <span>Users</span>
        </Link>
      </nav>
      <nav className="mt-auto flex flex-col border-t gap-1 px-2 sm:py-5">
        <Link
          href="/admin/settings"
          className={cn(
            'flex h-9 p-2 gap-2 items-center rounded-lg text-sm text-muted-foreground transition-colors hover:text-foreground' +
            ' hover:bg-accent',
            { 'bg-accent text-black': pathname === '/admin/settings' }
          )}
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};
