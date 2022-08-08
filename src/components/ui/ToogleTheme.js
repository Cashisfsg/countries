import styled from 'styled-components';

const Toogle = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: 600;

    cursor: pointer;

    & > svg {
        margin-right: 8px;
    }

    @media (max-width: 755px) {
        font-size: 12px;
    }
`;

export default Toogle;


