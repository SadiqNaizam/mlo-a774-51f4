import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background px-6 py-4">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="mb-2 md:mb-0">
          &copy; {currentYear} eCommerce Insights. All rights reserved.
        </p>
        <nav className="flex items-center gap-4">
          <Link to="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <Link to="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;