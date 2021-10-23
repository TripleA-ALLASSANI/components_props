import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Alert } from "react-bootstrap";

function Profile({ bio, fullName, handleName, img, name, profession }) {
    return (
    <Container>
        <Alert variant="muted">{handleName(name)}</Alert>
        <Card className="mb-3 mt-3" style={{ color: "#000" }}>
        <Card.Img src={img} />
        <Card.Body>
            <Card.Title>
            <h2>{fullName}</h2>
            </Card.Title>
            <Card.Text>
            <h3>{profession}</h3>
            </Card.Text>
            <Card.Text>
            <h4>{bio}</h4>
            </Card.Text>
        </Card.Body>
        </Card>
    </Container>
    );
}

Profile.propTypes = {
    bio: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
};

Profile.defaultProps = {
    bio: "Hi humans! Abdoul Aziz here, I like development, new challenges, profitable business and sports. I like to have fun whenever I get the chance.",
    fullName: "ABDOUL AZIZ ALLASSANI",
    name: "Your Name, you, the profile user",
    profession: "Developper",
};

export default Profile;
