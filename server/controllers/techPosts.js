import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/postTeacher.js';

const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        const post = await Post.find();


        res.status(200).json(post);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}


export const getPost = async (req, res) => { 
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {

    const { photo, Register_No, Full_Name, Address, Birthday_Date, Phone_No, Email, Job_Roll, Date_of_start} = req.body;

    const newPost = new Post({ photo, Register_No, Full_Name, Address, Birthday_Date, Phone_No, Email, Job_Roll, Date_of_start });

    try {

        await newPost.save();

        res.status(201).json(newPost);
        
    } catch (error) {

        res.status(409).json({message: error.message});
        
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { photo, Register_No, Full_Name, Address, Birthday_Date, Phone_No, Email, Job_Roll, Date_of_start } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { photo, Register_No, Full_Name, Address, Birthday_Date, Phone_No, Email, Job_Roll, Date_of_start }; 

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Post.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;