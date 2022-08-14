const Problem = require("../models/problems")
// const asyncWrapper = require('../middleware/async')
const showproblems=(async(req,res)=>{
    const problems=await Problem.find({});
    res.status(200).json({problems});
    // return res.send(problems);
})
const createTask = (async (req, res) => {
    const task = await Problem.create(req.body)
    console.log(req);
    res.status(201).json({ task })
  })
module.exports={
showproblems,createTask
}