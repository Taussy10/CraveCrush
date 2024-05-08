import { SanityClient } from "@sanity/client";

import imageUrlBuilder from '@sanity/image-url'

// it's a class so you have to use new keyword
export  const client = new SanityClient({
    name: 'default',
    title: 'CraveCrush',
    projectId: 'dsfsf',
    dataset: 'production',
apiVersion: '2023-05-03',
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)   


// export default SanityClient;  

// console.log("hello");




// const client = createClient({
//  //not neccasary   // title: 'CraveCrush',
//      projectId: '6otmzpco',
//     dataset: 'Production',
//     useCdn: true,
//     apiVersion: '2024-03-03',
// }) 
 

//  export async function getCategory() {
//     const category = await client.fetch('*[_type == "Category"]')
//   return category

//     // return client.fetch(
//     //     groq` *[_type=='Category']`
//     //  ) 
    
// }