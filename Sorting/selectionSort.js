function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
            //swap
            const temp =arr[i]
            arr[i]=arr[j]
            arr[j]=temp
            }
        }
    }
    return arr
}

let arr=[2,5,4,7,8,3,9,0]
console.log(selectionSort(arr))