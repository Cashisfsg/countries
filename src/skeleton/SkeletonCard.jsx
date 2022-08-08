import React from 'react';
import styled from 'styled-components';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonCard = () => {
    return (
        Array(12).fill(0).map((_ , i) => (
                <CardContainer key={i}>

                    <Flag><Skeleton height={'100%'} circle/></Flag>

                    <CountryDetails>
                        <Title><Skeleton /></Title>
                        <Detail><Skeleton /></Detail>
                        <Detail><Skeleton /></Detail>
                        <Detail><Skeleton /></Detail>
                    </CountryDetails>

                </CardContainer>
            )
        )
    );
}

export default SkeletonCard;

const CardContainer = styled.article`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    border-radius: 5px;

    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    overflow: hidden;
`;

const Flag = styled.div`
    width: 100%;
    height: 50%;
`;

const CountryDetails = styled.section`
    height: 50%;
    width: 100%;
    padding: 27px 24px;
    background-color: ${({ theme }) => theme.colors.bgelement};
`;

const Title = styled.h4`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 117%;
`;

const Detail = styled.p`
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 115%;
`;
