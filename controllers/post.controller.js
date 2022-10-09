const db = require("../models");
const Post = db.Post;
const User = db.User
const { validatePost } = require('../models/post')


// Create and Save a new Post
exports.create = async (req, res) => {
    
    const { error } = validatePost(req.body)
    if (error) {
        return res.status(400).json({ error: error.details });
    }
    try {
        const post = await Post.create({
            ...req.body,
            userId: req.user.id
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
                  include: [
                    [{ model: User }]
                  ]
            })
            // .populate("client personnel", '-password');

        return res.status(200).json({ posts });
    } catch (error) {
        console.log("error: ", error)
        return res.status(400).json({ errors: error.message });
    }
}