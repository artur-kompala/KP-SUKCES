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

export async function addNewPeople({ fullName, role, rankSrc = null, phoneNumber = null,photoSrc = null }){

  let imageUrl = null;
  
    
  if (photoSrc) {

      const fileName = `${Date.now()}_${photoSrc.name}`;
      

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('images')  
        .upload(fileName, photoSrc);
  
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
.from('people')
.insert([
  { fullName, role, photoSrc: imageUrl, rankSrc,phoneNumber },
])
.select()
console.log(data);
console.log(error);
}

export async function addNewFile({fileName,file}){

  let fileSrc = null;
  let fileFormat = null;
  
    
  if (file) {

      const fileName = `${Date.now()}_${file.name}`;
      fileFormat = file.type.split('/')[1];
      

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('files')  
        .upload(fileName, file);
  
      if (uploadError) {
        console.error("Błąd przesyłania pliku do storage:", uploadError);
        return; 
      }
  

      const { data: publicUrlData } = supabase.storage
        .from('files')
        .getPublicUrl(fileName);
      
      fileSrc = publicUrlData.publicUrl;
  }

  const { data, error } = await supabase
.from('files')
.insert([
  { fileName, src: fileSrc,format: fileFormat },
])
.select()
console.log(data);
console.log(error);
  

}

export async function editContribution({contribution}){
  const { data, error } = await supabase
  .from('contribution')
  .update({ desc: contribution })
  .eq("id", 1)
  .select()

  console.log(data);
  console.log(error);

}


