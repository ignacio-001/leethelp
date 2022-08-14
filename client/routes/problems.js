const express = require("express");
const { showproblems, createTask } = require("../controller/problem");
const router = express.Router();
router.route("/send").post( createTask );
router.route("/allproblems").get( showproblems );
module.exports = router;
