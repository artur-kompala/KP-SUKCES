import supabase from "./supabase"

export async function getAllPeople(role){
    
    let { data, error } = await supabase
    .from('people')
    .select("*")
    .eq('role', role)
        
    if(error){
        console.log(error);
    }
    
  return data
}

export async function getAllPost(){
  
let { data, error } = await supabase
.from('news')
.select('*')

if(error){
  console.log(error);
}

return data 
}

export async function getAllManagment(){
  let { data, error } = await supabase
  .from('people')
  .select("*")
  .in('role', ['Prezes Zarządu', 'Vce-Prezes Zarządu', 'Sekretarz Zarządu', 'Członek Zarządu']);

  if(error){
    console.log(error);
  }

  return data 
}

export async function getAllRevision(){
  let { data, error } = await supabase
  .from('people')
  .select("*")
  .in('role', ['Przewodniczący Komisji', 'Sekretarz Komisji', 'Zastępca Komisji']);

  if(error){
    console.log(error);
  }

  return data 

}

export async function getAllFiles() {
  let { data, error } = await supabase
  .from('files')
  .select('*')
  
  if(error){
    console.log(error);
  }
  
  return data 
}

export async function getContribution() {

  let { data, error } = await supabase
  .from('contribution')
  .select('*')
  
  if(error){
    console.log(error);
  }
  
  return data 
  
}

export async function getAllTrening(){

  let { data, error } = await supabase
  .from('schedule_Graniczna')
  .select('*')

  if(error){
    console.log(error);
  }
  
  return data 
}

export async function getAllFolders() {
  const { data, error } = await supabase.storage.from("gallery").list('', {
    limit: 100, // Set limit according to your requirement
        delimiter: '/', // Use delimiter to separate folders
  });

  if (error) {
      console.error('Error fetching folders:', error);
      return [];
  }
  const folderNames = data?.map(item => item.name) || [];
  console.log(folderNames);
  
  return folderNames;
}



          