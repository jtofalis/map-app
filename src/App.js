// // Wide border around pitch
// // cones?
// // save button saves as file
// Estimated analysis
// toggle arrows
// all negative or level is it's own thing?


import React, { useState } from "react";
import Draggable from "react-draggable";
import { Grid, Button, Box } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import AddIcon from '@mui/icons-material/Add';

const DistanceResult = ({ TX, TY, CX, CY }) => {
  const result = getDistance(TX, TY, CX, CY);

  // Determine distance category based on the result
  let distanceCategory = "medium"; // Default category
  if (result < 110) {
    distanceCategory = "short";
  } else if (result > 150) {
    distanceCategory = "long";
  }

  return (
    <p>{distanceCategory}: {result}</p>
  );
};

const getDistance = (TX, TY, CX, CY) => {
  return Math.round(Math.sqrt(((TX - CX) ** 2) + ((TY - CY) ** 2)));
};

const UltimateFrisbeePitch = () => {
  // State to track the positions of the draggable elements
  const [positions, setPositions] = useState({
    thrower: { x: 0, y: 0 },
    catcher: { x: 0, y: 0 },
  });

  // State to track a list of saved positions
  const [savedPositions, setSavedPositions] = useState([]);

  // Update the position of a player
  const handleDrag = (player, e, data) => {
    setPositions((prev) => ({
      ...prev,
      [player]: { x: data.x, y: data.y },
    }));
  };

  // Save the current positions
  const handleSave = () => {
    // Save the current positions to the list
    setSavedPositions((prevSaved) => [
      ...prevSaved,
      { ...positions },
    ]);
  };

  const handleRemoveLast = () => {
    setSavedPositions(prevPositions => prevPositions.slice(0, -1));
  };

  const handleClearAll = () => {
    setSavedPositions([]);
  };

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  console.log(savedPositions);

  return (
    <div style={styles.top70}>
      <div>
        <input
          type="text"
          placeholder="TEAM 1 VS TEAM 2"
          value={title}
          onChange={handleChange}
          style={styles.topTitle}
        />
      <div style={styles.pitch}>
          {/* End Zone (Top) */}
        <div style={{ ...styles.endZone, top: 0 }}>Attacking End Zone</div>

  {/* Central Line */}
  <div style={styles.centralLine}></div>

  {/* End Zone (Bottom) */}
  
  <div style={{ ...styles.endZone, bottom: 0 }}>Defending End Zone</div>
        {savedPositions.map((savedPos, index) => (
          <div
            key={index}  // Using the index as a key
            style={{
              ...styles.throwerIcon,
              left: `${savedPos.thrower.x}px`, // x-coordinate
              top: `${savedPos.thrower.y}px`,  // y-coordinate
            }}

          ></div>
        ))}
        {savedPositions.map((savedPos, index) => (
          <div
            key={index}  // Using the index as a key
            style={{
              ...styles.catcherIcon,
              left: `${savedPos.catcher.x}px`, // x-coordinate
              top: `${savedPos.catcher.y}px`,  // y-coordinate
            }}

          ></div>
        ))}
          {/* Draggable "X" 1 */}
          <Draggable
            bounds="parent"
            onDrag={(e, data) => handleDrag("thrower", e, data)}
          >
            <div style={styles.thrower}>Thrower</div>
          </Draggable>

          {/* Draggable "X" 2 */}
          <Draggable
            bounds="parent"
            onDrag={(e, data) => handleDrag("catcher", e, data)}
          >
            <div style={styles.catcher}>Catcher</div>
          </Draggable>
        </div>

      <div style={{}}>
        <p><strong>Saved Positions:</strong></p>
        {savedPositions.length === 0 ? (
          <p>No saved positions yet.</p>
        ) : (
          <ul>
            {savedPositions.map((save, index) => (
              <li key={index}>                
              <DistanceResult 
              TX={Math.round(save.thrower.x)} TY={Math.round(save.thrower.y)} CX={Math.round(save.catcher.x)} CY={Math.round(save.catcher.y)} />
                
              </li>
            ))}
          </ul>
        )}
      </div>
        <div style={{
          background: "#dcf5f5",
          height: '9vh',
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          backgroundColor: 'white',
        }}>

           <Button size="large" variant="contained" color="white" startIcon={<AddIcon />} onClick={handleSave} aria-label="clear all"> Add
          </Button>
          <Button size="large" variant="contained" color="#dcf5e9" startIcon={<UndoIcon />}onClick={handleRemoveLast} aria-label="clear all"> Undo
          </Button>
          <Button size="large" variant="contained" color="#dcf5e9" startIcon={<DeleteIcon />}onClick={handleClearAll} aria-label="clear all"> Clear 
          </Button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pitch: {
    width: "300px",
    height: "500px",
    backgroundColor: "#6BA368",
    position: "relative",
    margin: "20px auto",
    border: "5px solid white",
    borderRadius: "10px",
  },
  throwerIcon: {
    position: "absolute",
    width: "100px",  // Adjust size as needed
    height: "100px", // Adjust size as needed
    background: "radial-gradient(circle, rgba(255, 0, 0, 0.2) 20%, transparent 80%)",
    backgroundSize: "100% 100%",  // Ensure gradient is relative to the size of the icon
    borderRadius: "50%", // Make the shape circular
    top: "50%", // Position it at the middle vertically
    left: "50%", // Position it at the middle horizontally
    transform: "translate(-50%, -50%)",
  },
  catcherIcon: {
    position: "absolute",
    width: "100px",  // Adjust size as needed
    height: "100px", // Adjust size as needed
    background: "radial-gradient(circle, rgba(0, 0, 255, 0.2) 20%, transparent 80%)",
    backgroundSize: "100% 100%",  // Ensure gradient is relative to the size of the icon
    borderRadius: "50%", // Make the shape circular
    transform: "translate(-50%, -50%)"
  },
  endZone: {
    width: "100%",
    height: "80px",
    backgroundColor: "#4C8C4A",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    lineHeight: "80px",
  },
  centralLine: {
    width: "100%",
    height: "2px",
    backgroundColor: "white",
    position: "absolute",
    top: "50%",
    left: 0,
    transform: "translateY(-50%)",
  },
  thrower: {
    width: "30px",
    height: "30px",
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    position: "absolute",
  },
  catcher: {
    width: "30px",
    height: "30px",
    backgroundColor: "blue",
    color: "white",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    cursor: "pointer",
    position: "absolute",
  },
  liveinfo: {
    textAlign: "center",
    fontSize: "16px",
    marginTop: "20px"
  },
  savedinfo: {
    textAlign: "center",
    marginBottom: "100px",
    fontSize: "16px",
    marginTop: "20px"
  },
  top70 : {
    width: '100%',
    height: '70vh',
    backgroundColor: '#F5F5DC',
  },
  topTitle: {
    fontSize: '2rem', // Similar to h1
    overflow: 'hidden',
    width: '100%',
    marginTop: "20px",
    textAlign: "center",
    fontWeight: 'bold',
    border: 'none', // Remove the box
    outline: 'none', // Remove focus border
    backgroundColor: 'transparent', // Transparent background for a cleaner look
  }
};

export default UltimateFrisbeePitch;