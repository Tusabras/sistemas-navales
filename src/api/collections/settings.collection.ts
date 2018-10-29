import {Mongo} from 'meteor/mongo';

export const Properties = new Mongo.Collection('properties');

// if(Settings.find().count === 0){
// Cities.insert({"name": "HOla"});
// }