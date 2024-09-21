// src/App.js

import React, { useState } from 'react';
import { useGlobalState } from './GlobalState';
import { Container, Button, Grid, Box } from './components/StyledComponents';

function App() {
  const { theme, toggleTheme, counter, incrementCounter, decrementCounter, fontSize, setFontSize, boxes, addBox, removeBox } = useGlobalState();

  const [boxInputs, setBoxInputs] = useState({});

  const handleInputChange = (index, event) => {
    setBoxInputs({
      ...boxInputs,
      [index]: event.target.value,
    });
  };

  return (
    <Container theme={theme} fontSize={fontSize}>
      <h1>Interactive Grid with Custom Styling</h1>

      <p>Counter: {counter}</p>
      <Button theme={theme} onClick={incrementCounter}>Increment Counter</Button>
      <Button theme={theme} onClick={decrementCounter}>Decrement Counter</Button>
      <Button theme={theme} onClick={toggleTheme}>Toggle Theme</Button>

      <div>
        <p>Adjust Font Size:</p>
        <input
          type="range"
          min="10"
          max="30"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
      </div>

      <Button theme={theme} onClick={addBox}>Add Box</Button>
      <Button theme={theme} onClick={removeBox}>Remove Box</Button>

      {/* Dynamic Grid of Boxes */}
      <Grid>
        {boxes.map((box, index) => (
          <Box key={index} theme={theme} fontSize={fontSize}>
            {/* Display input box inside each box */}
            <span>Box {box}</span>
            <input
              type="text"
              value={boxInputs[index] || ''}
              onChange={(e) => handleInputChange(index, e)}
              placeholder="Enter text..."
            />
          </Box>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
