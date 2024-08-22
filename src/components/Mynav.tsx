import { Link } from "react-router-dom";




const Mynav = () => {
  
  return (
    <nav className="w-fit absolute flex bg-[#1c1c1c] z-50 bottom-4 border-r-[#252525] rounded-md left-1/2 transform -translate-x-1/2">
      
      <div className="nav-1 whitespace-nowrap py-2  gap-2 ">
        <div className="flex">
          <div className={`navlinks ml-2 active`}>
            <div className="flex-col flex md:flex-row md:gap-2 items-center ">
              <p>New Podcast</p>
            </div>
          </div>
          <div className={`navlinks ml-2 npg`}>
            <div className="flex-col flex md:flex-row md:gap-2 items-center ">
              <p>My podcasts</p>
            </div>
          </div>
        </div>
      </div>
      
      
    </nav>
  );
};

export default Mynav;
