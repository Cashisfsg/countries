import React, { useEffect } from 'react';
import styled from 'styled-components';

import { fetchAllCountries } from '../store/countriesSlice';
import { useSelector, useDispatch } from 'react-redux';

import Card from '../components/Card';
import SkeletonCard from '../skeleton/SkeletonCard';
import { RiErrorWarningLine } from 'react-icons/ri'
 

const CountriesContainer = () => {

    const countries = useSelector(state => state.countries.filteredCountries);
    const status = useSelector(state => state.countries.status);
    const error = useSelector(state => state.countries.error);

    const dispatch = useDispatch();

    useEffect(() => {
        if (!countries.length) {
            dispatch(fetchAllCountries())
        }

    }, []);

    return (
        <>
            {status === 'rejected' && 
                <ErrorContainer>
                    <ErrorMessage>
                        <RiErrorWarningLine />fsdfsdf
                    </ErrorMessage>
                </ErrorContainer>
            }
            {status === 'loading' && 
                <MainContainer>
                    <SkeletonCard />
                </MainContainer>
            }
            {status === 'resolved' && 
                <MainContainer>
                    {countries.map(country => (
                        <Card 
                            key={country?.cca2}
                            flag={country?.flags?.png}
                            name={country?.name?.common}
                            population={new Intl.NumberFormat('ru-RU').format(country?.population)}
                            region={country?.region}
                            capital={country?.capital}
                            code={country?.cca3}
                        />
                    ))}
                </MainContainer>
            }

        </>

    );
}

export default CountriesContainer;

const ErrorContainer = styled.div`
    height: calc(100vh - 236px);
    width: 100%;
    padding: ${({ theme }) => theme.padding};   

    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1105px) {
        height: calc(100vh - 342px);
    }
`;

const ErrorMessage = styled.span`

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 25px;
    font-size: 3rem;
    font-weight: 600;
    color: rgb(206, 170, 173);
    border-radius: 8px;
    border: 3px solid rgb(164, 88, 93);

    & > svg {
        color: rgb(220, 63, 52);
        margin-right: 16px;
    } 
`

const MainContainer = styled.main`
    min-height: calc(100vh - 236px);
    padding: ${({ theme }) => theme.padding};   

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(4, 265px);
    grid-auto-rows: 335px;
    place-items: center;
    grid-template-rows: 335px;
    grid-gap: 75px;  

    @media (max-width: 1445px) {
        grid-template-columns: repeat(3, 265px);
    }

    @media (max-width: 1105px) {
        grid-template-columns: repeat(2, 265px);
    }

    @media (max-width: 755px) {
        grid-template-columns: 265px;
    }
`;