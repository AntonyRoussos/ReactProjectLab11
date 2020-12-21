import React, { useMemo, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem, Modal } from "react-bootstrap";
import Requests from "../Requests/Requests";
import EditCourse from "./EditCourse";

const checkInstructor = (instructors,instructorId)=> { 
  return instructors.includes(instructorId)
 } 
export const Course = (props) => {
  const courseID = props.match.params.id;
  const history = props.history;
  const [course, setCourse] = useState({});
  const [instructors, setInstructors] = useState([]);
  useMemo(() => {
    Requests
      .getCourse(courseID)
      .then((response) => setCourse(response.data));
    Requests
      .getInsructors()
      .then((response) => setInstructors(response.data));
  }, []);



  function DeleteCourse() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>Delete</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Attention!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this course?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant ="danger" style={{margin: 10}}
              onClick={(e) =>
                Requests.deleteCourse(courseID).then((response) => {
              
                  history.push("/allCourses")
                })
              }>Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  function UpdateCourse() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="info" style={{margin: 10}} onClick={handleShow}>Update</Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Course</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditCourse dataFromParent = {props.match.params.id}></EditCourse>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
 
  return (
    <div>
    
    <Card border="white" style={{ maxWidth: '75%' ,flex: 1 ,padding: 10 , marginLeft: '15%'}}>
      <Card.Img variant="top" src={window.location.origin + course.imagePath} style={{ height: 500}}/>
      <Card.Body>
       <Card.Title>{course.title}</Card.Title>
       <Card.Text>Price: <strong>{course.price?course.price.normal:""} € </strong>(early bird: {course.price?course.price.early_bird:""} €)</Card.Text>
       <Card.Text>
       {course.open?<span style={{ color: 'green' }}><strong>Bookable</strong></span>:<span style={{ color: 'red' }}><strong>Not Bookable</strong></span>}
       </Card.Text>
       <Card.Text><div dangerouslySetInnerHTML={{ __html: course.description }}></div></Card.Text> 
      </Card.Body>
      <ListGroup className="list-group-flush">
       <ListGroupItem>Start date: {course.dates?course.dates.start_date:""}</ListGroupItem>
       <ListGroupItem>End Date: {course.dates?course.dates.end_date:""}</ListGroupItem>
       <ListGroupItem>Duration: {course.duration}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <UpdateCourse></UpdateCourse>
        <DeleteCourse></DeleteCourse>
      </Card.Body>
      <Card.Body>
       <Card.Title><h3>Instructors:</h3></Card.Title>
       <Card.Text>{instructors.map((instructor, index) => {
        return  checkInstructor(course.instructors?course.instructors:[] , instructor.id)? <div key={index} >
          <h5>{instructor.name.first} {instructor.name.last}</h5>
          <p>Email: {instructor.email}</p>
          <p>{instructor.bio}</p></div>:""
      })}</Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
};
