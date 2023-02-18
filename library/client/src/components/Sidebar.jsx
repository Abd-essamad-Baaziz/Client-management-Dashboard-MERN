import React from 'react'
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from '@mui/material';
import { 
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
 } from '@mui/icons-material'

import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween';
import profileImage from 'assets/img.jpg'

const NavItems = [
    {
        text: "Audit Logs",
        icon: <HomeOutlined />
    },
    {
        text: "Setting",
        icon: <SettingsOutlined />,
    },
    {
        text: "Users",
        icon: <ShoppingCartOutlined />
    },
    {
        text: "Loans",
        icon: <Groups2Outlined />
    },
    {
        text: "Books",
        icon: <ReceiptLongOutlined />
    },
]

const Sidebar = ({
    user,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])
  return (
    <Box component="nav">
        {isSidebarOpen && (
            <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor='left'
            sx={{
                width:drawerWidth,
                "& .MuiDrawer-paper": {
                    color: theme.palette.secondary[200],
                    background: theme.palette.background.alt,
                    boxSizing: "border-box",
                    borderWidth: isNonMobile ? 0 : "2px",
                    width: drawerWidth,
                    boxShadow: "1px 0 0 0 rgba(0, 0, 0, .1)"
                }
            }}
            >
                <Box width="100%">
                    <Box m="1.5rem 2rem 2rem 3rem">
                        <FlexBetween color={theme.palette.secondary.main}>
                            <Box display="flex" alignItems="center" gap="0.5rem">
                                <Typography variant='h5' fontWeight="bold">
                                    BOOKVISION
                                </Typography>
                            </Box>
                            {!isNonMobile && (
                                <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                    <ChevronLeft />
                                </IconButton>
                            )}
                        </FlexBetween>
                    </Box>
                    <List sx={{}}>
                        {NavItems.map(({ text, icon }) => {
                            if(!icon) {
                                return (
                                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem"}}>
                                        {text}
                                    </Typography>
                                )
                            }
                            const lcText = text.toLowerCase();

                            return (
                                <ListItem key={text}>
                                    <ListItemButton 
                                        onClick={() => { 
                                            navigate(`/${lcText}`);
                                            setActive(lcText)
                                        }}
                                        sx={{
                                            backgroundColor: active === lcText 
                                            ? theme.palette.secondary[300] 
                                            : "transparent",
                                            boxShadow: "0 1px 0 0 rgba(0, 0, 0, .1)",
                                            '&:hover': {
                                                background: "#A1D3F5",
                                             },
                                            color: active === lcText
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[100] 
                                        }}
                                        >
                                            <ListItemIcon 
                                            sx={{
                                                ml:"2rem",
                                                color: active === lcText
                                                ? theme.palette.primary[600]
                                                : theme.palette.secondary[200]
                                            }}>
                                                {icon}
                                            </ListItemIcon>
                                            <ListItemText primary={text}>
                                                {active === lcText && (
                                                    <ChevronRightOutlined sx={{ ml: "auto"}} />
                                                ) }
                                            </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })}
                    </List>
                </Box>

                <Box position="absolute" bottom="2rem">
                    <Divider />
                    <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
                        <Box 
                        component="img"
                        alt="profile"
                        src={profileImage}
                        height="40px"
                        width="40px"
                        borderRadius="50%"
                        sx={{ objectFit: "cover"}}
                        />
                        <Box textAlign="left">
                            <Typography fontWeight="bold" fontSize="0.9rem" sx={{color: theme.palette.secondary[100]}}>
                                {user.fullName}
                             </Typography>
                            <Typography fontSize="0.8rem" sx={{color: theme.palette.secondary[200]}}>
                                {user.role}
                            </Typography>
                        </Box>
                        <SettingsOutlined 
                            sx={{
                                color: theme.palette.secondary[300],
                                fontSize: "25px",
                            }}
                            />
                    </FlexBetween>
                </Box>
            </Drawer>
        )}
    </Box>
  )
}

export default Sidebar