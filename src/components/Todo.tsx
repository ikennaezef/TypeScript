import { FC } from 'react'
import styled from 'styled-components'

import { ToDoObj } from '../index.d';


const StyledTodo = styled.div`
  border: 1px solid #f1f1f1;
  box-shadow: 0 0 8px rgba(100, 100, 100, 0.2);
  border-radius: 0.3rem;
  cursor: pointer;

  &:hover {
    border-color: #ddd;
  }

  div {    
    padding: 1rem;

    &.done {
      border-left: 4px solid ${({ theme }) => theme.colors.alt};
      text-decoration: line-through;
      color: #aaa;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1rem;

`;

interface Prop {
  todo: ToDoObj;
}

const Todo: FC<Prop> = ({ todo }) => {
  return (
    <StyledTodo>
      <div className={todo.done ? 'done' : ''}>
        <Title>{todo.title}</Title>
        <Description>{todo.description}</Description>
      </div>

    </StyledTodo>
  )
}

export default Todo