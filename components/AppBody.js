import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";

const AppBody = () => {
  const router = useRouter();
  const term = useRef();

  const search = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: {
        term: term.current.value || "google",
      },
    });
  };

  return (
    <form className="flex flex-col items-center" onSubmit={search}>
      <Image src="/images/GoogleLogo.png" width={300} height={100} />

      <div className="input-style">
        <SearchIcon className="h-5 ml-3 mr-3 text-gray-500" />
        <input
          type="text"
          ref={term}
          placeholder="Search Google"
          className="focus:outline-none flex-grow"
        />
        <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
      </div>

      <div className="mt-7 space-x-8">
        <button className="button">Google Search</button>
        <button className="button">I'm Feeling Lucky</button>
      </div>
    </form>
  );
};

export default AppBody;
