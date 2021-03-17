import * as React from "react";
import { Content, Description, Image, SocialIcons, Title } from "./styles";

import ProfileImage from "../../images/profile.png";
import { Flex } from "../Flex";

export const Bio = () => {
  return (
    <Content flexDirection="column">
      <Image src={ProfileImage} alt="" />
      <Title>Gustavo Chagas</Title>
      <Description>
        Software Enginner | Javascript, ReactJS & Typescrypt.
      </Description>
      <Flex mt={16}>
        <SocialIcons href=" " />
        <SocialIcons href=" " />
        <SocialIcons href=" " />
      </Flex>
    </Content>
  );
};
