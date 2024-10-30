import { useEffect, useState } from "react";
import { getAllTodo } from "./api/requests";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getAllTodo(true)
      .then((response) => {
        setData(response.todos);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>LIST OF TODOs</h1>
      {isLoading ? <p>LOADING</p> : null}
      {isError ? <p>ERROR</p> : null}
      {!isLoading && !isError ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.todo}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default App;
