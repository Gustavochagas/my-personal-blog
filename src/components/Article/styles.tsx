import styled from 'styled-components';
import { AiOutlineCalendar } from 'react-icons/ai';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  margin: ${(props) => props.theme.spaces.large} 0;
  padding: ${(props) => props.theme.spaces.largest};

  border: 1px solid rgba(79,93,117,.2);
  border-radius: 5px;
`;

export const Title = styled.a`
  color: black;
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
  color: #777;
`;

export const DateIcon = styled(AiOutlineCalendar)`
  margin-right: 5px;
`;