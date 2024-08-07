import React from 'react';
import { Navbar, Collapse, Typography, IconButton, Button } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from '../../assets/mountain.png';
import useAuth from '../phase-zero/auth';

function NavList({ isAuthorized, isUnAuthorized, setLoginOpen, setRegisterOpen }) {

  const handleLoginOpen = () => {
    setLoginOpen();
  };
  
  const handleRegisterOpen = () => {
    setRegisterOpen();
  };

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
      <Typography as="li" variant="paragraph" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">Home</a>
      </Typography>
      <Typography as="li" variant="paragraph" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">Why TripG</a>
      </Typography>
      <Typography as="li" variant="paragraph" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">About Us</a>
      </Typography>
      <Typography as="li" variant="paragraph" color="blue-gray" className="p-1 font-medium">
        <a href="#" className="flex items-center justify-center hover:text-blue-500 transition-colors">Contact Us</a>
      </Typography>
      <Typography as="li" variant="paragraph" color="blue-gray" className="p-1 font-medium">
        {isAuthorized && (
          <Button variant="outlined" color="primary">Dashboard</Button>
        )}
        {isUnAuthorized && (
          <>
            <Button variant='outlined' className='mr-1 lg:w-auto md:w-1/3 w-auto' onClick={handleLoginOpen}>Sign In</Button>
            <Button variant="gradient" className='ml-1 lg:w-auto md:w-1/3 w-auto' onClick={handleRegisterOpen}>Sign Up</Button>
          </>
        )}
      </Typography>
    </ul>
  );
}

const NavBar = ({ setLoginOpen, setRegisterOpen }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const { isAuthenticated } = useAuth();
  const isAuthorized = isAuthenticated();
  const isUnAuthorized = !isAuthorized;

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="mx-auto px-2 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-6 h-6" />
          <Typography as="a" href="#" variant="h5" className="ml-4 cursor-pointer py-1.5">Trip Genius</Typography>
        </div>

        <div className="hidden lg:block">
          <NavList 
            isAuthorized={isAuthorized} 
            isUnAuthorized={isUnAuthorized} 
            setLoginOpen={setLoginOpen}
            setRegisterOpen={setRegisterOpen}
          />
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
        <NavList 
          isAuthorized={isAuthorized} 
          isUnAuthorized={isUnAuthorized}
          setLoginOpen={setLoginOpen}
          setRegisterOpen={setRegisterOpen}
        />
      </Collapse>
    </div>
  );
};

export default NavBar;
