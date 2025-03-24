import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { 
  HeaderContainer, 
  Logo, 
  Navigation, 
  NavLink, 
  RightSection,
  FontSelector,
  FontOption
} from './Header.styles';

const Header = () => {
  const { fontFamily, changeFont } = useContext(ThemeContext);

  const fonts = [
    { value: 'sans-serif', label: 'Sans Serif' },
    { value: 'serif', label: 'Serif' },
    { value: 'monospace', label: 'Monospace' }
  ];

  return (
    <HeaderContainer>
      <Logo>
        <Link to="/">WordHunt</Link>
      </Logo>
      
      <Navigation>
        <NavLink to="/" exact activeClassName="active">Search</NavLink>
        <NavLink to="/bookmarks" activeClassName="active">Bookmarks</NavLink>
        <NavLink to="/word-of-the-day" activeClassName="active">Word of the Day</NavLink>
      </Navigation>
      
      <RightSection>
        <FontSelector value={fontFamily} onChange={(e) => changeFont(e.target.value)}>
          {fonts.map(font => (
            <FontOption key={font.value} value={font.value}>
              {font.label}
            </FontOption>
          ))}
        </FontSelector>
        <ThemeToggle />
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;
