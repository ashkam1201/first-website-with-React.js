import './App.css';
import {Card, Button} from "react-bootstrap";

function About() {
    return(
        <div>
       <h1>About me</h1>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
        <Card.Body>
            <Card.Title>Adrian Hagjija</Card.Title>
            <Card.Text>
                I'm Adrian 19 years old and i love web development
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
        </div>
    );
}


export default About;