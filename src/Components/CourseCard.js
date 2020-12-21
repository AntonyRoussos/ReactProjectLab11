import React from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";


export const CourseCard = ({ course }) => {
 
  return (
  
    <Card style={{ maxWidth: '22%', minWidth: '22%' ,flex: 1 ,padding: 10 , margin: 25}}>
      <Card.Img variant="top" src={window.location.origin + course.imagePath} />
      <Card.Body>
    <Card.Title>{course.title}</Card.Title>
    <Card.Text><strong>{course.price.normal} €</strong></Card.Text>
    <Card.Text>
      {course.open?<span style={{ color: 'green' }}><strong>Bookable</strong></span>:<span style={{ color: 'red' }}><strong>Not Bookable</strong></span>}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Start date: {course.dates.start_date}</ListGroupItem>
    <ListGroupItem>End Date: {course.dates.end_date}</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Link to={"/allCourses/" + course.id}>
        <Button variant="primary">View</Button>
    </Link>
  </Card.Body>
    </Card>
  );
};
