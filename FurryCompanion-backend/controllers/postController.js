const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const postModel = require("../models/postModel");
const ErrorHandler = require("../utils/errorHandler");

//Create a new post
exports.createPost = catchAsyncErrors(async (req, res, next) => {
  const { content } = req.body;
  const post = await Post.create({
    content,
    likes: 0,
    numOfComments: 0,
  });
  sendToken(user, 200, res);
});

//Delete a post
exports.deletePost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(
      new ErrorHandler(`User not found with ID: ${req.params.id}`, 400)
    );
  }
  await post.remove();
  res.status(200).json({
    success: true,
    message: "Post Deleted Successfully",
  });
});

//Update a post
exports.update = catchAsyncErrors(async (req, res, next) => {
  const { content } = req.body;
  const post = await Post.findByIdAndUpdate(req.params.id, content, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!post) {
    return next(
      new ErrorHandler(`Post not found with ID: ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
  });
});

//Like a post
exports.likePost = catchAsyncErrors(async (req, res, next) => {
  const id = req.body.id;
  const oldPost = Post.findById(id);
  const likes = oldPost.likes;
  likes = likes + 1;
  oldPost = {
    Likes: likes,
  };
  const post = Post.findByIdAndUpdate(id, likes, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!post) {
    return next(
      new ErrorHandler(`Post not found with ID: ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
  });
});

//Unlike a post
exports.unLikePost = catchAsyncErrors(async (req, res, next) => {
  const id = req.body.id;
  const oldPost = Post.findById(id);
  const likes = oldPost.likes;
  likes = likes - 1;
  oldPost = {
    Likes: likes,
  };
  const post = Post.findByIdAndUpdate(id, likes, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!post) {
    return next(
      new ErrorHandler(`Post not found with ID: ${req.params.id}`, 400)
    );
  }
  res.status(200).json({
    success: true,
  });
});
//Get all posts
exports.getAllPosts = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.find();
  if (!post) {
    return next(new ErrorHandler("No post found"));
  }
  res.success(200).json({
    success: true,
    post,
  });
});
//Get single post
exports.getPost = catchAsyncErrors(async (req, res, next) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    return next(new ErrorHandler("No post found"));
  }
  res.success(200).json({
    success: true,
    post,
  });
});
//TO-DO::Put/Edit/Delete Comment
//TO-DO::Functionality to like a Comment
