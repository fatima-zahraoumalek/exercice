const inscriptions=[ 
    {id:10,nom:'Rami',filiere:'DEV'}, 
    {id:11,nom:'Kamali',filiere:'DEV'}, 
    {id:12,nom:'Fahmi',filiere:'DEV'}, 
    {id:13,nom:'Chaouki',filiere:'DEV'} 
   ]; 
let etd = {id:14,nom:'ouazidi',filiere:'DEV'} 
function ajout(obj){
    return [...inscriptions, obj]
}

console.log(ajout(etd))