import { UserButton } from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'
import { LayoutGrid, PiggyBank, ReceiptText } from 'lucide-react';

function DashboardHeader() {
  return (
    <div className='p-5 shadow-lg border-b flex justify-between items-center sticky top-0 z-10'
      style={{ background: 'linear-gradient(90deg, #F7F7F7, #D2DFFF)' }}>
      {/* Left Section: Logo and Name */}
      {/* Logo */}
      <div className="flex items-center mr-4">
        <img src="/extras/spend.png" alt="Logo" className="h-12 mr-2" />
        <span className="text-3xl font-bold bg-gradient-to-r from-black to-blue-500 bg-clip-text text-transparent md:block hidden">Spendly</span>
      </div>
      <div className="flex items-center">
        {/* Menu Items */}
        <nav className="flex items-center justify-center">
          <Link legacyBehavior href="/dashboard">
            <a className="p-3 flex items-center text-primary bg-D2DFFF hover:font-bold">
              <LayoutGrid size={24} />
              <span className="ml-3">Dashboard</span>
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard/budgets">
            <a className="p-3 flex items-center hover:text-primary hover:font-bold hover:bg-hover-bg hover:rounded-lg ml-3">
              <PiggyBank size={24} />
              <span className="ml-3">Budget</span>
            </a>
          </Link>
          <Link legacyBehavior href="/dashboard/expenses">
            <a className="p-3 flex items-center hover:text-primary hover:font-bold hover:bg-hover-bg hover:rounded-lg ml-3">
              <ReceiptText size={24} />
              <span className="ml-3">Expenses</span>
            </a>
          </Link>
        </nav>
      </div>

      {/* Right Section: User Button */}
      <div>
        <UserButton afterSignOutUrl='/' className="rounded-full overflow-hidden">
          {(props) => (
            <div className="group relative">
              <span className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10">{props.children}</span>
            </div>
          )}
        </UserButton>
      </div>
    </div>
  )
}

export default DashboardHeader;
