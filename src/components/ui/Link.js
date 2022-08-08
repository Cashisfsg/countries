import styled from "styled-components";

const Link = styled.span`
    font-size: 14px;
    padding: 8px 27px;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.bgelement};
    box-shadow: ${({ theme }) => theme.shadow};
    cursor: pointer;
`;

export default Link;