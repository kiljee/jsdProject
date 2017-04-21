// Autogenerated from java.template file

var mongoose = require('mongoose'), Schema = mongoose.Schema
var validate = require('mongoose-validator');

var streetValidator = [
  validate({
    validator: 'isLength',
    arguments: [1, 30],
    message: 'Street should be between {ARGS[0]} and {ARGS[1]} characters'
  }),
];
var cityValidator = [
  validate({
    validator: 'isAlpha',
    passIfEmpty: true,
    message: 'City should contain alpha-numeric characters only'
  })
];
var countryValidator = [
  validate({
    validator: 'isAlpha',
    passIfEmpty: true,
    message: 'Country should contain alpha-numeric characters only'
  })
];

var AddressSchema = new mongoose.Schema({
  street:    {type:String, required: true 
 , validate:streetValidator},  city:    {type:String, required: true 
 , validate:cityValidator},  country:    {type:String, required: true 
 , validate:countryValidator}})

module.exports = mongoose.model('AddressSchema', AddressSchema)