import './App.css';
import {Form, Button, Col} from "react-bootstrap";
import React from "react";


class ContactPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prenom: null,
      date: null
    };
  }

  onChangePrenom = (val) => {
    this.setState({prenom: val.target.value})
  }

  onChangeDate = (val) => {
    this.setState({date: val.target.value})
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const axios = require('axios')
    const json = {
      prenom: this.state.prenom,
      date: this.state.date
    }
    const result = await axios.post('http://localhost:8000/marco', {json})
    console.log(result)
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="mid">
              <Form.Label>Member ID</Form.Label>
              <Form.Control required type="id" value={this.state.prenom} onChange={this.onChangePrenom}/>
            </Form.Group>
            <Form.Group as={Col} controlId="joiningDate">
              <Form.Label>Joining Date</Form.Label>
              <Form.Control required type="date" value={this.state.date} onChange={this.onChangeDate}/>
            </Form.Group>
          </Form.Row>
          <Button variant="primary" onClick={this.handleSubmit}>
            Create
          </Button>
        </Form>
        <a href={"/view-feedbacks"}>View feedbacks</a>
      </div>
    );
  };
}

export default ContactPage;

