import React from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

import Link from './ui/Link';

const CountryDetails = ({
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders
}) => {

    const navigate = useNavigate();

    return (
        <DetailsContainer>
            <Title>{name}</Title>
            <LeftColumn>
                <List>
                    <ListItem><b>Native name: </b>{nativeName}</ListItem>
                    <ListItem><b>Population: </b>{new Intl.NumberFormat('ru-RU').format(population)}</ListItem>
                    <ListItem><b>Region: </b>{region}</ListItem>
                    <ListItem><b>Sub region: </b>{subregion}</ListItem>
                    <ListItem><b>Capital: </b>{capital}</ListItem>
                </List>
            </LeftColumn>
            <RightColumn>
                <List>
                    <ListItem><b>Top level domain: </b>{tld}</ListItem>
                    <ListItem><b>Currencies: </b>{currencies}</ListItem>
                    <ListItem><b>Languages: </b>{languages}</ListItem>
                </List>
            </RightColumn>
            <Borders>

                <Neighbor>
                <b>Border countries: </b>
                    {typeof borders === 'string' 
                    ? borders
                    : borders.map(border => (
                        <Link onClick={() => navigate(`/about/${border.cca3}`)}>{border.name} </Link>
                    ))}
                </Neighbor>
            </Borders>

        </DetailsContainer>
    );
}

export default CountryDetails;

const DetailsContainer = styled.article`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bgcolor};
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    grid-template-areas:
        "title title"
        "leftcolumn rightcolumn"
        "footer footer";
    
    & > b {
        font-weight: 600;
    }

    @media (max-width: 755px) {
        grid-template-columns: 1fr;
        grid-template-areas:
        "title"
        "leftcolumn"
        "rightcolumn"
        "footer";
        grid-row-gap: 24px;
    }
`;

const Title = styled.h3`
    grid-area: title;
    padding: 0 0 24px;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
`;

const LeftColumn = styled.section`
    grid-area: leftcolumn;
`;

const RightColumn = styled.section`
    grid-area: rightcolumn;
`;

const List = styled.ul`
    width: 100%;
    list-style: none;
`;

const ListItem = styled.li`
    /* height: 32px; */
    padding: 6px 0;
    width: 100%;
    font-size: 1rem;
`;

const Borders = styled.section`
    grid-area: footer;
    margin-top: 75px;

    @media (max-width: 755px) {
        margin-top: 24px;
    }
`;

const Neighbor = styled.div`
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    padding-bottom: 32px;
`;
