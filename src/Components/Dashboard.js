import React from "react";
import { useMemo, useState } from "react";
import Requests from "../Requests/Requests";
import {DashboardCard} from "./DashboardCard";
import {DashboardTable} from "./DashboardTable";
import { Button, CardDeck, Carousel, Table } from "react-bootstrap";
import { Link } from "react-router-dom";


export const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [courses, setCoursers5] = useState([]);

  useMemo(() => {
    Requests.getCourses5().then((response) => {
        console.log("GET COURSES RESPONSE:", response);
        setCoursers5(response.data);
      });
    Requests.getStats().then((response) => {
      console.log("GET STATS RESPONSE:", response);
      setStats(response.data);
    });
  }, []);


  return (
    <div>
      
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={window.location.origin + "/2020-12-04.png"}
            alt="First slide"
            style={{ maxHeight: 300}}
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={window.location.origin + "/unnamed.png"}
            alt="Second slide"
            style={{ maxHeight: 300}}
          />
        </Carousel.Item>
      </Carousel>
      <CardDeck>
      {stats.map((stat,index) => {
        return  <DashboardCard key={index} stat={stat}></DashboardCard >;
      })}
      </CardDeck>
      <div style={{  marginLeft: 50 , marginRight: 50,}}>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Bookable</th>
            <th>Price</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
      {courses.map((course,index) => {
        return  <DashboardTable key={index} course={course}></DashboardTable>;
      })}
      <thead>
          <tr>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> </th>
            <th> <Link to={"/allCourses" }>
        <Button variant="primary">View All</Button>
    </Link></th>
          </tr>
        </thead>
      </Table>
      </div>
    </div>
  
  );
};


