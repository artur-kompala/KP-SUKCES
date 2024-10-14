import supabase from "./supabase";


export async function addNewPost({ title, desc, imgSrc = null, cat }) {
  let imageUrl = null;

  try {
      if (imgSrc) {
          const fileName = `${Date.now()}_${imgSrc.name}`;


          const { data: uploadData, error: uploadError } = await supabase.storage
              .from('images')
              .upload(fileName, imgSrc);

          if (uploadError) {
              throw new Error(`Błąd przesyłania pliku do storage: ${uploadError.message}`);
          }

          const { data: publicUrlData } = supabase.storage
              .from('images')
              .getPublicUrl(fileName);

          imageUrl = publicUrlData.publicUrl;
      }


      const { data, error } = await supabase
          .from('news')
          .insert([{ title, desc, imgSrc: imageUrl, cat, }])
          .select();

      if (error) {
          throw new Error(`Błąd przy dodawaniu posta: ${error.message}`);
      }

      console.log("Dodano post:", data);
      return data; 
  } catch (error) {
      console.error(error.message);
      throw error; 
  }
}


export async function addNewPeople({ fullName, role, rankSrc = null, phoneNumber = null, photoSrc = null }){

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

export async function editGraniczna({garnicznaDay ,garnicznaJunior = "-",garnicznaMid = "-",garnicznaSenior = "-"}){
  console.log(garnicznaDay);
  
  try {
    const { data, error } = await supabase
  .from('schedule_Graniczna')
  .update({ junior: garnicznaJunior, mid: garnicznaMid , senior: garnicznaSenior })
  .eq('id', garnicznaDay)
  .select()
  if (error) {
    throw new Error(`Błąd przy aktualizacji tabeli Graniczna: ${error.message}`);
  }
  console.log("Zaktualizowano table Graniczna:", data);
      return data; 
    
  } catch (error) {
      console.error(error.message);
      throw error;
  }
  
}

function sanitizeKey(key) {
  return key.replace(/[^a-zA-Z0-9-_\.]/g, '_');  // Replace invalid characters
}

export async function uploadPhoto({ city, desc, photos }) {
  const currentDate = new Date().toISOString().split('T')[0];
  const sanitizedDesc = sanitizeKey(desc);  // Sanitize the description
  const sanitizedCity = sanitizeKey(city);  // Sanitize the city
  const folderName = `${sanitizedDesc}-${sanitizedCity}-${currentDate}/`;

  for (const photo of photos) {
    try {
      // Get the file name directly from the File object
      const fileName = photo.name;
      const filePathInBucket = folderName + fileName;

      // Using FormData for uploading files
      const formData = new FormData();
      formData.append('file', photo);

      // Assuming supabase has a method that accepts FormData directly
      const { data, error } = await supabase
        .storage
        .from("gallery")
        .upload(filePathInBucket, photo);

      if (error) {
        console.error(`Error uploading file ${fileName}:`, error.message);
      } else {
        console.log(`File ${fileName} has been uploaded to folder ${folderName}`);
      }
    } catch (err) {
      console.error(`Error reading file ${photo.name}:`, err.message);
    }
  }
}






