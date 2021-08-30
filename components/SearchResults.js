const SearchResults = ({ results }) => {
  return (
    <div className="space-y-4 mt-5 ">
      {results?.items.map((item) => (
        <div key={item.link} className="group truncate">
          <div>
            <a href={item.link} className="text-gray-600 truncate">
              {item.formattedUrl}
            </a>
          </div>
          <a
            href={item.link}
            className="text-blue-800 font-medium text-xl truncate group-hover:underline"
          >
            {item.title}
          </a>
          <p className="line-clamp-3">{item.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
