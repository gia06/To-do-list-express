const mongoose = require("mongoose");

const validateId = (req, res, next) => {
  if (mongoose.Types.ObjectId.isValid(req.body.id)) {
    next();
  } else {
    res.status(400).json({
      errors: [
        {
          value: req.body.id,
          msg: "Invalid value",
          param: "id",
          location: "body",
        },
      ],
    });
  }
};

module.exports = { validateId };
