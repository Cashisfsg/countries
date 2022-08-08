import React, { memo } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import ToogleTheme from '../components/ui/ToogleTheme';
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5';

const Header = ({theme, toogleTheme}) => {

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <Title onClick={() => navigate('/')}>Where is the world?</Title>
            <ToogleTheme onClick={() => toogleTheme()}>
                {theme === 'light' ? <IoMoonOutline /> : <IoMoonSharp />}
                {theme === 'light' ? 'Dark mode' : 'Light mode'}
            </ToogleTheme>
        </HeaderContainer>
    );
}

export default memo(Header);

const Title = styled.h1`
    cursor: pointer;  
    @media (max-width: 755px) {
        font-size: 21px;
    }
`;

const HeaderContainer = styled.header`
    height: 80px;
    width: 100%;
    padding: ${({ theme }) => theme.padding};
    background-color: ${({ theme }) => theme.colors.bgelement};
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: ${({ theme }) => theme.shadow};
    

    @media (max-width: 1105px) {
        padding: 0 32px;
    }
`;
