function insertionSort(arr){
    for(let i=0;i<arr.length;i++){
        let curr=arr[i]
        let j=i-1;
        while(j>=0 && arr[j]>curr){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=curr
    }
    return arr
}
let arr=[2,5,4,7,8,3,9,0]
console.log(insertionSort(arr))