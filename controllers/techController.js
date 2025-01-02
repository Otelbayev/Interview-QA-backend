import Tech from "../models/techModel.js";

export const createTech = async (req, res) => {
  const { name, icon, className, desc, keys, title, status } = req.body;

  try {
    const newTech = await Tech.create({
      name,
      icon,
      className,
      desc,
      keys,
      title,
      status,
    });
    res.status(201).json({ message: "Created successfully", newTech });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTechs = async (req, res) => {
  try {
    const techs = await Tech.find();
    res.status(200).json(techs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllActiveTechs = async (req, res) => {
  try {
    const techs = await Tech.find({ status: true });
    res.status(200).json(techs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTech = async (req, res) => {
  try {
    const tech = await Tech.findById(req.params.id);
    res.status(200).json(tech);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTech = async (req, res) => {
  try {
    const tech = await Tech.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTech = async (req, res) => {
  try {
    const tech = await Tech.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Deleted successfully",
      id: tech.id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
