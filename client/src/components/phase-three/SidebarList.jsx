import React from 'react'
import {
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Accordion,
    AccordionHeader,
    Typography,
    AccordionBody,
    Chip,
} from '@material-tailwind/react'
import {
    StarIcon,
    HomeIcon,
    InboxIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    PowerIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

const SidebarList = ({requestDilogOpen}) => {
    const [accordionOpen, setAccordionOpen] = React.useState(0);
    const handleOpen = (value) => {
        setAccordionOpen(accordionOpen === value ? 0 : value);
    };
    const handleDilogOpen = () => {
        requestDilogOpen();
    }
  return (
    <div>
            <List>
                <Accordion
                    open={accordionOpen === 1}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${accordionOpen === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={accordionOpen === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <HomeIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                Home
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Add Trip
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Current Trip
                            </ListItem>
                            <NavLink to="sampletwo">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    AI Trip Planner
                                    <ListItemSuffix>
                                        <StarIcon className="h-6 w-6 text-red-500" /> 
                                    </ListItemSuffix>
                                </ListItem>
                            </NavLink>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Special Offers
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={accordionOpen === 2}
                    icon={
                        <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${accordionOpen === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={accordionOpen === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                My Trips
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Travel History
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Active Trips
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Upcoming Trips
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />
                <NavLink to="sampletwo">
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Inbox
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                </NavLink>
                <NavLink to="sample">
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </NavLink>
                <ListItem>
                    <ListItemPrefix>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Settings
                </ListItem>
                <ListItem onClick={handleDilogOpen}>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>
            </List>
    </div>
  )
}

export default SidebarList
