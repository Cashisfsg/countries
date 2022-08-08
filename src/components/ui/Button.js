import styled from 'styled-components';

const Button = styled.button`
    height: 56px;
    width: 140px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.1);
    outline: none;
    background-color: ${({ theme }) => theme.colors.bgelement};
    color: ${({ theme }) => theme.colors.text};

    font-size: 18px;
    line-height: 100%;
    font-weight: 500;
    cursor: pointer;

    & > svg {
        margin-right: 12px;
    }
`;

export default Button;