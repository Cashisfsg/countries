import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const Card = ({
    flag, 
    name, 
    population, 
    region, 
    capital, 
    code
}) => {

    const navigate = useNavigate();

    return (
        <CardContainer>
            <Flag src={flag} alt='' onClick={() => navigate(`/about/${code}`)}/>
            <CountryDetails>
                <Title>
                    {name}
                </Title>
                <Detail><b>Population:</b> {population} </Detail>
                <Detail><b>Region:</b> {region}</Detail>
                <Detail><b>Capital:</b> {capital}</Detail>
            </CountryDetails>

            
        </CardContainer>
    );
}

export default Card;

const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.colors.bgelement};
    box-shadow: ${({ theme }) => theme.shadow};
    overflow: hidden;
`;

const Flag = styled.img`
    width: 100%;
    height: 50%;
    object-fit: fill;
    cursor: pointer;
`;

const CountryDetails = styled.section`
    height: 50%;
    width: 100%;
    padding: 27px 24px;
`;

const Title = styled.h4`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 117%;
    font-weight: 700;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
`;

const Detail = styled.p`
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 115%;
    font-weight: 500;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};  
    
    & > b {
        font-weight: 700;
    }
`;