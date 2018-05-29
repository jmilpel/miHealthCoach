import { Mongo } from 'meteor/mongo';

Posts = new Mongo.Collection('post');
Comments = new Mongo.Collection('comment');