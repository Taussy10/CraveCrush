import { defineField , defineType } from "sanity";

// ( )
export default defineType({
name:"Dish",
title:"Dish Name",
type: "document",

fields: [
 {
   name: 'name',
type: 'string',
title: 'Dish Name' ,
// so that user have to required it's compolsory
validation: rule => rule.required()
 },
 {
 name: 'description',
 type: 'string',
 title: 'Dish Description' ,
 // so that user have to required it's compolsory
 validation: rule => rule.required()
  },
 {
 name: 'image',
 type: 'image',
 title: 'Image of the Dish' ,
 // so that user have to required it's compolsory
 validation: rule => rule.required()
  },
 {
 name: 'price',
 type: 'number',
 title: 'Price of the Dish in USD' ,
 // so that user have to required it's compolsory
 validation: rule => rule.required()
  },


  ]
}
    
 );