import React, { useEffect, useMemo, memo  } from 'react';
import styled from 'styled-components';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountry } from '../store/countriesSlice';

import CountryDetails from '../components/CountryDetails';
import Panel from '../components/Panel';
import Button from '../components/ui/Button';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';



const About = () => {

    const { code } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const country = useSelector(state => state.countries.country);
    const countries = useSelector(state => state.countries.countries);

    useEffect(() => {
        dispatch(fetchCountry(code));
    }, [code])

    const borders = useMemo(() => {
        return country?.borders 
            ? Object.values(countries.filter(ctr => country?.borders.includes(ctr.cca3)))
                .map(ctr => {
                    return {name: ctr.name.common, cca3: ctr.cca3}
                }) 
            : 'no borders'
    }, [country.borders])

    return (
        <Wrapper>
            <Panel>
                <Button onClick={() => navigate(-1)}><HiOutlineArrowNarrowLeft />Back</Button>
            </Panel>
            <DetailsContainer>
                <Flag src={country?.flag} alt={country?.name} />
                <CountryDetails 
                    name={country?.name}
                    nativeName={country?.nativeName}
                    population={country?.population}
                    region={country?.region}
                    subregion={country?.subregion}
                    capital={country?.capital}
                    tld={country?.tld}
                    currencies={country?.currencies}
                    languages={country?.languages}
                    borders={borders}
                />
            </DetailsContainer>
        </Wrapper>
    );
}

export default memo(About);

const Wrapper = styled.div`
    min-height: calc(100vh - 80px);
    width: 100%
`;

const DetailsContainer = styled.div`
    height: max-content;
    width: 100%;
    padding: ${({ theme }) => theme.padding};
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: start;
    grid-column-gap: 60px;

    @media (max-width: 1105px) {
        padding: 0 32px;
    }

    @media (max-width: 755px) {
        grid-template-columns: 1fr;
        grid-row-gap: 75px;
    }
`;

const Flag = styled.img.attrs({
    loading: "lazy"
})`
    align-self: center;
    aspect-ratio: 1.35;
    width: 100%;
    max-height: 400px;
    max-width: 540px;
    border: none;
    object-fit: fill;

    @media (max-width: 755px) {
        justify-self: center;
    }
`;