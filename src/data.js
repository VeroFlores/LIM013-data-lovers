// estas funciones son de ejemplo
/*import data from './data/lol/lol.js'
const objectLol=data.data*/
//export const getNewArray=championList=>Object.values(championList);//
export const filterByRol= (championList,term) => {
    const filterRol= championList.filter(champion => (champion.tags.indexOf(term) !== -1 ? champion : false));
    console.log(filterRol)
    return filterRol;
};

export const search=(championList,nameChamp)=>{
    const searchName=championList.filter(el=>(el.name.toLowerCase().indexOf(nameChamp.toLowerCase())!==-1?el:false))
    console.log(searchName)
    return searchName; 
};
export const orderAsce=(championList,term)=>{
    const sort=championList.sort(()=>term==='02'?-1:1);
    console.log(sort);
        return sort;
};


 

