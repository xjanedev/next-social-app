"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [{
    title: 'Author',
    name: 'author',
    type: 'reference',
    to: [{
      type: 'user'
    }]
  }, {
    title: 'Photo',
    name: 'photo',
    type: 'image'
  }, {
    title: 'Likes',
    name: 'likes',
    type: 'array',
    of: [{
      type: 'reference',
      to: [{
        type: 'user'
      }]
    }],
    validation: function validation(Rule) {
      return Rule.unique();
    }
  }, {
    title: 'Comments',
    name: 'comments',
    type: 'array',
    of: [{
      title: 'Comment',
      name: 'comment',
      type: 'document',
      fields: [{
        title: 'Author',
        name: 'author',
        type: 'reference',
        to: [{
          type: 'user'
        }]
      }, {
        title: 'Comment',
        name: 'comment',
        type: 'string'
      }]
    }]
  }],
  preview: {
    select: {
      title: 'comments.0.comment',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo'
    },
    prepare: function prepare(selection) {
      var title = selection.title,
          authorName = selection.authorName,
          authorUsername = selection.authorUsername,
          media = selection.media;
      return {
        title: title,
        subtitle: "by ".concat(authorName, " (").concat(authorUsername, ")"),
        media: media
      };
    }
  }
};
exports["default"] = _default;