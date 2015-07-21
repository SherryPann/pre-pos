function collect_same_elements(collection_a, object_b) {
  var result = collection_a.map(function(val){
    return val.key;
  }).filter(function(val){
    return object_b.value.indexOf(val) !== -1;
  });
  return result;
}
