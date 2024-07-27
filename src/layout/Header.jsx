import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuItem = [
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Admin",
      url: "/admin",
    },
    {
      name: "Çıkış",
      url: "/logout",
    },
  ];

  return (
    <div className="bg-gray-100 h-16 px-5 flex items-center justify-between">
      <div className=" text-4xl">logo</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <input
            type="text   "
            className="p-2 outline-none"
            placeholder="Arama Yap"
          />
          <div className="p-2 ml-1 bg-white cursor-pointer">Ara</div>
        </div>
        <div className="relative">
          <img
            onClick={() => setOpenMenu(!openMenu)}
            className="w-8 h-8 rounded-full"
            src="https://cdn-icons-png.flaticon.com/256/1077/1077114.png"
          />
          {openMenu && (
            <div className=" absolute right-0 mt-3 w-[200] bg-white shadow-lg shadow-gray-300 ">
              {menuItem.map((item, i) => (
                <div className=" px-2 py-1 hover:bg-gray-100 " key={i}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className=" relative">
          <SlBasket size={30} />
          <div
            className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex
         items-center justify-center"
          >
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
