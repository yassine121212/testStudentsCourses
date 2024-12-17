
export type Courses = {
    id: number;
    name: string;
    availablePlaces: number;
    sss: number;
  };
 
  export type Students = {
    id: number;
    email: string;
    fullName: string;
  };

  export type StudentsCourses = {
    course: Courses;
    Student: Students;
    studentId: number;
    courseId: number;
  };
 