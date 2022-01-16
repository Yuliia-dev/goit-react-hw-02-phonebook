import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  padding: 15px;
  border-radius: 4px;
`;

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  list-style: none;
  border: 1px solid ${props => props.theme.colors.white};
`;

export const ContactsItemText = styled.p`
  font-style: italic;
  font-size: 18px;
  font-weight: 400;
  line-height: 36px;
  margin: 0;
`;
export const ContactsBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: ${props => props.theme.colors.red};
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1);
  box-sizing: border-box;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 5px;
  text-align: center;
  text-decoration: none;
`;
