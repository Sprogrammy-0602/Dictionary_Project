import React from 'react';
import { FooterContainer, FooterContent, FooterSection, FooterLink, CopyrightText } from './Footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <FooterSection>
                    <h4>About WordHunt</h4>
                    <p>WordHunt is a major publisher of Educational and Language content for over 200 years.</p>
                </FooterSection>
                <FooterSection>
                    <h4>Quick Links</h4>
                    <FooterLink href="#">Home</FooterLink>
                    <FooterLink href="#">Word of the Day</FooterLink>
                    <FooterLink href="#">Bookmarks</FooterLink>
                </FooterSection>
                <FooterSection>
                    <h4>Contact Us</h4>
                    <FooterLink href="mailto:rkfeb2005@gmail.com">Email</FooterLink>
                    <FooterLink href="#">Twitter</FooterLink>
                    <FooterLink href="#">Facebook</FooterLink>
                </FooterSection>
            </FooterContent>
            <CopyrightText>© WordHunt 2025</CopyrightText>
        </FooterContainer>
    );
};

export default Footer;
