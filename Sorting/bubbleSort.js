function bubbleSort(arr){
    let swapped
    do {
        swapped = false
        for(let i=0; i<arr.length; i++){
            if(arr[i] >arr[i+1]){
                //swap
                const temp=arr[i]
                arr[i] = arr[i+1]
                arr[i+1]=temp
                swapped =true
            }
        }
    } while (swapped);
    return arr
}

let arr=[2,5,3,1,7,4,8,5]
console.log(bubbleSort(arr))