import React from 'react';
import { Form ,Button} from 'react-bootstrap';
import Requests from "../Requests/Requests";

export default class EditCourse extends React.Component {

   
    constructor() {
        super();
            this.state = {

                id: '',
                title: '',
                price: {},
                dates: {},
                duration: '',
                open: false,
                instructors: [],
                description: '',
                imagePath: '',
                success: false,
                flag: true
            };
           
    }
    Handler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });

    }
    getData=() =>{
        Requests.getCourse(this.props.dataFromParent).then((response) => {
       
        this.setState({ title: response.data.title,price: response.data.price,dates: response.data.dates,
            open:response.data.open, imagePath:response.data.imagePath, description:response.data.description,
            duration:response.data.duration,flag:false

         });

        
      })
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
        
        fetch("http://localhost:3001/courses/"+this.props.dataFromParent, {
            method: 'PUT',
            body: JSON.stringify({
                id: this.props.dataFromParent,
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
        if(this.state.flag){
            this.getData();
        }
        const success = this.state.success;
        if (success) {
            
                window.location.reload();
            
        }
        return (
            <div className="myform">
                <br />
                <div style={{ textAlign: "center"}}>
                <Form onSubmit={this.submit} >
                    <Form.Group controlId="Title">
                        <Form.Label>Title:</Form.Label>
                        <Form.Control required type="text" name="title" placeholder="Title" defaultValue={this.state.title} onChange={this.Handler} />
                    </Form.Group>

                    <Form.Group controlId="Duration">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control required type="text" name="duration" placeholder="Duration" defaultValue={this.state.duration} onChange={this.Handler} />
                    </Form.Group>

                    <Form.Group controlId="Image">
                        <Form.Label>Image path:</Form.Label>
                        <Form.Control type="text" name="imagePath" placeholder="/image.png" defaultValue={this.state.imagePath} onChange={this.Handler} />
                    </Form.Group>
                    <br />
                    <Form.Group >
                        {this.state.open?<Form.Check type="checkbox" label="Bookable" name="open" onChange={this.CheckboxHandler} defaultChecked />:<Form.Check type="checkbox" label="Bookable" name="open" onChange={this.CheckboxHandler}  />}
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
                        <Form.Control required as="textarea" rows={3} name="description" defaultValue={this.state.description} onChange={this.Handler} />
                    </Form.Group>

                    <h3>Dates</h3>
                    <Form.Row style={{marginLeft:'25%'}}>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>Start date:</Form.Label>
                        <Form.Control required type="date" name="start_date"  defaultValue={this.state.dates.start_date} onChange={this.DatesHandler} />
                    </Form.Group>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>End date:</Form.Label>
                        <Form.Control required type="date" name="end_date"  defaultValue={this.state.dates.end_date} onChange={this.DatesHandler} />
                    </Form.Group>
                    </Form.Row>
                    <br />
                    <h3>Price</h3>
                    <Form.Row style={{marginLeft:'22%'}}>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>Normal:</Form.Label>
                        <Form.Control required type="text" name="normal"  defaultValue={this.state.price.normal} onChange={this.PriceHandler} />
                    </Form.Group>
                    <Form.Group style={{marginLeft:10}}>
                        <Form.Label>Early Bird:</Form.Label>
                        <Form.Control required type="text" name="early_bird"  defaultValue={this.state.price.early_bird} onChange={this.PriceHandler} />
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
