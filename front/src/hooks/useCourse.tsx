import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Courses } from '../types';


const apiUrl = import.meta.env.VITE_API_URL;

const useCourse = () => {
  const [courses, setCourses] = useState<Courses[]>();
 
  const fetchCourses= async() => {
    const coursesData= await axios.get(`${apiUrl}/courses/`) as Courses[]
    setCourses(coursesData)
  }
  
  useEffect(() => {
    fetchCourses()
    console.log(apiUrl)
  }, []);

  return { courses };
};

export default useCourse;