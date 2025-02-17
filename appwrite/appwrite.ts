import {Account, Client, Databases} from "react-native-appwrite"


const client = new Client()
const account = new Account(client)
const databases = new Databases(client)

export const config ={
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM,
    databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
    foodCategoriesCollection: process.env.EXPO_PUBLIC_APPWRITE_FOODCATEGORIES_COLLECTION_ID,
    foodCategoriesItemsCollection: process.env.EXPO_PUBLIC_APPWRITE_FOODCATEGORIESITEMS_COLLECTION_ID,
}

client.setEndpoint(config.endpoint!)
.setProject(config.projectId!)
.setPlatform(config.platform!)


export const listFoodCategoriesItems = async() => {
    try {
        const result = await databases.listDocuments(
            config.databaseId!,
            config.foodCategoriesCollection!,
         )
         console.log("Result from appwrite.ts" ,result);
return result.documents
    } catch (error:any) {
        throw new Error(error.message)
    }
}