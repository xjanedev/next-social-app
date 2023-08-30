"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [{
    title: 'Username',
    name: 'username',
    type: 'string'
  }, {
    title: 'Name',
    name: 'name',
    type: 'string'
  }, {
    title: 'Email',
    name: 'email',
    type: 'string'
  }, {
    title: 'Image',
    name: 'image',
    type: 'string'
  }, {
    title: 'Following',
    name: 'following',
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
    title: 'Followers',
    name: 'followers',
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
    title: 'Bookmarks',
    name: 'bookmarks',
    type: 'array',
    of: [{
      type: 'reference',
      to: [{
        type: 'post'
      }]
    }],
    validation: function validation(Rule) {
      return Rule.unique();
    }
  }],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username'
    }
  }
};
exports["default"] = _default;