const Content = require('../models/content');

exports.getAllContent = async (req, res) => {
  const contents = await Content.find();
  res.json(contents);
};

exports.addContent = async (req, res) => {
  const newContent = new Content(req.body);
  await newContent.save();
  res.status(201).json(newContent);
};
