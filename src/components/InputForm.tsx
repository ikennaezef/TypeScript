import React, { FC, useState } from 'react'

import styled from 'styled-components'

const StyledForm = styled.div`
  padding: 1rem 0;

  p {
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    input {
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      font-family: inherit;
      border: none;
      outline: 1px solid ${({ theme }) => theme.colors.alt};
      background-color: #eee;
    }

    button {
      padding: 0.5rem 1rem;
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

  const [task, setTask] = useState<string | null>('');
  const [error, setError] = useState<boolean>(false);

  const addTask = () => {
    if (task === '') {
      setError(true);
      setTimeout(() => setError(false), 1000);
    } else {
      console.log(task);
    }
  }

  return (
    <StyledForm>
      <p>You can add your task here</p>
      <div>
        <input type='text' placeholder='Add task' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </div>
      {error && <span>No task to add!</span>}
    </StyledForm>
  )
}

export default InputForm