import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import { ToDoObj } from '../index.d';
import { useApp } from '../context';
import trash from '../img/trash.svg';


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
    height: 100%;

    &.done {
      border-left: 4px solid ${({ theme }) => theme.colors.alt};
      text-decoration: line-through;
      color: #aaa;
    }
  }

  button {
    padding: 0.2rem 0.4rem;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.error};
    border-radius: 0.3rem;

    &:hover {
      background-color: rgba(200, 100, 100, 0.5);
    }

    img {
      width: 20px;
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
  margin-bottom: 1rem;
`;

interface Prop {
  todo: ToDoObj;
}

const Todo: FC<Prop> = ({ todo }) => {

  const { toggleTodo, deleteTodo } = useApp();

  const btnRef = useRef<HTMLButtonElement>(null);

  const buttonClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation();
    deleteTodo(todo.id);
  }

  return (
    <StyledTodo>
      <div className={todo.done ? 'done' : 'todo'} onClick={() => toggleTodo(todo.id)}>
        <Title>{todo.title}</Title>
        <Description>{todo.description}</Description>
        <button ref={btnRef} onClick={buttonClickHandler}><img src={trash} alt='delete' /></button>
      </div>

    </StyledTodo>
  )
}

export default Todo