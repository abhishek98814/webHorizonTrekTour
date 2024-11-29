import OverView from "../model/trekOverView.model.js";
import {Category} from "../model/category.model.js"; 

const createOverView = async (req, res) => {
  try {
    const {
      banner,
      category, 
      shortDesc,
      overView,
      included,
      excluded,
      importantInformation,
      departureAndAvailability,
      equipment,
      review,
      title,
      faq,
      itinerary,
      trekMap,
    } = req.body;

    const validCategory = await Category.findById(category);
    if (!validCategory) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    const newOverView = new OverView({
      banner,
      title,
      category,  
      shortDesc,
      overView,
      included,
      excluded,
      importantInformation,
      departureAndAvailability,
      equipment,
      review,
      faq,
      itinerary,
      trekMap,
    });

    const savedOverView = await newOverView.save();
    res.status(201).json(savedOverView);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error creating overview", error });
  }
};

const getAllOverViews = async (req, res) => {
  try {
    
    const overviews = await OverView.find().populate('category');
    res.status(200).json(overviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching overviews", error });
  }
};


const getOverViewById = async (req, res) => {
  try {
    const { id } = req.params;
    const overview = await OverView.findById(id).populate('category');

    if (!overview) {
      return res.status(404).json({ message: "Overview not found" });
    }

    res.status(200).json(overview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching the overview", error });
  }
};

const updateOverView = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    if (updateData.category) {
      const validCategory = await Category.findById(updateData.category);
      if (!validCategory) {
        return res.status(400).json({ message: "Invalid category ID" });
      }
    }

    const updatedOverView = await OverView.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedOverView) {
      return res.status(404).json({ message: "Overview not found" });
    }

    res.status(200).json(updatedOverView);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating overview", error });
  }
};

const deleteOverView = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOverView = await OverView.findByIdAndDelete(id);

    if (!deletedOverView) {
      return res.status(404).json({ message: "Overview not found" });
    }

    res.status(200).json({ message: "Overview deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting overview", error });
  }
};

export {
  createOverView,
  getAllOverViews,
  getOverViewById,
  updateOverView,
  deleteOverView,
};
