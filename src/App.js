import { useState } from "react";
import { Button } from "@material-ui/core";
import { BurstMode } from "@material-ui/icons";
import VideoCall from "./components/VideoCall/VideoCall";
function App() {
  const [inCall, setInCall] = useState(false);

  return (
    <div className="App" style={{height:"100%"}}>
      {inCall ? (
        <VideoCall setInCall={setInCall} />
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => setInCall(true)}
        >
          Unirse a la llamada
        </Button>
      )}
    </div>
  );
}

export default App;
