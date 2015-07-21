function create_updated_collection(collection_a, object_b) { 
var collection_c = create_collection(collection_a);

  for (var i in collection_c){ 
    if(object_b.value.indexOf(collection_c[i].key) != -1){ 
      collection_c[i].count -= parseInt(collection_c[i].count/3)
    } 
  } 
  return collection_c;
}
function find_same_item(item, collection) { 
  for (var i in collection) { 
    if (item === collection[i].key) { 
      collection[i].count++; 
      return; 
    } 
  } 
  collection.push({key: item, count: 1}); 
}  
function create_collection(collection) { 
  var result = []; 

  for (var i in collection) { 
    find_same_item(collection[i], result); 
  } 
  return result; 
} 
