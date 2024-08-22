import { Link, useLocation,Location } from "react-router-dom";




const Mynav = () => {
  const location: Location=useLocation()
  console.log(location)
  return (
    <nav className="w-fit absolute flex bg-[#1c1c1c] z-50 bottom-4 border-r-[#252525] rounded-md left-1/2 transform -translate-x-1/2">
      
      <div className="nav-1 whitespace-nowrap py-2  gap-2 ">
        <div className="flex">
          <Link to={"/"} className={`navlinks ml-2  ${location.pathname=="/"?"active":"npg"}`}>
            <div className="flex-col flex md:flex-row md:gap-2 items-center ">
              <p>Home</p>
            </div>
          </Link>
          <Link to={"/record"} className={`navlinks ml-2  ${location.pathname=="/record"?"active":"npg"}`}>
            <div className="flex-col flex md:flex-row md:gap-2 items-center ">
              <p>New Podcast</p>
            </div>
          </Link>
          <Link to={"/allpodcasts"} className={`navlinks ml-2  ${location.pathname=="/allpodcasts"?"active":"npg"}`}>
            <div className="flex-col flex md:flex-row md:gap-2 items-center ">
              <p>My podcasts</p>
            </div>
          </Link>
        </div>
      </div>
      
      
    </nav>
  );
};

export default Mynav;
