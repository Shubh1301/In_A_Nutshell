
import { AppBar, Toolbar, styled } from '@mui/material';
import { Menu, Search } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #000;
    height: 70px;
`;

const MenuIcon = styled(Menu)`
    color: #86C232;
`;

const Image = styled('img')({
    height: 55,
    //margin: 'auto',
    paddingLeft: 20,
    paddingRight: 550
})




const Header = () => {

    const url = 'https://upload.wikimedia.org/wikipedia/en/6/65/Kurzgesagt.png';

    const navigate = useNavigate();

    const directToHomePage = () => {
        navigate(`/articles`)
    }

    return (    
        <StyledHeader position='static'>
            <Toolbar>

                <MenuIcon />

                <Image src={url} alt="logo" sx={{height: '100%'}} onClick={directToHomePage}/>
                <Typography sx={{fontSize: '30px', fontFamily: 'cursive',  marginRight: '100px' , color: '#86C232'}} >
                    In A NutShell
                </Typography>
                <SearchBar/>
            </Toolbar>
       


        </StyledHeader>
    )
}

export default Header;