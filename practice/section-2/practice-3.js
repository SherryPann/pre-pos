var SYMBOL_START_POS = 2;
function objectify(str){
  var key = str.charAt(0);
  var count = 1;
	if(str.indexOf("-") > -1 ||
    str.indexOf(":") > -1 ||
    str.indexOf("[") > -1
    ){
    count = parseInt( str.slice(SYMBOL_START_POS));

	}
		return { name : key,summary : count};
  }

function count_same_elements(collection) {

  var objResult = {};
  var result = [];

  collection.map(function(val) {
			return objectify(val);
  }).forEach(function(val) {
  objResult[val.name] = objResult[val.name] || 0; //objResult[val.key]为真直接赋值否则赋0
  objResult[val.name] += val.summary;
})
  for (var i in objResult) {
    result.push({
      name : i,
      summary: objResult[i]
    });
  }
  return result;
}
