function create_updated_collection(collection_a, object_b) { 
  for (var i in collection_a){ 
    if(object_b.value.indexOf(collection_a[i].key) != -1){ 
      collection_a[i].count -= parseInt(collection_a[i].count/3)
    } 
  } 
  return collection_a;
  }

