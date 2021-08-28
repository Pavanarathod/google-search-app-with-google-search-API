import Image from "next/image";
import {
  CogIcon,
  MicrophoneIcon,
  SearchIcon,
  XIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import OptionHeader from "./OptionHeader";
import { useRouter } from "next/router";

const HeaderSearch = ({ defaultVaue }) => {
  const [input, setInput] = useState(defaultVaue);
  const router = useRouter();
  const [showDetails, setShowDetails] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowDetails(true);
    } else {
      setShowDetails(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const search = (e) => {
    e.preventDefault();

    router.push({
      pathname: "/search",
      query: {
        term: input,
      },
    });
  };

  return (
    <div
      className={`bg-white sticky top-0 ${
        !showDetails ? "p-5" : "p-3 shadow-sm"
      } border-b border-gray-300`}
    >
      <div className=" sm:flex sm:items-center sm:justify-between">
        <div className="sm:flex sm:items-center sm:min-w-[60%]">
          <div
            className="flex justify-center sm:justify-start"
            onClick={() => router.push("/")}
          >
            <Image
              src="/images/GoogleLogo.png"
              width={90}
              height={40}
              className="cursor-pointer"
            />
          </div>
          <form className="mt-5 sm:mt-0 w-full sm:ml-6" onSubmit={search}>
            <div className="flex items-center border border-gray-100 shadow-md hover:shadow-lg focus-within:shadow-lg rounded-full py-3 p-2">
              <input
                type="text"
                placeholder="Search"
                className="focus:outline-none w-full px-2 placeholder-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <div className="flex items-center space-x-2">
                {input && (
                  <XIcon
                    className="h-5 text-blue-600 mr-2 cursor-pointer"
                    onClick={() => setInput("")}
                  />
                )}
                <MicrophoneIcon className="h-5 text-blue-500" />
                <SearchIcon className="h-5 text-blue-500" />
              </div>
            </div>
          </form>
        </div>
        <div className="hidden sm:inline-flex space-x-3 items-center">
          <CogIcon className="h-9 text-gray-900 hover:bg-gray-200 hover:rounded-full cursor-pointer px-2 py-1" />
          <ViewGridIcon className="h-7 text-gray-900" />
          <img
            src="/images/me.png
        "
            alt=""
            className="h-10 rounded-full hover:animate-pulse cursor-pointer"
          />
        </div>
      </div>

      {!showDetails && <OptionHeader />}
    </div>
  );
};

export default HeaderSearch;
