import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 30px;
`;

export const TitlePhonebook = styled.h1`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  font-style: italic;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.green};
`;

export const TitleContacts = styled.h2`
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 0;
  font-style: italic;
  font-weight: 700;
  font-size: 36px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.red};
`;
