import styled from 'styled-components';

export const Content = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const SwitchLabel = styled.label`
  margin: 0;
  padding: 0;
  user-select: none;
  flex: 1;
  font-size: ${(props) => props.theme.fontSizes.regular};
  margin-right: ${(props) => props.theme.spaces.regular};
  white-space: nowrap;
  text-overflow: initial;
  overflow: initial;
  text-align: right;
`;

export const SwitchBlock = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
  margin: 0;
`;

export const Input = styled.input`
  display: none;
`;

type SpanProps = {
  active?: boolean;
}

export const Span = styled.span<SpanProps>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid ${(props) => props.active ? props.theme.colors.gray : props.theme.colors.black};
  transition-property: all;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    right: auto;
    bottom: 2px;
    background-color: ${(props) => props.active ? props.theme.colors.gray : props.theme.colors.black};
    transition: all .1s ease-in-out;
    transition-property: all;
    border-radius: 50%;

    transform: ${({ active }) => active && 'translateX(calc(36px - 100% - 4 * 2px))'}
  }
`;