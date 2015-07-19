function  collect_same_elements(collection_a, object_b) {
	var result=[];
	var collection_c=object_b.value;
		 for(var i = 0;i < collection_a.length; i++) 
		 {
		 	for (var j = 0; j <collection_c.length; j++) 
		 	{
	     if(collection_c[j] == collection_a[i])
	     {
	     	result.push(collection_a[i]);
	     };
	 }
	}
	return result;
}
