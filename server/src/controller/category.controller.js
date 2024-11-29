import { Category } from "../model/category.model.js";


const createCategory = async (req, res) => {
    try {
        const { country, category } = req.body;

        if (!country || !category) {
            return res.status(400).json({ message: "Country and category are required." });
        }

        const chekCountry = Category.findOne(country);

        if(chekCountry){
            return res.json("Country is available")
        }

        const newCategory = new Category({ country, category });
        const savedCategory = await newCategory.save();

        res.status(201).json(savedCategory);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to create category.", error: err.message });
    }
};

const getCategory = async (req, res) => {
    try {
        const categories = await Category.find();

        if (!categories) {
            return res.status(404).json({ message: "Categories not found" });
        }

        res.status(200).json(categories);
    } catch (err) {
        console.error(err);
        if (!res.headersSent) { 
            res.status(500).json({ message: "Failed to retrieve categories", error: err.message });
        }
    }
};




export{
    createCategory,
    getCategory 
}