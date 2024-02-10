import { useState } from "react";
import UserProfile from "./Components/UserProfile";
import "./App.css";

const intialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
    name: "Esther Howard",
    role: "Software Developer",
  },
  {
    uniqueNo: 2,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png",
    name: "Floyd Miles",
    role: "Software Developer",
  },
  {
    uniqueNo: 3,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png",
    name: "Jacob Jones",
    role: "Software Developer",
  },
  {
    uniqueNo: 4,
    imageUrl: "https://assets.ccbp.in/frontend/react-js/devon-lane-img.png",
    name: "Devon Lane",
    role: "Software Developer",
  },
];

const App = () => {
  let [searchInput, setSearchInput] = useState("");
  let [userDetailsList, setUserDetailsList] = useState(intialUserDetailsList);

  let onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  let searchResults = userDetailsList.filter((eachUser) =>
    eachUser.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  let deleteUser = (uniqueNo) => {
    let filteredUsersData = userDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    );
    setUserDetailsList(filteredUsersData);
  };

  return (
    <div className="app-container">
      <h1 className="title">Users List</h1>
      <input type="search" onChange={onChangeSearchInput} value={searchInput} />
      <ul className="list-container">
        {searchResults.map((eachUser) => (
          <UserProfile
            userDetails={eachUser}
            key={eachUser.uniqueNo}
            deleteUser={deleteUser}
          />
        ))}
      </ul>
    </div>
  );
};
export default App;
