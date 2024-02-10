
function search (id,tab){
    for ( const element of tab){
        if(element.id == id)
        return element;
        
        
    };
    
}
//ou encore 
//  function searchById (id){
//     return tableau.find(element=>element.id==id)
//  }

export {search};