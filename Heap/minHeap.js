class Heap{
    constructor(){
        this.data=[]
    }
    parentI(i){
        return Math.floor(i-1/2)
    }
    leftChildI(i){
        return i*2+1
    }
    rightChildI(i){
        return i*2+2
    }
    swap(i,j){
        const temp=this.data[i]
        this.data[i]=this.data[j]
        this.data[j]=temp
    }
    insert(value){
        this.data[this.data.length]=value
        this.heapifyUp()
    }
    heapifyUp(){
        let curr=this.data.length-1
        while(this.data[curr]<this.data[this.parentI(curr)]){
            this.swap(curr,this.parentI(curr))
            curr=this.parentI(curr)
        }
    }
    remove(){
        let minValue=this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown(0)
        return minValue
    }
    buildHeap(arr){
        this.data=[...arr]
        for(let i=this.parentI(this.data.length-1);i>=0;i--){
            this.heapifyDown(i)
        }
    }
    heapifyDown(i){
        let curr=i
        
        while(this.data[this.leftChildI(curr)]!== undefined){
            let leftI=this.leftChildI(curr)
            let rightI=this.rightChildI(curr)
            let smallestChildI=leftI
            if(this.data[rightI]!==undefined && this.data[rightI]<this.data[leftI]){
                smallestChildI=rightI
            }
            if(this.data[curr]>this.data[smallestChildI]){
                this.swap(curr,smallestChildI)
                curr=smallestChildI
            }else{
                return
            }
        }
    }
}

const heap = new Heap()

// heap.insert(10)
// heap.insert(7)
// heap.insert(0)
// heap.insert(4)
// heap.insert(20)
// heap.insert(5)
// console.log(heap.remove())
let arr=[3,6,4,-1,7,8,9,7,0,2,1]

heap.buildHeap(arr)

console.log(heap.remove())

console.log(heap.data)