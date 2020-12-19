const axios = require("axios");

const getCourses = () => {
  return axios({
    method: "get",
    url: "http://127.0.0.1:3001/courses/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
};

const getCourses5 = () => {
  return axios({
    method: "get",
    url: "http://127.0.0.1:3001/courses/?_limit=5",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
};

const getCourse = (courseID) => {
  return axios({
    method: "get",
    url: "http://127.0.0.1:3001/courses/" + courseID,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
};

const deleteCourse = (courseID) => {
  return axios({
    method: "delete",
    url: "http://127.0.0.1:3001/courses/" + courseID,
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
};

const updateCourse = (courseID, course) => {
  return axios({
    method: "put",
    url: "http://127.0.0.1:3001/courses/" + courseID,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify()
  }).then((response) => {
    return response;
  });
};

const getInsructors = () => {
  return axios({
    method: "get",
    url: "http://127.0.0.1:3001/instructors/",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
};

const getStats = () => {
  return axios({
    method: "get",
    url: "http://127.0.0.1:3001/stats",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response;
  });
};

const Requests = {
  getCourses: getCourses,
  getCourses5: getCourses5,
  getCourse: getCourse,
  deleteCourse: deleteCourse,
  updateCourse: updateCourse,
  getInsructors: getInsructors,
  getStats:getStats,
};

export default Requests;
