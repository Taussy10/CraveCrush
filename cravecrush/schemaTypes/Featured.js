import { defineField , defineType } from "sanity";

// ( )
export default defineType({
name:"Featured",
title:"Featured Name",
type: "document",

fields: [
 {
name: 'Name',
type: 'string',
title: 'Restaurant Name' ,
// so that user have to required it's compolsory
validation: rule => rule.required()
 },
 {
 name: 'Description',
 type: 'string',
 title: 'Restaurant Description' ,
 // so that user have to required it's compolsory
 validation: rule => rule.required()
  },
 {
 name: 'Image',
 type: 'image',
 title: 'Restaurant of the Dish' ,
 // so that user have to required it's compolsory
  },
 {
 name: 'Restaurant',
 type: 'array',
 title: 'Restaurant' ,
 // so that user have to required it's compolsory
 of: [{type: 'reference', to: [{type:'Restaurant'}]}]
  },


  ]
}
    
 );