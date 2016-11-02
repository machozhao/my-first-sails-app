/**
 * AuthorController
 *
 * @description :: Server-side logic for managing Authors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  bios: function(req, res) {
    Author.find({})
      .then(function (authors) {
        console.log("authors = ",authors);
        var bs = [];
        authors.forEach(function (author) {
          bs.push({
            name: author.fullName,
            bio: author.bio
          });
        });
        res.json(bs);
      })
      .catch(function (err) {
        console.log(err);
        res.status(500)
          .json({ error: err });
      });
  }	
};

