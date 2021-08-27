import Image from "next/image";
import { ViewGridIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="flex justify-between p-5 text-base text-gray-700 items-center">
      <div className="flex space-x-4">
        <p className="fake__link">About</p>
        <p className="fake__link">Store</p>
      </div>
      <div className="flex space-x-4 items-center">
        <p className="fake__link">Gmail</p>
        <p className="fake__link">Images</p>
        <ViewGridIcon className="h-7" />
        <img
          src="/images/me.png
        "
          alt=""
          className="h-10 rounded-full hover:animate-pulse cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
