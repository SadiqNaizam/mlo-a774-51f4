import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  AreaChart,
  BarChart,
  Users,
  Settings,
  BarChartBig,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <NavLink
          to={to}
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8',
            isActive && 'bg-accent text-accent-foreground'
          )}
        >
          <Icon className="h-5 w-5" />
          <span className="sr-only">{label}</span>
        </NavLink>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};

const LeftSidebar: React.FC = () => {
  console.log('LeftSidebar loaded');

  const navItems = [
    { to: '/', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/sales-analytics', label: 'Sales Analytics', icon: AreaChart },
    { to: '/product-performance', label: 'Product Performance', icon: BarChart },
    { to: '/customer-insights', label: 'Customer Insights', icon: Users },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavLink
          to="/"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <BarChartBig className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">eCommerce Insights</span>
        </NavLink>
        {navItems.map((item) => (
          <NavItem key={item.to} {...item} />
        ))}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <NavItem to="/settings" label="Settings" icon={Settings} />
      </nav>
    </aside>
  );
};

export default LeftSidebar;