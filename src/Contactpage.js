import './App.css';
import {Form, FormLabel, FormControl, FormGroup, Button} from "react-bootstrap";

function Contactpage() {
    return(
        <div>
            <Form method="POST" action="/post-feedback">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" placeholder="name" required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" required />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <a href={"/view-feedbacks"}>View feedbacks</a>
        </div>
    );
}


export default Contactpage;

