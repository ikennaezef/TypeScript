import React, { FC } from 'react'

import { useApp } from '../context';

import styled from 'styled-components'
import Todo from './Todo';

const TodosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;


  @media(max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Todos: FC = () => {

  const { todos } = useApp();

  if (todos.length < 1) {
    return <div>Nothing left to do. You can relax..... for now</div>
  }

  return (
    <TodosContainer>
      {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
    </TodosContainer>
  )
}

export default Todos