import supabase from "./supabase";

export async function addNewPost({title,desc,imgSrc = null,cat}){
    let imageUrl = null;
    
    if (imgSrc) {

        const fileName = `${Date.now()}_${imgSrc.name}`;
        

        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('images')  
          .upload(fileName, imgSrc);
    
        if (uploadError) {
          console.error("Błąd przesyłania pliku do storage:", uploadError);
          return; 
        }
    

        const { data: publicUrlData } = supabase.storage
          .from('images')
          .getPublicUrl(fileName);
        
        imageUrl = publicUrlData.publicUrl;
    }

    const { data, error } = await supabase
  .from('news')
  .insert([
    { title, desc, imgSrc: imageUrl, cat },
  ])
  .select()
  console.log(data);
  console.log(error);
  
  
}

