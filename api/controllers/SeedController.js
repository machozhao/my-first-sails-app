/**
 * SeedController
 *
 * @description :: Server-side logic for managing Seeds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    run: function(req, res) {
        Author.create({
            fullName: "Fred Flintstone",
            bio: "Lives in Bedrock, blogs in cyberspace",
            username: "fredf",
            email: "fred@flintstone.com"
        }).exec(function (err, author) {
            Entry.create({
                title: "Hello",
                body: "Yabba dabba doo!",
                author: author
            }).exec(function (err, created) {
                Entry.create({
                    title: "Quit",
                    body: "Mr Slate is a jerk",
                    author: author.id
                }).exec(function (err, created) {
                    return res.send("Database seeded");
                });
            });
        });
    }
};
