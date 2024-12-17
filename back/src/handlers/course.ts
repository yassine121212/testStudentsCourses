import { Request, Response } from "express";
 import { prisma } from "..";
import { CourseCreateDto } from "../dto/course.dto";
import { Courses } from "../../types";
 


export const getAllCourses= async(req:Request,res:Response) =>{
 
    const allCourses = await prisma.course.findMany() 
    return res.status(200).json(allCourses)

 
    
}
export const createCourse= async(req:Request<{},{},CourseCreateDto>,res:Response)=>{
 
    const course = await prisma.course.create({
        data: {
          name: req.body.name,
          availablePlaces:req.body.availablePlaces
        },
      })
      return res.status(200).json(course)
 
    
}