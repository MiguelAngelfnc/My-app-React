import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      fetch("https://api.github.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          return response.json();
        })
        .then((data) => {
          setUsers(data);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <div>
        <h2>Github Users</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              
              <Link to={`/users/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
        <Outlet/>
      </div>
    );
  }