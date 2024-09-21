// src/components/StyledComponents.js

import styled from 'styled-components';

// Container for overall app styling based on the theme
export const Container = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#ffffff' : '#1a1a1a')};
  color: ${(props) => (props.theme === 'light' ? '#000000' : '#f0f0f0')};
  font-size: ${(props) => `${props.fontSize}px`};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
`;

// Button styling with borders based on theme
export const Button = styled.button`
  background-color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  color: ${(props) => (props.theme === 'light' ? '#fff' : '#000')};
  border: 2px solid ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// Grid layout for boxes (flexbox for horizontal layout)
export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;  /* Flex-wrap to ensure boxes wrap to the next row when space runs out */
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

// Box styling with external margin, dynamic theme support, and added input field
export const Box = styled.div`
  background-color: ${(props) => (props.theme === 'light' ? '#f0f0f0' : '#333')};
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
  border: ${(props) => (props.theme === 'light' ? '1px solid #ccc' : '1px solid #444')};
  height: 150px;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  font-size: ${(props) => `${props.fontSize}px`};
  transition: all 0.3s ease;
  margin: 10px;
  padding: 10px;

  input {
    margin-top: 10px;
    padding: 5px;
    width: 80%;
    border: 1px solid ${(props) => (props.theme === 'light' ? '#ccc' : '#555')};
    background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#444')};
    color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
    border-radius: 3px;
    font-size: ${(props) => `${props.fontSize}px`};
  }
`;
