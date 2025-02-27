import { createClient } from "@supabase/supabase-js"

const anon_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtY3BsdHFwc2Znb252cXBhbGVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0Njk5NTcsImV4cCI6MjA1NjA0NTk1N30.4cNJ0JM-C5IQzkolfRr5X2D0tSvDWTFVWvHJKAcNLEM"

const supabase_url = "https://smcpltqpsfgonvqpaleo.supabase.co"

const supabase = createClient(supabase_url, anon_key)

export default function mediaUpload(file){

    return new Promise((resolve, reject)=>{

        if(file == null){
            reject("No file selected")
        }

        const timestamp = new Date().getTime();
        const fileName = timestamp+file.name
    
    
        supabase.storage.from("images").upload(fileName,file,{
            cacheControl:'3600',
            upsert:false,
        }).then(()=>{
            const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
            resolve(publicUrl);
        }).catch(()=> {
            reject("Error uploading file")
        })

    });

   
}