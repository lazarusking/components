"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { X } from "react-feather";
import profilePic from "/public/next.svg";

// Profile Dropdown
// const ProfileDropDown = (props) => {
//   const [state, setState] = useState(false);
//   const profileRef = useRef(null);

//   const navigation = [
//     { title: "Dashboard", path: "" },
//     { title: "Settings", path: "" },
//     { title: "Log out", path: "" },
//   ];

//   useEffect(() => {
//     const handleDropDown = (e) => {
//       if (!profileRef.current.contains(e.target)) setState(false);
//     };
//     document.addEventListener("click", handleDropDown);
//   }, []);

//   return (
//     <div className={`relative ${props.class}`}>
//       <div className="flex items-center space-x-4">
//         <button
//           ref={profileRef}
//           className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
//           onClick={() => setState(!state)}
//         >
//           <img
//             src="https://randomuser.me/api/portraits/men/46.jpg"
//             className="w-full h-full rounded-full"
//           />
//         </button>
//         <div className="lg:hidden">
//           <span className="block">Micheal John</span>
//           <span className="block text-sm text-gray-500">john@gmail.com</span>
//         </div>
//       </div>
//       <ul
//         className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
//           state ? "" : "lg:hidden"
//         }`}
//       >
//         {navigation.map((item, idx) => (
//           <li key={idx}>
//             <a
//               className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5"
//               href={item.path}
//             >
//               {item.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [{ title: "Components", path: "/comp" }];
  // const paths = [
  //   { name: "Dashboard", href: "" },
  //   { name: "Settings", href: "" },
  //   { name: "Log out", href: "" },
  // ];
  return (
    <nav className="bg-white border-b">
      <div className="flex items-center gap-4 py-3 px-4 max-w-screen-xl mx-auto md:px-6">
        <div className="flex-none lg:flex-initial">
          <Link
            href="/"
            className="flex flex-row items-center gap-x-1 font-medium text-sm"
          >
            {/* <img
              src="https://www.floatui.com/logo.svg"
              width={120}
              height={50}
              alt="Float UI logo"
            /> */}
            {/* <Grid className="h-6 w-6 fill-current ellow-400 stroke-slate-600" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
              data-id={4}
            >
              <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
              <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
              <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
              <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
            </svg>

            <span className="hidden md:block">Components</span>
            {/* <span>🔥</span> */}
          </Link>
        </div>
        {/* <DropdownProfile
          username={"Accel"}
          toggle={!true}
          show={true}
          logout={() => {}}
          paths={paths}
        /> */}
        <div
          className={`bg-white absolute z-20 w-full top-16 left-0 lg:static lg:block px-2 ${
            menuState ? "" : "hidden"
          }`}
        >
          <ul className="space-y-2 lg:flex lg:space-x-6 lg:space-y-0 lg:border-none lg:shadow-none lg:p-0 border p-4 border-gray-200 shadow-lg rounded-lg">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-sm font-medium hover:text-gray-900">
                <Link href={item.path}> {item.title}</Link>
              </li>
            ))}
          </ul>
          {/* <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" /> */}
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md">
              <input
                aria-label="search"
                className="px-3 py-2 w-full placeholder-gray-500 border-gray-200 text-sm text-gray-500 sm:w-auto focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
                type="text"
                placeholder="Search components..."
              />
            </form>
            {/* <ProfileDropDown class="hidden lg:block" /> */}
            <a
              href="https://github.com/lazarusking/components"
              rel="noreferrer"
              target="_blank"
              className="rounded-full m-1 bg-white"
            >
              <span className="sr-only"> GitHub </span>
              {/* <GitHub className="size-5 fill-white stroke-none" /> */}
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  fillRule="evenodd"
                />
              </svg>
            </a>
            <button
              type="button"
              aria-label="Menu Icon"
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <X aria-label="CLose Icon" className="h-6 w-6" />
              ) : (
                <svg
                  aria-label="Open menu icon"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
interface DropdownType {
  username: string;
  show: boolean;
  toggle: any;
  logout: any;
  paths: { name: string; href: string }[];
}
// const paths = [
//   { name: "Profile", href: "/profile" },
//   { name: "Jobs", href: "/jobs/" },
//   // { name: "Services", href: "/services" },
//   { name: "Saved Jobs", href: "/jobs/saved" },
// ];

type Links = {
  title: string;
  href: string;
  id: number;
};

const DropdownLinks = ({ title, href, id }: Links) => {
  return (
    <a
      href={href}
      className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
      role="menuitem"
      tabIndex={-1}
      id={`menu-item-${id}`}
    >
      {title}
    </a>
  );
};

// eslint-disable-next-line no-unused-vars
function DropdownProfile({
  username,
  show,
  toggle,
  logout,
  paths,
}: DropdownType) {
  const modalRef = useRef(null);
  const handleShow = useCallback(() => {
    toggle((show: any) => !show);
  }, [toggle]);

  //   useOnClickOutside(modalRef, () => toggle(false));

  return (
    <div className="relative inline-block text-left" ref={modalRef}>
      <button
        id="dropdownAvatarNameButton"
        data-dropdown-toggle="dropdownAvatarName"
        className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
        type="button"
        onClick={handleShow}
      >
        <span className="sr-only">Open user menu</span>
        <Image
          className="w-8 h-8 mr-2 rounded-full"
          src={profilePic}
          alt="user photo"
        />
        {username}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {show && (
        <div
          className={`absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {paths.map((item, index) => (
              <DropdownLinks
                key={index}
                href={item.href}
                title={item.name}
                id={index}
              />
            ))}

            <div>
              <button
                type="submit"
                className="text-gray-700 block w-full px-4 py-2 border-t text-left text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex={-1}
                id="last-menu-item"
                onClick={logout}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
