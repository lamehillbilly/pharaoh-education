import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import { version } from "os";

export const client = createClient({
    apiVersion:'2023-05-03',
    dataset: 'production',
    projectId:'jlaxk6e3',
    useCdn: false,
}) 
    
const builder = imageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source);
}