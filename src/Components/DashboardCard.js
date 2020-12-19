import React from "react";
import {Card} from "react-bootstrap";



export const DashboardCard = ({ stat }) => {
  
  return (
  
    <Card style={{ maxWidth: '21%', minWidth: '21%' ,flex: 1 ,padding: 5 , margin: '2%',backgroundColor: "#E2FCEE"}}>
    <Card.Body>
      <Card.Title>{stat.title}: <span style={{color: "blue"}}>{stat.amount}</span></Card.Title>
    </Card.Body>
  </Card>
  );
};
