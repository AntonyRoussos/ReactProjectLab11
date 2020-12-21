import React from "react";
import { useMemo, useState } from "react";
import { CardDeck } from "react-bootstrap";
import Requests from "../Requests/Requests";
import { CourseCard } from "./CourseCard";

export const AllCourses = () => {
  const [courses, setCoursers] = useState([]);

  useMemo(() => {
    Requests.getCourses().then((response) => {
      setCoursers(response.data);
    });
  }, []);


  return (
    <div>
      <CardDeck>
      {courses.map((course,index) => {
        return  <CourseCard key={index} course={course}></CourseCard>;
      })}
      </CardDeck>
    </div>
  );
};

