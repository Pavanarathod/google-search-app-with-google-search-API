const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="p-5 sm:p-3">
        <div className="border-b sm:p-2 text-gray-600 border-gray-300">
          <p>India</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-7 mt-5 sm:mt-0 sm:px-3">
          <div className="flex justify-center text-sm space-x-6 text-gray-600 cursor-pointer">
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>Search</p>
          </div>
          <div className="flex justify-center items-center text-sm text-gray-600 space-x-6 cursor-pointer">
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
