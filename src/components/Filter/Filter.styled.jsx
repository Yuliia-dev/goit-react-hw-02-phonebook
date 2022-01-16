import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  align-items: center;
`;
export const TextFilter = styled.p`
  width: 200px;
  margin: 0 10px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px;
`;

export const InputFilter = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  border: 3px solid ${props => props.theme.colors.lightRed};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
`;
