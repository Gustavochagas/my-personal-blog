import * as React from 'react';
import { Bio } from '../Bio';
import { Switch } from '../Switch';
import { Container } from './styles';

type PropTypes = {
  onChangeTheme: (theme: string) => void;
  theme: string;
}

export const Header: React.FC<PropTypes> = ({ onChangeTheme, theme }) => {
  const themeToggler = () => {
    theme === "light" ? onChangeTheme("dark") : onChangeTheme("light");
  };
  
  return (
    <Container>
      <div>
        <Bio />
        <Switch onChange={themeToggler} label="Change theme" />
      </div>
    </Container>
  )
}