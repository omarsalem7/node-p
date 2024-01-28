const express = require("express");
const {
  createTour,
  getAllTours,
  getTour,
} = require("../controllers/tour.controller");

const router = express.Router();

router.route("/").get(getAllTours).post(createTour);
router.get("/:id", getTour);

module.exports = router;
