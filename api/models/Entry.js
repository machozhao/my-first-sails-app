/**
 * Entry.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  tableName: "blogentry",
    // this would map to a relational table by this name,
    // or a MongoDB collection, and so on

  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      columnName: 'blogentry_pk'
    },
    title: {
      type: 'string',
      required: true,
      defaultsTo: '',
      columnName: 'blogtitle'
    },
    body: {
      type: 'string',
      required: true,
      defaultsTo: ''
    },
    author: {
      model: 'author'
    }
  }
};
