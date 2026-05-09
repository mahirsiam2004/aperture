const express = require("express");
const Book = require("../models/Book");
const router = express.Router();



router.get("/",async (req,res)=>{
    try{
        const books = await Book.find();
        req.json(books);
    }
    catch(error){
       res.status(500).json({ message: error.message });
    }
});

// GET /api/books/featured
router.get("/featured", async (req, res) => {
  try {
    const books = await Book.find({ isFeatured: true });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.get("/top-rated", async (req, res) => {
  try {
    const books = await Book.find({ rating: { $gte: 4 } }).sort({ rating: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
 

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






module.exports=router;