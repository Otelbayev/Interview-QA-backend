import File from "../models/fileModel.js";

export const createFile = async (req, res) => {
  try {
    const newFile = new File({
      name: req.body.name,
      file: req.file.path,
    });
    await newFile.save();
    res.status(201).json(newFile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAllFile = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getByIdFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });
    res.status(200).json(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateFile = async (req, res) => {
  try {
    const updatedFile = await File.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        file: req.file ? req.file.path : undefined,
      },
      { new: true }
    );
    if (!updatedFile)
      return res.status(404).json({ message: "File not found" });
    res.status(200).json(updatedFile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteFile = async (req, res) => {
  try {
    const deletedFile = await File.findByIdAndDelete(req.params.id);
    if (!deletedFile)
      return res.status(404).json({ message: "File not found" });
    res.status(200).json({ message: "File deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


