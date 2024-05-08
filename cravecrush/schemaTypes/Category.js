import { defineField , defineType } from "sanity";

// ( )
export default defineType({
    // Aleays start name and title with UpperCase for readable 
    // it can give error at some place if it's not same  such for reference function
name:"Category",
type: "document",
title:"category",

fields: [
 {
   name: 'name',
type: 'string',
title: 'Category Name' ,
// so that user have to required it's compolsory
validation: rule => rule.required()
 },
 {
 name: 'description',
 type: 'string',
 title: 'Category Description' ,
 // so that user have to required it's compolsory
 validation: rule => rule.required()
  },
 {
 name: 'image',
 type: 'image',
 title: 'Image of the Category' ,
 // so that user have to required it's compolsory
 validation: rule => rule.required()
  },


  ]
}
    
 );