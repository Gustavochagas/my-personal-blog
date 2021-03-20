import styled from "styled-components";
import { Flex } from "../Flex";

export const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0;
`;

export const SocialIcons = styled.a`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  transform: translateX(-5px);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: .7;
  }
`;
