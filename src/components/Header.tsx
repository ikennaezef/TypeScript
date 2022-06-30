import { FC } from 'react';
import styled from 'styled-components';
import check from '../img/checkmark-circle.svg';
import { Container } from './styles/Container';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.alt};
  padding: 1.5rem 0;
  color: #fff;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 30px;
  }
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <Container>
        <div>
          <img src={check} alt='check' />
          <h1>Todo List</h1>
        </div>
      </Container>
    </StyledHeader>
  )
}

export default Header