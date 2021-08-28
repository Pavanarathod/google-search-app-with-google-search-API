import {
  BookOpenIcon,
  DotsVerticalIcon,
  NewspaperIcon,
  PhotographIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";

const OptionHeader = () => {
  return (
    <div className="mt-5 flex items-center justify-between sm:ml-24 md:ml-24 lg:ml-32 sm:w-[50%] transition transform duration-100 ease-out">
      <div className="flex items-center space-x-4">
        <div className="icon">
          <SearchIcon className="h-5 text-blue-500" />
          <p>All</p>
        </div>
        <div className="icon">
          <NewspaperIcon className="h-5" />
          <p>News</p>
        </div>
        <div className="icon">
          <BookOpenIcon className="h-5" />
          <p>Books</p>
        </div>
        <div className="icon">
          <PhotographIcon className="h-5" />
          <p>Images</p>
        </div>
        <div className="icon">
          <VideoCameraIcon className="h-5" />
          <p>Video</p>
        </div>
      </div>

      <div className="hidden sm:block">
        <p>Tools</p>
      </div>
    </div>
  );
};

export default OptionHeader;
