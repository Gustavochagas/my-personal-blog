import * as React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMediumSquare } from 'react-icons/ai';
import { Description, Image, SocialIcons, Title } from "./styles";

import ProfileImage from "../../assets/images/profile.png";
import { Flex } from "../Flex";

export const Bio = () => {
  return (
    <Flex flexDirection="column" mb={20}>
      <Image src={ProfileImage} alt="" />
      <Title>Gustavo Chagas</Title>
      <Description>
        Software Engineer | Javascript, ReactJS & Typescrypt.
      </Description>
      <Flex mt={16}>
        <SocialIcons target="_blank" href="https://github.com/Gustavochagas">
          <AiFillGithub />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://www.linkedin.com/in/gustavochagass/">
          <AiFillLinkedin />
        </SocialIcons>
        <SocialIcons target="_blank" href="https://medium.com/@gustavochagass">
          <AiFillMediumSquare />
        </SocialIcons>
      </Flex>
    </Flex>
  );
};
