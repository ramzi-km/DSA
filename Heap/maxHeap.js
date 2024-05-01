class Heap{
    constructor(){
        this.data=[]
    }
    parentI(i){
        return Math.floor((i-1)/2)
    }
    rightChildI(i){
        return i*2+2
    }
    leftChildI(i){
        return i*2+1
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
        
        while(this.data[curr]>this.data[this.parentI(curr)]){
            this.swap(curr,this.parentI(curr))
            curr=this.parentI(curr)
        }
    }
    remove(){
        const maxValue=this.data[0]
        this.data[0]=this.data[this.data.length-1]
        this.data.length--
        this.heapifyDown()
        return maxValue
    }
    heapifyDown(){
        let curr=0
        while(this.leftChildI(curr)!== undefined){
            let leftI=this.leftChildI(curr)
            let rightI=this.rightChildI(curr)
            let biggestChildI=leftI
            if(this.data[rightI] !== undefined && this.data[rightI]>this.data[leftI]){
                biggestChildI=rightI
            }
            if(this.data[curr]<this.data[biggestChildI]){
                this.swap(curr,biggestChildI)
                curr=biggestChildI
            }else{
                return
            }
        }
    }
}

const heap=new Heap()

heap.insert(7)
heap.insert(10)
heap.insert(15)
heap.insert(5)
heap.insert(3)
heap.remove()
console.log(heap.data)