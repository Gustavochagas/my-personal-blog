import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.spaces.large} 0;

  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 5px;

  transition: all .2s ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.grayLight};
  }
`;

export const Link = styled.a`
 padding: ${(props) => props.theme.spaces.largest};
 text-decoration: none;

 color: ${(props) => props.theme.colors.black};
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.black};
  display: block;
  margin: ${(props) => props.theme.spaces.small} 0;
  font-size: ${(props) => props.theme.fontSizes.largest};
  font-weight: bold;
  text-decoration: none;
  
  transition: all .2s ease-in-out;

  &:hover {
    opacity: .7;
  }
`;

export const DatePublished = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: bold;
  color: ${(props) => props.theme.colors.grayDark};
`;

export const DateIcon = styled(AiOutlineCalendar)`
  margin-right: 5px;
`;