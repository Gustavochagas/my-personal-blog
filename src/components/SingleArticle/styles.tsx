import { Link } from 'gatsby';
import styled from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { AiOutlineLeft, AiOutlineRight, AiOutlineCalendar } from 'react-icons/ai';
import { Flex } from '../Flex';

export const Content = styled(Flex)`
  padding: ${(props) => props.theme.spaces.largest};
`;

type BackgroundTypes = {
  url: string;
}

export const Background = styled.div<BackgroundTypes>`
  width: 100%;
  height: 200px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
  margin-bottom: ${(props) => props.theme.spaces.largest};
`;

export const Article = styled(Flex)`
  margin-bottom: ${(props) => props.theme.spaces.regular};
  padding-bottom: ${(props) => props.theme.spaces.largest};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

export const Anchor = styled(Link)<SpaceProps>`
  font-size: ${(props) => props.theme.fontSizes.regular};
  text-decoration: none;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.black};
  transition: all .2s ease-in-out;

  ${space};

  &:hover {
    opacity: .7;
  }
`;

export const BackIcon = styled(AiOutlineLeft)`
  margin-right: ${(props) => props.theme.spaces.smaller};
`;

export const NextIcon = styled(AiOutlineRight)`
  margin-left: ${(props) => props.theme.spaces.smaller};
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.big};
  margin-top: 0;
`;

export const DatePublished = styled.span`
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-weight: bold;
  color: ${(props) => props.theme.colors.grayDark};
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.spaces.regular};
  margin-bottom: 0;
`;

export const DateIcon = styled(AiOutlineCalendar)`
  margin-right: ${(props) => props.theme.spaces.smaller};
`;

export const Pagination = styled(Flex)`
  margin-top: ${(props) => props.theme.spaces.smaller};
`;