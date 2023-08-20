import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {
    alpha,
    Avatar,
    Button,
    Container,
    IconButton, InputBase,
    Menu,
    MenuItem, styled,
    Tooltip,
    Typography,
    useTheme
} from "@mui/material";
import green_logo from '../../assets/images/logoipsum-238.svg';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

import SearchIcon from '@mui/icons-material/Search';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import HouseIcon from '@mui/icons-material/House';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { HCategoryScroller } from "../index";

function Appbar() {
    const theme = useTheme();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            {/*<Search>*/}
            {/*    <SearchIconWrapper>*/}
            {/*        <SearchIcon />*/}
            {/*    </SearchIconWrapper>*/}
            {/*    <StyledInputBase*/}
            {/*        placeholder="Search…"*/}
            {/*        inputProps={{ 'aria-label': 'search' }}*/}
            {/*    />*/}
            {/*</Search>*/}
            <AppBar position="fixed" style={{background:'#ffff', color:theme.palette.primary.main, borderBottom:'2px solid #F8F9F9',boxShadow:'none'}}>
                <Container maxWidth="xl">
                    <Toolbar style={{ justifyContent: 'space-between', display:'flex' }}>

                        <Box sx={{mr:12}}>
                            <img src={green_logo} className="appbar-logo"/>
                        </Box>

                            <Box sx={{display:'flex',gap:1}}>
                                <Tooltip title="Home">
                                    <IconButton onClick={handleOpenUserMenu}  style={{background:theme.palette.success.main,color:'#fff'}}>
                                        <HouseIcon style={{fontSize:'26px'}}/>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Marketplace">
                                    <IconButton
                                        style={{background:theme.palette.success.main,color:'#fff'}}
                                    >
                                        <StorefrontIcon style={{fontSize:'26px'}}/>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Support">
                                    <IconButton onClick={handleOpenUserMenu}  style={{background:theme.palette.success.main,color:'#fff'}}>
                                        <ContactSupportIcon style={{fontSize:'26px'}}/>
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Account">
                                    <IconButton onClick={handleOpenUserMenu}  style={{background:theme.palette.success.main,color:'#fff'}}>
                                       <PersonIcon style={{fontSize:'26px'}}/>
                                    </IconButton>
                                </Tooltip>
                            </Box>

                    </Toolbar>
                </Container>
                <HCategoryScroller/>
            </AppBar>

        </>
    );
}


export default Appbar;