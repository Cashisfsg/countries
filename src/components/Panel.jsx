import React, {memo} from 'react';
import styled from 'styled-components';

const Panel = ({children}) => {
    return (
        <PanelContainer>
            {children}
        </PanelContainer>
    );
}

export default memo(Panel);

const PanelContainer = styled.div`
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1105px) {
        padding: 50px 32px;
        align-items: flex-start;
        flex-direction: column;
        gap: 50px;
    }
`;