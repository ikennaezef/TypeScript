import React, { FC, useState } from 'react'
import { useApp } from '../context';

import styled from 'styled-components'

const StyledForm = styled.div`
  padding: 1rem 0;

  p {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    max-width: 400px;

    input {
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      font-family: inherit;
      border: none;
      outline: 1px solid ${({ theme }) => theme.colors.alt};
      background-color: #eee;
    }

    textarea {
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      font-family: inherit;
      border: none;
      outline: 1px solid ${({ theme }) => theme.colors.alt};
      background-color: #eee;
      resize: none;
    }

    button {
      padding: 0.6rem 1rem;
      background-color: ${({ theme }) => theme.colors.alt};
      color: #fff;
      border: none;
      border-radius: 0.2rem;
      cursor: pointer;
      font-family: inherit;
    }
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.error};
  }
`;

const InputForm: FC = () => {

  const [task, setTask] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const { addTodo } = useApp();

  const addTask = () => {
    if (task === '') {
      setError(true);
      setTimeout(() => setError(false), 1000);
    } else {
      addTodo({ id: Math.round(Math.random() * 1000), title: task, description: desc, done: false });
    }
  }

  return (
    <StyledForm>
      <p>You can add your task here</p>
      <div>
        <input type='text' placeholder='Add task' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} />
        <textarea placeholder='Enter description' onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </div>
      {error && <span>No task to add!</span>}
    </StyledForm>
  )
}

export default InputForm