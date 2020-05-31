import styled from 'styled-components';

export const Container = styled.div`
  height: 3rem;
  width: 30rem;

  display: flex;

  color: #eee;
  font-size: 1.3rem;

  background: #222;
  border-radius: 0.5rem;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.6),
    0 0px 5px -1px rgba(0, 0, 0, 0.4);
`;

export const Input = styled.input`
  flex: 1;
  height: 100%;

  padding: 0 1rem;

  color: inherit;
  font-size: inherit;

  border-radius: 0.5rem 0 0 0.5rem;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  flex-shrink: 0;

  height: 3rem;
  width: 3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: inherit;
  font-size: inherit;

  border-radius: 0 0.5rem 0.5rem 0;
  border: none;
  user-select: none;
  cursor: pointer;
  background: transparent;

  transition: background-color 250ms;

  &:hover,
  &:focus {
    outline: none;
    background: rgba(255, 255, 255, 0.02);
  }

  &:active {
    outline: none;
    background: rgba(255, 255, 255, 0.05);
  }
`;
