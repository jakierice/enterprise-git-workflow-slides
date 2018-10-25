import styled from 'styled-components';

const UnorderedList = styled.ul`
  list-style: ${({ listStyle }) => listStyle};
  font-size: 2.2rem;
  padding: 0;

  li {
    text-align: ${({ textAlign }) => textAlign || 'center'};
    padding: 0.4rem;
    border-left: 3px solid #2D3846;
    margin-bottom: 1.4rem;
  }
`;

export default UnorderedList;
