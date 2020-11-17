import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import HouseRentDetails from './Component/HouseRentDetails/HouseRentDetails/HouseRentDetails';
import { createContext, useState } from 'react';
import Dashboard from './Component/Dashboard/Dashboard';
import BookingList from './Component/BookingList/BookingList/BookingList';
import MyRent from './Component/MyRent/MyRent/MyRent';
import AddRentHouse from './Component/AddRentHouse/AddRentHouse/AddRentHouse';
import Login from './Component/Login/Login';

export const UserContext = createContext()

function App() {
  const [houseDetail, setHouseDetail] = useState({})
  console.log(houseDetail)
  return (
    <UserContext.Provider value={[houseDetail, setHouseDetail]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/houseDetail">
            <HouseRentDetails></HouseRentDetails>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/bookingList">
            <BookingList></BookingList>
          </Route>
          <Route path="/myRent">
            <MyRent></MyRent>
          </Route>
          <Route path="/addRentHouse">
            <AddRentHouse></AddRentHouse>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
