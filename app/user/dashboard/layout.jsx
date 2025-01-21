'use client';
import AsideDash from '@/components/AsideDash';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const path = usePathname().split('/').pop();

  return (
    <div className="flex h-screen w-screen bg-gray-800 text-white mt-16">
      <AsideDash active={path} />
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
}
