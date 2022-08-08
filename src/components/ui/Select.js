import styled from "styled-components";

const Select = styled.select`
    height: 56px;
    width: 300px;
    padding: 0 24px;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bgelement};
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    outline: none;

    @media (max-width: 755px) {
        width: 100%;
        max-width: 300px;
    }
`;

export default Select;