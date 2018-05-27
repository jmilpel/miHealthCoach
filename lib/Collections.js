import { Mongo } from 'meteor/mongo';

Posts = new Mongo.Collection('post');
console.log('Post collection created');