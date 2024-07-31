const express = require("express");
const router = express.Router();
// const sample = require("../models/certiDetails");
const sample = require("../models/certiDetails");


// router.get("/certificates",  async (req, res) => {
//     const details = await sample.find({});
//     res.json(details);
// });

router.get("/view/:id", async (req, res) => {
    const certificateid = req.params.id;
    const details = await sample.findOne({ certificateid: certificateid });
    res.json(details);
});

router.post("/issue", async (req, res) => {
    try {
        
            const data = req.body;
            const result = await sample.create(data);
            res.status(201).json("Added certificate successfully");
        
    } catch (error) {
        console.log(error);
        res.status(500).json("error while adding data");
    }
});




module.exports = router;
