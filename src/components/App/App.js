import "./App.css";
import React from "react";
import data from "./data";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import Profile from "../profile/Profile";
import { Container } from "react-bootstrap";


function handleName(name) {
  alert(name);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          {data.map((profile) => (
            <Profile
              fullName={profile.fullName}
              bio={profile.bio}
              profession={profile.profession}
              name = {profile.name}
              handleName={handleName}
              img={profile.src}
              >
            </Profile>
          ))}
        </Container>
      </header>
    </div>
  );
}

export default App;
