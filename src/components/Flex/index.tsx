import { HTMLAttributes } from "react";
import styled from "styled-components";

import {
  flexbox,
  FlexboxProps,
  layout,
  space,
  SpaceProps,
  LayoutProps,
} from "styled-system";

type FlexProps = HTMLAttributes<HTMLDivElement> &
  FlexboxProps &
  SpaceProps &
  LayoutProps;

export const Flex = styled.div<FlexProps>`
  display: flex;

  ${flexbox}
  ${layout}
  ${space}
`;
