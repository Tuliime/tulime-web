import { Link } from "@remix-run/react";

export const SideBar = () => {
  return (
    <ul className="flex flex-col bg-white px-4 py-2 gap-3 rounded-lg transition-all shadow-lg h-fit">
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/agroproducts">Agro products</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/farm-inputs">Farm Inputs</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/herbal-medicine">Herbal medicine</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/veterinary-doctors">Veterinary Doctors</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/institutions">Institutions</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/jobs">Jobs</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/chat">Chat</Link>
      </li>
      <li className="cursor-pointer text-sm hover:text-blue-800 transition text-gray-700">
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
};
