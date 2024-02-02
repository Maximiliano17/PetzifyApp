//React
import { useState, useEffect } from "react";

function Conexion() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/auth/profiles")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => setData(responseData.user))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setData([]);
      });
  }, []);

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user._id}>
            {user.username}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Conexion;
