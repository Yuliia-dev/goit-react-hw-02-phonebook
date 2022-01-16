import styled from 'styled-components';

export const FormContact = styled.form`
  max-width: 600px;
  padding: 15px;
  border-radius: 4px;
`;

export const LabelFormContact = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const TextFormContact = styled.p`
  width: 80px;
  margin: 0 10px 0 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.14;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px;
`;

export const InputFormContact = styled.input`
  width: 80%;
  padding: 10px;
  border: none;
  border: 3px solid ${props => props.theme.colors.lightGreen};
  border-radius: 4px;
  background-color: ${props => props.theme.colors.white};
`;

export const ButtonFormContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 150px;
  background-color: ${props => props.theme.colors.green};
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  text-align: center;
  text-decoration: none;
`;
