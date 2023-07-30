import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

const Nav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px 0;
    background: white;
    border-bottom: 1px solid #e8e8e8;
    z-index: 100;
`

const AppHeader = styled.header`
    margin-bottom: 75px;
`

const Header: React.FC = () => {
    return (
        <AppHeader>
            <Nav className='d-flex'>
                <NavLink className='m-auto' to="/">
                    ANIME LIST
                </NavLink>

                <NavLink className='m-auto' to="/">
                    MY COLLECTIONS
                </NavLink>
            </Nav>
        </AppHeader>
    );
}

export default Header;