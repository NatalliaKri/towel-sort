
module.exports = function towelSort (matrix) {
	if(!matrix) return [];
	if(matrix.length === 0) return [];
	let newArr = [];
	for(let i = 0; i < matrix.length; i++){
		if( i % 2 === 0){
		  for(let j = 0; j < matrix[i].length; j++){
             let a = matrix[i].slice(j, j + 1);
             let b = a.join('');
  
			  b = Number(b);
			  newArr.push(b);
		  }
	    }
		
		
		
	    if( i % 2 === 1){
		  for(let j = matrix[i].length - 1; j >= 0; j--){
			  let a = matrix[i].slice(j, j + 1);
			  let b = a.join('');
			  
			  b = Number(b);
			  newArr.push(b);
			}
		}
	}
 
  return newArr;
}
