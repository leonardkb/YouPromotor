import { NavLink } from "react-router-dom";







function Navbar() {
   
    
    return (
      <div className="sticky top-0 z-[1000] bg-blue-700 text-white">
      <div  className="w-[100vw] flex justify-between items-center px-2 py-2 font-semibold">
        <div>
          <div className="px-4 py-2 hidden sm:flex">
              <NavLink to={"/"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> YouPromoter </NavLink>
          </div>
        </div>
        <div className="flex ">
          <div className="px-4 py-2 cursor-pointer">
            <NavLink to={"/home"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> Home </NavLink>
              
          </div>
          <div className="px-4 py-2">
              <NavLink to={"/price"} className="text-2xl hover:text-[#fd9b40] transition duration-300 cursor-pointer"> Price </NavLink>
          </div>
        </div>
      </div>
      {/* <div className="fixed left-0 w-full z-50" >
          <div className="w-full px-5 h-full flex items-center justify-center">
              
                  <div key="menu" className="xl:hidden border-[1px] border-[#290c06] w-full p-5 space-y-4 rounded-xl text-2xl flex-col items-center justify-center bg-[#1A392D] text-center z-30">
                      <div  className="border-[1px] border-[#290c06] py-2 rounded-xl">
                          <NavLink to={"/"} onClick={ScrollToTop}>Home</NavLink>
                      </div>
                      <div className="border-[1px] border-[#290c06] py-2 rounded-xl">
                          <NavLink to={"/shop"} onClick={ScrollToTop}>Products</NavLink>
                      </div>
                      <div  className="border-[1px] border-[#290c06] py-2 rounded-xl">
                          <NavLink to={"/about"} onClick={ScrollToTop}>About</NavLink>
                      </div>
                      <div  className="border-[1px] border-[#290c06] py-2 rounded-xl">
                          <NavLink to={"/contact"} onClick={ScrollToTop}>Contact</NavLink>
                      </div>
                  </div>
            
          </div>
      </div> */}
  </div>
    );
}

export default Navbar;