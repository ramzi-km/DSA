function mergeSort(arr){
    if(arr.length<2){
        return 
    }
    
    const mid=Math.floor(arr.length/2)
    const leftArr=arr.slice(0,mid)
    const rightArr=arr.slice(mid)
    mergeSort(leftArr)
    mergeSort(rightArr)
    return merge(leftArr,rightArr,arr)
}
function merge(leftArr,rightArr,arr){
    let i=0, l=0, r=0;
    let leftSize=leftArr.length
    let rightSize=rightArr.length
    while(l<leftSize && r<rightSize){
        if(leftArr[l]<rightArr[r]){
            arr[i]=leftArr[l]
            i++;
            l++;
        }else{
            arr[i]=rightArr[r]
            i++
            r++
        }
    }
    
    while(l<leftSize){
        arr[i]=leftArr[l]
        i++;
        l++;
    }
    while(r<rightSize){
        arr[i]=rightArr[r]
        i++
        r++
    }
    return arr
}

let a=[8,1,4,2,5,3,6,9,7,0]
console.log(mergeSort(a))