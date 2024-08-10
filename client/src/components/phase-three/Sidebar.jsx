import React,{useState, useEffect} from "react";
import {
  Drawer,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  IconButton,
  Badge,
  Alert,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,

  InboxIcon,
  UserCircleIcon,

  CubeTransparentIcon,
  BellIcon,


} from "@heroicons/react/24/solid";
import logo from '../../assets/mountain.png';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../phase-zero/utils';
import {useNavigate, NavLink, Outlet } from "react-router-dom";
import SidebarList from "./SidebarList";

  


const Sidebar = () => {
    const [openDilog, setDilogOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [openAlert, setOpenAlert] = React.useState(false);
    const navigate = useNavigate();

    const handleLogout = () => { 
        setDilogOpen(!openDilog)
            localStorage.removeItem('userCredentials');
            handleSuccess('User Loggedout');
            setTimeout(() => {
                navigate('/');
            }, 1000) 
      };
    

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const handleDilogOpen = () => setDilogOpen(!openDilog);

    return (
      <React.Fragment>
        <div className="flex items-center justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            <NavLink to="/dashboard/sample">
                <div className="flex items-center cursor-pointer">
                    <img src={logo} alt="Logo" className="w-6 h-6" />
                    <Typography as="a" href="#" variant="h5" className="ml-2 sm:ml-4 mt-1 sm:mt-2 text-base sm:text-lg">
                        Trip Genius
                    </Typography>
                </div>
            </NavLink>
            <div className="flex items-center gap-2 sm:gap-4">
                <Badge overlap="circular" withBorder>
                    <InboxIcon className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
                </Badge>
                <NavLink to="profile">
                    <Badge overlap="circular" withBorder>
                        <UserCircleIcon className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
                    </Badge>
                </NavLink>
                <Badge overlap="circular" withBorder>
                    <BellIcon className="h-6 w-6 sm:h-7 sm:w-7 cursor-pointer" />
                </Badge>
                <IconButton
                    variant="text"
                    className="h-6 w-6 sm:h-7 sm:w-7 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
                    ripple={false}
                    onClick={openDrawer}
                >
                    {open ? (
                        <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
        </div>
        <ToastContainer />         
        <div>
            <Outlet />
        </div>

        <Drawer open={open} onClose={closeDrawer} className="p-4">
            <div className="mb-2 flex justify-between items-center gap-4 p-4">
                <div className="flex items-center gap-2">
                    <img src={logo} alt="brand" className="h-7 w-7" />
                    <Typography variant="h5" color="blue-gray" className="ml-4 mt-2" > Trip Genius </Typography>
                </div>
            </div>

            <div>
                <SidebarList requestDilogOpen={handleDilogOpen}/>
            </div>

            <Alert open={openAlert} className="mt-auto" onClose={() => setOpenAlert(true)}>
                <CubeTransparentIcon className="mb-4 h-12 w-12" />
                <Typography variant="h6" className="mb-1">
                Upgrade to PRO
                </Typography>
                <Typography variant="small" className="font-normal opacity-80">
                Upgrade to Material Tailwind PRO and get even more components, plugins, advanced features
                and premium.
                </Typography>
                <div className="mt-4 flex gap-3">
                <Typography
                    as="a"
                    href="#"
                    variant="small"
                    className="font-medium opacity-80"
                    onClick={() => setOpenAlert(false)}
                >
                    Dismiss
                </Typography>
                <Typography as="a" href="#" variant="small" className="font-medium">
                    Upgrade Now
                </Typography>
                </div>
            </Alert>
        </Drawer>
        <Dialog open={openDilog} handler={handleDilogOpen}>
            <DialogHeader>
                <Alert className="rounded-none border-l-4 border-red-500 bg-red-100 font-medium text-red-500" icon={<Icon />}>Hello, Are you sure you want to log out?</Alert>
            </DialogHeader>
            <DialogBody>
                Logging out is a chance to recharge and refocus. Every time you step away, you're preparing for a stronger comeback. See you next time!
            </DialogBody>
            <DialogFooter>
            <Button
                variant="text"
                color="Black"
                onClick={handleDilogOpen}
                className="mr-1"
            >
                <span>Cancel</span>
            </Button>
            <Button variant="outlined" color="red" onClick={handleLogout}>
                <span>Log Out</span>
            </Button>
            </DialogFooter>
        </Dialog>
      </React.Fragment>
    );
  }

  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
        />
      </svg>
    );
  }

export default Sidebar;
