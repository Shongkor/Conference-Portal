const express = require('express');
const router = express.Router();
const reviewerController = require("../../controllers/reviewer.controller")

router.route("/").post(reviewerController.CreateReviewerController);
router.route("/get-reviewer").post(reviewerController.GetReviewerController);
// router.route("/").get(adminController.GetAdminController);

module.exports = router;