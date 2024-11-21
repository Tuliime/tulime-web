export const SideBar = () => {
  return (
    <ul className="flex flex-col bg-white px-4 py-2 gap-3 rounded-lg transition-all shadow-lg h-fit">
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Agro products
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Farm Inputs
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Herbal medicine
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Veterinary Doctors
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Institutions
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Jobs
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        Chat
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition text-gray-700">
        About
      </li>
    </ul>
  );
};
