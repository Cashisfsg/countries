import React from 'react';
import styled from "styled-components";

import { IoSearchOutline } from 'react-icons/io5'

function Search({...props}) {
    return (
        <Wrapper>
            <IoSearchOutline />
            <Input {...props}/>   
        </Wrapper>
    );
}

export default Search;

const Wrapper = styled.div`
    height: 56px;
    width: 480px;
    padding: 0 32px;
    font-weight: 600;

    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bgelement};
    box-shadow: ${({ theme }) => theme.shadow};

    border-radius: 5px;

    & > svg {
        font-size: 1.5rem;
        color: ${({ theme }) => theme.colors.placeholder};
        margin-right: 24px;
    }

    @media (max-width: 755px) {
        width: 100%;
        max-width: 480px;
    }
`;


const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country'
})`
    height: 100%;
    width: 100%;

    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bgelement};


    border: none;
    outline: none;

    ::placeholder {
        font-size: 16px;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.placeholder};
    }

    ::-webkit-search-cancel-button {
        cursor: pointer;
    }
`;
