import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor'
import { GoogleMaps } from 'meteor/dburles:google-maps';
import { Email } from 'meteor/email'

Meteor.subscribe('allPosts');
Meteor.subscribe('comments');
Meteor.subscribe('users');
Meteor.subscribe('usersCount');

GoogleMaps.load();