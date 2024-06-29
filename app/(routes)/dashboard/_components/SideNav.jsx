import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { LayoutGrid, PiggyBank, ReceiptText } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SideNav = ({ isOpen, toggleSidebar }) => {
    const path = usePathname();

    const menuList = [
        {
            id: 1,
            name: 'Dashboard',
            icon: LayoutGrid,
            path: '/dashboard'
        },
        {
            id: 2,
            name: 'Budgets',
            icon: PiggyBank,
            path: '/dashboard/budgets'
        },
        {
            id: 3,
            name: 'Expenses',
            icon: ReceiptText,
            path: '/dashboard/expenses'
        }
    ];

    // Close sidebar when a menu item is clicked (on mobile)
    const handleMenuItemClick = () => {
        if (isOpen) {
            toggleSidebar();
        }
    };

    return (
        <nav className={`${isOpen ? 'block' : 'hidden lg:block'
            } lg:h-full lg:relative lg:border-l lg:border-gray-200`}>
            <div className='p-5'>
                {menuList.map((menu, index) => (
                    <Link
                        href={menu.path}
                        key={index}
                        passHref
                    >
                        <h2
                            onClick={handleMenuItemClick}
                            className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-3 lg:p-5 cursor-pointer rounded-md 
                                hover:text-primary hover:bg-hover-bg
                                ${path === menu.path &&
                                'text-primary bg-D2DFFF'
                                }
                            `}
                        >
                            <menu.icon />
                            {isOpen ? <span className='ml-2'>{menu.name}</span> : null}
                        </h2>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default SideNav;
