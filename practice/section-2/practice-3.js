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
  var objResult = {}; 
  var result = []; 
  
  collection.map(function(val) { 
    return {name: objectify.key,
      summary: objectify.summary}
  }).forEach(function(val) { 
  objResult[val.key] = objResult[val.key] || 0; //objResult[val.key]为真直接赋值否则赋0
  objResult[val.key] += val.count; 
}) 
  for (var i in objResult) { 
    result.push({ 
      key: i, 
      count: objResult[i] 
    }); 
  } 
  return result;
} 
}


