export  const addition=(matA,matB)=>{
    let temp=[];
    let result=[];
    if (matA.length!=matB.length||matA[0].length!=matB[0].length)
        return false;
    for (let i=0;i<matA.length;i++){
        for (let j=0;j<matA[i].length;j++){
            temp[j]=Number(matA[i][j])+Number(matB[i][j])
        }
        console.log(temp)
        result.push([...temp]);
        temp=[]
    }
    return result;
}
export  const subtraction=(matA,matB)=>{
    let temp=[];
    let result=[];
    if (matA.length!=matB.length||matA[0].length!=matB[0].length)
        return false;
    for (let i=0;i<matA.length;i++){
        for (let j=0;j<matA[i].length;j++){
            temp[j]=matA[i][j]-matB[i][j]
        }
        console.log(temp)
        result.push([...temp]);
    }
    return result;
}
 export const getColumn=(mat,col)=>{
    let temp=[];
    for (let i=0;i<mat.length;i++){
        for (let j=0;j<mat[i].length;j++){
            if (col==j)
            temp.push(mat[i][j])
        }
    }
    return temp;
}
export  const multiplication=(matA,matB)=>{
    if (matA[0].length!=matB.length)
        return false;
    let result=[];
    for (let i=0;i<matA.length;i++){
        let subrow=[];
        for (let j=0;j<matB[0].length;j++){
            let fromB=getColumn(matB,j)
            let subresult=0;
            for (let k=0;k<fromB.length;k++){
                subresult+=matA[i][k]*fromB[k]
            }
        subrow.push(subresult);   
        }
        result.push(subrow);
    }
    return result
    
}
 const transpose=(mat)=>{
    let temp=[];
    let subtemp=[];
    for (let i=0;i<mat[0].length;i++){
        for (let j=0;j<mat.length;j++){
            subtemp.push(mat[j][i])
        }
        temp.push(subtemp);
        subtemp=[];
    }
    return temp;
}
export  const reduceMatrix=(mat,position)=>{
     if (mat.length==2&&mat[0].length==2){
         return mat
     }
    let tempp=JSON.parse(JSON.stringify(mat))
    tempp.splice(position[0],1)
    for (let i=0;i<tempp.length;i++){
        for (let j=0;j<tempp[i].length;j++){
            if (j==position[1])
            tempp[i].splice(j,1)
        }
    }
    return tempp;
}
export  const determinant=(mat)=>{
    let temp=JSON.parse(JSON.stringify(mat))
    let sum=0;
    if (mat.length==2&&mat[0].length==2){
        return mat[0][0]*mat[1][1]-mat[1][0]*mat[0][1];
    }
    for (let i=0;i<mat[0].length;i++){
        if (i%2==0)
            sum+=mat[0][i]*determinant(reduceMatrix(mat,[0,i]))
        else
            sum-=mat[0][i]*determinant(reduceMatrix(mat,[0,i]))
    }
    return sum;
}
export  const minors=(mat)=>{
     if (mat.length==2&&mat[0].length==2){
         return transpose(mat)
     }
    let temp=JSON.parse(JSON.stringify(mat))
    for (let i=0;i<mat.length;i++){
        for (let j=0;j<mat[i].length;j++){
            if ((i+j)%2==0)
            temp[i][j]=determinant(reduceMatrix(mat,[i,j]))
            else
            temp[i][j]=-determinant(reduceMatrix(mat,[i,j]))
        }
    }
    return temp;
}
export const cofactor=(mat)=>{
    for (let i=0;i<mat.length;i++){
        for (let j=0;j<mat[i].length;j++){
            if ((i+j)%2!=0)
            mat[i][j]=-mat[i][j]
        }
    }
    return mat;
}
export  const inverse=(mat)=>{
    let temp=JSON.parse(JSON.stringify(mat))

    let inverseDeterminant=1/determinant(mat);

    let minorss=minors(mat);
    let cofactors=cofactor(minorss);
    console.log('sadfasdf')
    let transposeCofactor=transpose(cofactors)
    for (let i=0;i<mat.length;i++){
        for (let j=0;j<mat[i].length;j++){
            temp[i][j]=inverseDeterminant*transposeCofactor[i][j]
        }
    }
    return temp;
}
export const power=(mat,pow)=>{
    let result=[...mat];
    for (let i=0;i<pow-1;i++){
        result=multiplication(result,mat)
    }
    return result;
}

console.log(inverse([[1,2],[1,1]]))