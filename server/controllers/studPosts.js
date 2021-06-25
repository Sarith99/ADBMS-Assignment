import express from 'express';
import mongoose from 'mongoose';

import Post from '../models/postStud.js';

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

    const { photo, name1, name2, email, dob, doa, admissionNo, classAdmitted, address, contactNo, race, religion, house, parentDetails} = req.body;

    const newPost = new Post({photo, name1, name2, email, dob, doa, admissionNo, classAdmitted, address, contactNo, race, religion, house, parentDetails});

    try {

        await newPost.save();

        res.status(201).json(newPost);
        
    } catch (error) {

        res.status(409).json({message: error.message});
        
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { photo, name1, name2, email, dob, doa, admissionNo, classAdmitted, address, contactNo, race, religion, house, parentDetails } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id: ${id}`);

    const updatedPost = { photo, name1, name2, email, dob, doa, admissionNo, classAdmitted, address, contactNo, race, religion, house, parentDetails , _id: id };

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