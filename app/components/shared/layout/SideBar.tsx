export const SideBar = () => {
  return (
    <ul className="flex flex-col bg-white px-4 py-2 gap-3 rounded-lg transition-all shadow-lg h-fit">
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Agro products
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Farm Inputs
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Herbal medicine
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Veterinary Doctors
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Institutions
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Jobs
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        Chat
      </li>
      <li className="cursor-pointer text-sm hover:text-amber-300 transition">
        About
      </li>
    </ul>
  );
};
