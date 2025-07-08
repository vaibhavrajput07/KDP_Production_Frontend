import { useState, Fragment } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Services', href: '/services', current: false },
  { name: 'Products', href: '/products', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Support', href: '/support', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ isLoggedIn, onLogout }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-800 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-12">
          <div className="relative flex h-20 items-center justify-between">
            {/* Mobile menu button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                onClick={() => setSidebarOpen(true)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
              >
                <Bars3Icon className="block h-6 w-6" />
              </button>
            </div>

            {/* Logo and Nav */}
            <div className="flex flex-1 items-center justify-center sm:justify-start">
              <img src="https://res.cloudinary.com/dogbphnnx/image/upload/v1751979936/RBKDP_gchrvw.png" alt="KDP Logo" className="h-20 w-auto" />
              <div className="hidden sm:ml-8 sm:block">
                <div className="flex items-center space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-[1rem] text-white'
                          : 'text-gray-300 text-[1rem] hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Profile + Bell */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white">
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" />
              </button>

              {/* User Menu */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <MenuButton className="relative flex rounded-full bg-gray-800 text-sm">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://res.cloudinary.com/dogbphnnx/image/upload/v1751979691/karan2_whvjj6.jpg.jpg"
                      alt="User"
                    />
                  </MenuButton>
                </div>
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                  {isLoggedIn ? (
                    <>
                      <MenuItem>
                        <Link
                          to="/admin/dashboard"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Your Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/admin/add-member"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Create Team Member
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Create Services
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Create Your Work
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <button
                          onClick={onLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </MenuItem>
                    </>
                  ) : (
                    <MenuItem>
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    </MenuItem>
                  )}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar + Overlay */}
      <Transition show={sidebarOpen} as={Fragment}>
        <div className="fixed inset-0 mt-20 z-40 flex sm:hidden">
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0  bg-opacity-30"
              onClick={() => setSidebarOpen(false)}
            />
          </Transition.Child>

          {/* Sidebar Panel */}
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-500 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-500 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative w-64 bg-gray-800 text-white shadow-xl p-4">
              {/* Close Button (X) */}
              <div className="absolute top-4 right-4">
                <button onClick={() => setSidebarOpen(false)} className="text-white hover:text-gray-300">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Sidebar Links */}
              <div className="mt-12 flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  );
}
