import React from 'react';
import { Form ,Button,Alert} from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class NewCourse extends React.Component {
  

    constructor() {
        super();
            this.state = {

                id: '',
                title: '',
                price: [],
                dates: [],
                duration: '',
                open: false,
                instructors: [],
                description: '',
                imagePath: '',
                success: false
            };

    }
    Handler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }
    CheckboxHandler = (event) => {
        let nam = event.target.name
        let val = event.target.checked;
        this.setState({ [nam]: val });
    }
    InstructorsHandler = (event) => {
     
        if (event.target.name === "john") {
            this.state.instructors.push("01");
        }
        if (event.target.name === "yiannis") {
            this.state.instructors.push("02");
        }

    }
    DatesHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ dates: { ...this.state.dates, [nam]: val } });
    }
    PriceHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ price: { ...this.state.price, [nam]: val } });
    }
    
    submit = e => {
        e.preventDefault();
        this.state.id = Math.random()*10000000000000000;
        fetch("http://localhost:3001/courses/", {
            method: 'POST',
            body: JSON.stringify({
                id: this.state.id,
                title: this.state.title,
                price: this.state.price,
                dates: this.state.dates,
                duration: this.state.duration,
                open: this.state.open,
                instructors: this.state.instructors,
                description: this.state.description,
                imagePath: this.state.imagePath

            }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => res.json())
            
        this.setState({ success: true });
        
    }
    render() {
        const success = this.state.success;
        if (success) {
            return (
              <div style={{marginTop: 20, marginLeft: '25%',marginRight: '25%'}}>
              <Alert variant="success">
              <Alert.Heading>Success!</Alert.Heading>
            </Alert>
            <Link to={"/allCourses/"}>
            <Button variant="primary">Back</Button>
            </Link>
        </div>
            )
        }
        return (
            <div className="myform">
                <br />
                <h1>New Course</h1>
                <div style={{marginLeft: '25%',marginRight: '25%', backgroundColor: "#F4EFEE", padding: 10, marginTop: 10, textAlign: "center"}}>
                <Form onSubmit={this.submit} >
                    <Form.Group controlId="Title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required type="text" name="title" placeholder="Title" value={this.state.title} onChange={this.Handler} />
                    </Form.Group>

                    <Form.Group controlId="Duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control required type="text" name="duration" placeholder="Duration" value={this.state.duration} onChange={this.Handler} />
                    </Form.Group>

                    <Form.Group controlId="Image">
                        <Form.Label>Image path:</Form.Label>
                        <Form.Control type="text" name="imagePath" placeholder="/image.png" value={this.state.imagePath} onChange={this.Handler} />
                    </Form.Group>
                    <br />
                    <Form.Group >
                        <Form.Check type="checkbox" label="Bookable" name="open" onChange={this.CheckboxHandler}  />
                    </Form.Group>
                    <br />
                    <h3>Instructors</h3>
                    <br />
                    <Form.Group >
                        <Form.Check type="checkbox" label="John Tsevdos" name="john" onChange={this.InstructorsHandler}  />
                    </Form.Group>
                    <Form.Group >
                        <Form.Check type="checkbox" label="Yiannis Nikolakopoulos" name="yiannis" onChange={this.InstructorsHandler}  />
                    </Form.Group>

                    <br />
                    <Form.Group >
                        <Form.Label>Description</Form.Label>
                        <Form.Control required as="textarea" rows={3} name="description" value={this.state.description} onChange={this.Handler} />
                    </Form.Group>

                    <h3>Dates</h3>
                    <Form.Row style={{marginLeft:'25%'}}>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>Start date:</Form.Label>
                        <Form.Control required type="date" name="start_date" placeholder="dd/mm/yyyy" value={this.state.dates.start_date} onChange={this.DatesHandler} />
                    </Form.Group>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>End date:</Form.Label>
                        <Form.Control required type="date" name="end_date" placeholder="dd/mm/yyyy" value={this.state.dates.end_date} onChange={this.DatesHandler} />
                    </Form.Group>
                    </Form.Row>
                    <br />
                    <h3>Price</h3>
                    <Form.Row style={{marginLeft:'22%'}}>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>Normal:</Form.Label>
                        <Form.Control required type="text" name="normal" placeholder="0 €" value={this.state.price.normal} onChange={this.PriceHandler} />
                    </Form.Group>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>Early Bird:</Form.Label>
                        <Form.Control required type="text" name="early_bird" placeholder="0 €" value={this.state.price.early_bird} onChange={this.PriceHandler} />
                    </Form.Group>
                    </Form.Row>
                    <br />
                    <Button variant="primary" type="submit">
                        Submit
                 </Button>
                </Form>
                </div>
            </div>
        );

    }
}
