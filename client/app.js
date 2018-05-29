import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor'

Meteor.subscribe('allPosts');
Meteor.subscribe('comments');