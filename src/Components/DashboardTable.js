import React from "react";
import {Table ,Button} from "react-bootstrap";
import { Link } from "react-router-dom";



export const DashboardTable = ({ course }) => {
  
  return (
    <tbody>
    <tr>
      <td>{course.title}</td>
      <td>{course.open?<span style={{ color: 'green' }}>✔</span>:<span style={{ color: 'red' }}>✘</span>}</td>
      <td><strong>{course.price.normal} €</strong></td>
      <td>{course.dates.start_date} / {course.dates.end_date}</td>
      <td><Link to={"/allCourses/" + course.id}>
        <Button variant="primary">View</Button>
    </Link></td>
    </tr>
  </tbody>
  );
};
