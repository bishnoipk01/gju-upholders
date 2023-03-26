'use client';
import AsideDash from '@/components/asideDash';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const path = usePathname().split('/').pop();
  return (
    <div className='flex'>
      <AsideDash active={path} />
      {children}
    </div>
  );
}
