import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  width: 275px;
  padding: 50px 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};

  > div {
    position: sticky;
    top: 20px;
  }
`;