import React, { useMemo, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Requests from "../Requests/Requests";



export const NewCourse = () => {

  
    useMemo(() => {
      

    }, []);
  
  
    return (
      <div>
        <h2 style={{textAlign: "center",margin: 10}}>New Course</h2>
        <div style={{marginLeft: '25%',marginRight: '25%', backgroundColor: "#F4EFEE", padding: 10, marginTop: 10, textAlign: "left"}}>
            <Form.Group controlId="Title">
              <Form.Label ><strong>Title:</strong></Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>
            <Form.Group id="Bookable">
               <Form.Check type="checkbox" label="Course Bookable"  />
            </Form.Group>
            <Form.Group controlId="Description">
              <Form.Label><strong>Description:</strong></Form.Label>
              <Form.Control as="textarea" rows={3}  placeholder="Enter course description"/>
            </Form.Group>
            <Form.Group id="Instructors">
              <Form.Label><strong>Instructors:</strong></Form.Label>
                  <Form.Check type="checkbox"  label="John Tsevdos"/>
                  <Form.Check type="checkbox"  label="Yiannis Nikolakopoulos"/>
            </Form.Group>
            <div style={{marginLeft: '20%',marginRight: '20%'}}>
            <Form.Row>
              <Form.Group style={{margin: 10}} controlId="NormalPrice">
                <Form.Label><strong>Normal Price:</strong></Form.Label>
                <Form.Control type="text" placeholder="€" />
              </Form.Group>
              <Form.Group  style={{margin: 10}} controlId="EarlyPrice">
                <Form.Label><strong>Early Price:</strong></Form.Label>
                <Form.Control type="text" placeholder="€" />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group style={{margin: 10}} controlId="StartDate">
                <Form.Label><strong>Start Date:</strong></Form.Label>
                <Form.Control type="text" placeholder="yyyy-mm-dd" />
              </Form.Group>
              <Form.Group  style={{margin: 10}} controlId="EndDate">
                <Form.Label><strong>End Date:</strong></Form.Label>
                <Form.Control type="text" placeholder="yyyy-mm-dd" />
              </Form.Group>
            </Form.Row>
            </div>
            <Form.Group controlId="Duration">
              <Form.Label><strong>Duration:</strong></Form.Label>
              <Form.Control type="text" placeholder="Enter course duration" />
            </Form.Group>
            <Form.Group controlId="ImagePath:">
              <Form.Label><strong>Image Path:</strong></Form.Label>
              <Form.Control type="text" value="/image.png" />
            </Form.Group>
        </div>    
        <Button variant ="info" style={{margin: 10 ,textAlign: "center"}}>Submit
        </Button>
     </div>
    );
};