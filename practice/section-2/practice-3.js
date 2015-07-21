finction objectify(str){
  var key = str.charAt[0];
  var count = 1;

  if(str.indexOf("-") > -1 ||
    str.indexOf(";") > -1 ||
    str.indexOf("[]") > -1
    ){
    count = parseInt( str.slice(SYMBOL_START_POS));
  return { name : key,summary : count};
  }
}

function count_same_elements(collection) { 
  var SYMBOL_START_POS = 2;
  var result = [];
  var collection_a = objectify(collection);
  collection.map(function(val){
    return {
      collection_a.key;
      collection_a.count;}
  }).forEach(function(val) { 
  collection_a[val.key] = collection_a[val.key] || 0; //objResult[val.key]为真直接赋值否则赋0
  collection_a[val.key] += val.count; 
});
  for (var i in collection_a) { 
     result.push({ name: i, summary: i.count}); 
   } 
   return result; 
    } 

}

