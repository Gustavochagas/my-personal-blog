import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 275px;
  padding: 50px 20px;

  > div {
    position: sticky;
    top: 20px;
  }
`;
