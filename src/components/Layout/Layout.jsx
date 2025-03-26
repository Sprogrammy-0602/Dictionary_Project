import React from 'react';
import { MainContentContainer } from './Layout.styles';

const Layout = ({ children }) => {
    return (
        <MainContentContainer>
            {children}
        </MainContentContainer>
    );
};

export default Layout;
