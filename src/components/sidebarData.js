import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const sidebarData = [
  {
    type: 'header',
    title: 'Name',
    icon: <AccountCircleIcon/>,
  },
  {
    type: 'divider',
  },
  {
    type: 'row',
    title: 'Dashboard',
    icon: <HomeIcon/>,
    link: '/dahboard'
  },
  {
    type: 'row',
    title: 'Condition',
    icon: <CalendarViewDayIcon/>,
    link: '/condition'
  },
  {
    type: 'row',
    title: 'Dashboard2',
    icon: <HomeIcon/>,
    link: '/dahboard2'
  }
]