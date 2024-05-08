import { defineField , defineType } from "sanity";

// ( )
export default defineType({
name:"Restaurant",
type: "document",
title:"Restaurant",

fields: [
 {
name: 'Name',
type: 'string',
title: 'Name of Restaurant' ,
// so that user have to required it's compolsory
validation: rule => rule.required()
 },
 {
    // You can't give space to name if you give it will give error 
 name: 'Description',
 type: 'string',
 title: 'Description of Restaurant' ,
 // so that user have to required it's compolsory
 validation: rule => rule.max(200)
  },
  {
name:'Image',
type:'image',
title:'Image of the restaurant'
  },
  {
    name: 'Lat',
    type: 'number',
    title: 'Latitude of the Restaurant' ,
    // so that user have to required it's compolsory
   
     },
 {
 name: 'Lng',
 type: 'number',
 title: 'Lognitude of the Restaurant' ,
 // so that user have to required it's compolsory

  },
 {
 name: 'Address',
 type: 'string',
 title: 'Address of the Restaurant' ,
 validation: rule => rule.required()
 // so that user have to required it's compolsory

  },
 {
 name: 'Rating',
 type: 'number',
 title: 'Enter a number between 1 to 5' ,
 validation: rule => rule.required().min(1).max(5).error("Please enter a value between 1 to 5")

 // so that user have to required it's compolsory
  },
  {
    name: 'Reviews',
    type: 'string',
    title: 'Reviews of the Restaurant' ,
    // so that user have to required it's compolsory
   
     },
     {
        name: 'Type',
        type: 'reference' ,
        // ALways check the spelling
        title: 'Category',
        validation: rule=> rule.required(),
        to: [{type: 'Category'}]

        // so that user have to required it's compolsory
       
         },
     {
        name: 'Dishes',
        type: 'array' ,
        title: 'Dishes',
        of: [{type: 'reference', to: [{type:'Dish'}]}]

        // so that user have to required it's compolsory
       
         },


  ]
}
    
 );