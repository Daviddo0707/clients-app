const express = require("express");
const router = express.Router();
const usersDal = require("../dals/usersDal");
const helpers = require("../helpers/helpers");

router.get("/users", function (req, res) {
  usersDal
    .getUsers()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      throw error;
    });
});

router.post("/users", function (req, res, next) {
  const user = req.body.user;
  usersDal
    .findUser(user.id)
    .then((response) => {
      if (response.length === 0) {
        helpers
          .findLocation(req.body.user.ipAddress)
          .then(({ city, country }) => {
            user.city = city;
            user.country = country;
            usersDal.addUser(user).then(() => {
              res.send(user);
            });
          })
          .catch((error) => {
            throw error;
          });
      } else {
        throw new Error("Something went wrrrorng");
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error });
    });
});

router.delete("/users/:id", function (req, res) {
  usersDal
    .deleteUser(req.params.id)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      throw error;
    });
});

module.exports = router;
