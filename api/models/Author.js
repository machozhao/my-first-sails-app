/**
 * Author.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    fullName: {
      type: 'string',
      required: true
    },
    bio: {
      type: 'string'
    },
    username: {
      type: 'string',
      unique: true,
      required: true
    },
    email: {
      type: 'email',
      required: true
    },
    entries: {
      collection: 'entry',
      via: 'author'
    }
  }
};
