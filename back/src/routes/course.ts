import { Router } from "express";
import { createCourse, getAllCourses } from "../handlers/course";

export const courseRouter = Router();


courseRouter.get('/',  (req, res)=> {
    getAllCourses(req,res)});

    courseRouter.post('/',  (req, res)=> {
    createCourse(req,res)});
