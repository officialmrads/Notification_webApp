import React from 'react'
import './Sidebar.css'
import AnnouncementIcon from '@material-ui/icons/Announcement';
import SidebarOption from './SidebarOption'
import {Button} from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ExploreIcon from '@material-ui/icons/Explore';

function Sidebar() {
    return (
        <div className="sidebar">
        <AnnouncementIcon className="sidebar__tweeterIcon" />
        <SidebarOption active Icon={HomeIcon}text="Home"/>
        <SidebarOption Icon={NotificationsIcon} text="Explore"/>
        <SidebarOption Icon={ExploreIcon} text="Notification"/>

        <Button variant="outlined" className="sidebar__tweet" fullWidth>Post</Button>

        </div>
    );
}

export default Sidebar
