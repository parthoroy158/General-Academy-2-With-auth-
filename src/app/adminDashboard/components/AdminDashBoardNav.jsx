import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const AdminDashBoardNav = ({ activeVideoId }) => {
  const dashboardMenu = [
    {
      id: 1,
      label: 'Total User',
      path: 'TotalUser',
    },
    {
      id: 2,
      label: 'Total Admin',
      path: 'adminMembers',
    },
    // Add more items here as needed
  ];

  return (
    <nav className="w-full sticky top-0 md:min-h-screen bg-white dark:bg-gray-100 border-b md:border-r border-gray-200 px-6 py-6 rounded shadow-2xl">
      <h2 className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-4 bg-blue-300 p-2 rounded-md">
        Demo Class Topics
      </h2>

      <ul className="space-y-2 text-base text-gray-800">
        {dashboardMenu.map(({ id, label, path }) => {
          const isActive = id === activeVideoId;
          return (
            <li key={id}>
              <Link
                href={`/adminDashboard/${path}`}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 ease-in-out
                  ${isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-md border-l-4 border-blue-800 pl-5'
                    : 'bg-blue-100 text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                  }
                  hover:translate-x-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

AdminDashBoardNav.propTypes = {
  activeVideoId: PropTypes.number.isRequired,
};

export default AdminDashBoardNav;
