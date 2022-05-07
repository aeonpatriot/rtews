import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const sidebarData = [
  {
    type: 'row',
    title: 'Dashboard',
    icon: <HomeIcon/>,
    link: '/dashboard',
  },
  {
    type: 'row',
    title: 'Condition',
    icon: <CalendarViewDayIcon/>,
    link: '/condition',
  },
  {
    type: 'row',
    title: 'Logout',
    icon: <ExitToAppIcon/>,
    link: '/login',
  }
]