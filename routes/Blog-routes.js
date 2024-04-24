import express from 'express';
import { getAllBlogs, updateBlog, AddBlog } from '../controllers/Blog-controller';


const blogrouter = express.Router();

blogrouter.get("/",getAllBlogs);
blogrouter.post("/add",AddBlog);
blogrouter.post("/update:id",updateBlog);

export default blogrouter;