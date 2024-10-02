import supabase from "./supabase"

export async function getAllPeople(role){
    
    let { data, error } = await supabase
    .from('people')
    .select("*")
    .eq('Role', role)
        
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



          