const express = require('express');
const router = express.Router();
const authorController = require("../../controllers/authorController")

router.route("/").post(authorController.CreateAuthorSubmitController);
router.route("/").get(authorController.GetAuthorSubmitController);
router.route("/get-paper-by-email").get(authorController.GetAuthorSubmitByEmailController);
router.route("/:id").get(authorController.GetAuthorSubmitByIdController);

module.exports = router;