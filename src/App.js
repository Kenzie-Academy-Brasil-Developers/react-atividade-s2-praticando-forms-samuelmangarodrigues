import "./App.css";
import Form from "./components/Form";
import { useState } from "react";
import Card from "./components/Cards";
function App() {
  const [users, setUsers] = useState([]);
  const [isLog, setIsLog] = useState(true);
  const isCad = () => {
    setIsLog(!isLog);
  };
  return (
    <div className="App">
      <header className="App-header">
        {isLog ? (
          <Form setUsers={setUsers} isCad={isCad}></Form>
        ) : (
          <Card users={users} isCad={isCad} />
        )}
      </header>
    </div>
  );
}

export default App;
