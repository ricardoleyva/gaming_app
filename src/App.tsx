import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>Alert example</Alert>
      )}<br/>
      <Button color="light blue" onClick={() => setAlertVisible(true)}>
        Press me!
      </Button>
    </div>
  );
}

export default App;
