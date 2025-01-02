import TechDetail from "../models/techDetailModel.js";

export const createDetailTech = async (req, res) => {
  const { tech_id, title, text } = req.body;

  try {
    const newDetail = await TechDetail.create({
      tech_id,
      title,
      text,
    });
    res.status(201).json({ message: "Created successfully", newDetail });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const getDetailTech = async (req, res) => {
  try {
    const details = await TechDetail.find();
    res.status(200).json(details);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const updateDetailTech = async (req, res) => {
  try {
    await TechDetail.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteDetailTech = async (req, res) => {
  try {
    await TechDetail.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailTechById = async (req, res) => {
  try {
    const detail = await TechDetail.findById(req.params.id);
    res.status(200).json(detail);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getDetailTechByTech = async (req, res) => {
  try {
    const details = await TechDetail.find({ tech_id: req.params.id });
    res.status(200).json(details);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
