import styled from 'styled-components';

const UnorderedList = styled.ul`
  list-style: ${({ listStyle }) => listStyle};
  font-size: 2.2rem;
  padding: 0;

  li {
    padding: 0.4rem;
  }
`;

export default UnorderedList;
