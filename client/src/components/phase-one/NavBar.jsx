import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../../assets/mountain.png';
 
function NavList({ isAuthorized, isUnAuthorized }) {
  return (
    <ul className="my-2 flex  flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">
            Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center  justify-center hover:text-blue-500 transition-colors">
            Why TripG
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">
            About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">
            Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="paragraph"
        color="blue-gray"
        className="p-1 font-medium"
      >
        {isAuthorized && (
            <Button variant="outlined" color="primary">
              Dashboard
            </Button>
        )}
        {isUnAuthorized && (
            <>
              <Button>Sign In</Button>
              <Button variant="gradient" color="primary">
                Sign Up
              </Button>
            </>
        )}
      </Typography>
    </ul>
  );
}

const NavBar = () => {
    const [openNav, setOpenNav] = React.useState(false);
 
    const handleWindowResize = () =>
      window.innerWidth >= 960 && setOpenNav(false);
   
    React.useEffect(() => {
      window.addEventListener("resize", handleWindowResize);
   
      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }, []);
   
    return (
      <div className="mx-auto px-6 py-3">
        <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex items-center">
                <img src={logo} alt="!Error" className="w-6 h-6" />
                <Typography
                    as="a"
                    href="#"
                    variant="h3"
                    className="ml-4 cursor-pointer py-1.5"
                >
                    Trip Genius
                </Typography>
            </div>


            <div className="hidden lg:block">
                <NavList />
            </div>
    
            <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
            >
                {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                )}
            </IconButton>
    
            </div>
    
            <Collapse open={openNav}>
            <NavList />
            </Collapse>
        </div>
    );
  }
  
export default NavBar
  