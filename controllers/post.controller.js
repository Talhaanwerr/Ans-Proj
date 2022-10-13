const db = require("../models");
const Post = db.Post;
const User = db.User
const { validatePost } = require('../models/post');
const { saveFileToS3, getFileFromS3 } = require("../services/fileUploadService");


// Create and Save a new Post
exports.create = async (req, res) => {

    const [ response, filename ] = await saveFileToS3(req.file)
    
    const { error } = validatePost(req.body)
    if (error) {
        return res.status(400).json({ error: error.details });
    }
    try {
        const post = await Post.create({
            ...req.body,
            userId: req.user.id,
            image: filename
        })
        return res.status(201).json({ post });
    } catch (error) {
        return res.status(400).json({ errors: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        let posts = await Post
            .findAll({
                //   include: [
                //     [{ model: User }]
                //   ]
            })
            // .populate("client personnel", '-password');
        
        for (const post of posts) {
            const url = await getFileFromS3(post.image)
            post.image = url
        }

        return res.status(200).json({ posts });
    } catch (error) {
        console.log("error: ", error)
        return res.status(400).json({ errors: error.message });
    }
}

exports.getById = async (req, res) => {
    const { id } = req.params;
    try {
        let post = await Post
            .findOne({ where: { id: id } })
            // .populate("client personnel", '-password');
        if (post == null) {
            return res.status(404).json({ errors: [{ message: "Post does not exist..." }] });
        }
        return res.status(200).json({ post });
    } catch (error) {
        return res.status(400).json({ errors: error.message });
    }
}

exports.deleteById = async (req, res) => {
    const { id } = req.params;

    try {
        let post = await Post.findOne({ where: { id }});
        if (post == null) {
            return res.status(404).json({ errors: [{ message: "Post does not exist..." }] });
        }

        if(req.user.id != post.userId){
            return res.status(403).send({ status: "error", msg: "You are not authorized to delete this post" });
        }

        let deletedPost = await Post.destroy({ where: { id }});
        if(deletedPost){
            return res.status(200).json({ success: "Post Deleted Successfully", deletedPost });
        }

    } catch (error) {
        return res.status(400).json({ errors: error.message });
    }
}

exports.updateById = async (req, res) => {
    const { id } = req.params;
    const query = req.body
    
    try {
        let post = await Post.findOne({ where: { id }});
        if (post == null) {
            return res.status(404).json({ errors: [{ message: "Post does not exist..." }] });
        }

        if(req.user.id != post.userId){
            return res.status(403).send({ status: "error", msg: "You are not authorized to update this post" });
        }

        let updatedPost = await await Post.update(query, { where: { id }});
        if(updatedPost){
            return res.status(200).json({ success: "Post Updated Successfully", updatedPost });
        }


    } catch (error) {
        return res.status(400).json({ errors: error.message });
    }
}

