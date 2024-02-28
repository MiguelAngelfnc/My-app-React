import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUsers() {
    const [searchQuery, setSearchQuery] = useState("");
    const [users, setUsers] = useState([]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      fetch(`https://api.github.com/search/users?q=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          setUsers(data.items.map((item) => item.login));
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Enter username"
          />
          <button type="submit">Search</button>
        </form>
        <ul>
          {users.map((user) => (
            <li key={user}>
              <GithubUser username={user} />
            </li>
          ))}
        </ul>
      </div>
    );
  }