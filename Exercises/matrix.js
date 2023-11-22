
function isMatrix(matrix){

    if(matrix instanceof Array){

        matrix.forEach(element => {
            if(!(element instanceof Array))
            return false;
        });
        return true;
    }
    return false;
}

function multiplyTwoMatrix(a,b){

    if(!(isMatrix(a) && isMatrix(b))) {
        return null;
    }
    if(a[0].length!== b.length){
        return null;
    }

    var resultMatrix=[];
    var i=0;
    var j=0;
    a.forEach(element => {
        var result=[];
        element.forEach(num => {

            result.push(num*b[j][i])
            j++;
        });
        j=0;
        i++;
        resultMatrix.push(result);
    });

    return resultMatrix;
}

const a=[['b',2,3],[1,2,3]];
const b=[[1,'a'],[1,2],[1,2]];
console.log(multiplyTwoMatrix(a,b));