import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const fetchData = () => {
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg  items-center justify-center">
      <div className="font-bold text-3xl mb-2 text-black mx-auto ml-4">
        FETCH GITHUB USER
      </div>
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
        <input
          type="text"
          value={username}
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={handleInputChange}
          placeholder="Enter GitHub username"
        />
        <button
          className="w-full px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          onClick={fetchData}
        >
          Fetch User Data
        </button>
      </div>

      <div className=" mt-6 mx-auto rounded w-3/4 overflow-hidden shadow-lg bg-gradient-to-r from-pink-300 to-purple-400">
        {user && (
          <div className="px-6 py-4">
            <img src={user.avatar_url} alt="Profile" />
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">NAME:</span>{" "}
              <h2 className="text-2xl font-bold"> {user.name}</h2>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">LOGIN:</span>
              <p className="text-2xl font-bold">{user.login}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">BIO:</span>
              <p className="text-2xl font-bold">{user.bio}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">id:</span>
              <p className="text-2xl font-bold">{user.id}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">url:</span>
              <p className="text-2xl font-bold">{user.url}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">followers_url:</span>
              <p className="text-2xl font-bold">{user.followers_url}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">following_url:</span>
              <p className="text-2xl font-bold">{user.following_url}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">gists_url:</span>
              <p className="text-2xl font-bold">{user.gists_url}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">
                organizations_url:
              </span>
              <p className="text-2xl font-bold">{user.organizations_url}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">events_url:</span>
              <p className="text-2xl font-bold">{user.events_url}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">blog:</span>
              <p className="text-2xl font-bold">{user.blog}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">hireable:</span>
              <p className="text-2xl font-bold">{user.hireable}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">twitter_username:</span>
              <p className="text-2xl font-bold">{user.twitter_username}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">public_repos:</span>
              <p className="text-2xl font-bold">{user.public_repos}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">followers:</span>
              <p className="text-2xl font-bold">{user.followers}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">following:</span>
              <p className="text-2xl font-bold">{user.following}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">email:</span>
              <p className="text-2xl font-bold">{user.email}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">created_at:</span>
              <p className="text-2xl font-bold">{user.created_at}</p>
            </div>
            <div className="flex">
              <span className="mr-4 text-xl font-bold ">last updated_at:</span>
              <p className="text-2xl font-bold">{user.updated_at}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
