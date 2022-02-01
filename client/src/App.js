import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, fetchUsers } from "./redux/usersSlice";
import Navbar from "./components/nav/Navbar";
import UserList from "./components/user-list/UserList";
import AddUserDialog from "./components/add-user/AddUserDialog";
import SearchBar from "./components/search-bar/SearchBar";
import Loader from "./components/loader/Loader";
import usersdata from "./data/users.json";
import "./App.css";
import { Grid } from "@mui/material";

function App() {
  const dispatch = useDispatch();
  const { userList, loading, error } = useSelector((state) => state.users);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState(userList);

  useEffect(() => {
    dispatch(fetchUsers());
    // addUsersFromJson();
  }, []);

  useEffect(() => {
    const filtered = userList.filter((user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredList(filtered);
  }, [searchTerm, userList]);

  const onSearchChage = (event) => {
    setSearchTerm(event.target.value);
  };

  const addUsersFromJson = () => {
    usersdata.forEach((user) => dispatch(addUser(user)));
  };

  return (
    <div className="App">
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <Navbar />
          {loading ? (
            <Loader />
          ) : (
            <Grid container direction="column">
              <Grid
                item
                container
                justifyContent="center"
                sx={{ marginTop: "20px" }}
              >
                <Grid item>
                  <AddUserDialog userList={userList} />
                </Grid>
                <SearchBar searchChange={onSearchChage} />
              </Grid>
              <UserList userList={searchTerm ? filteredList : userList} />
            </Grid>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
