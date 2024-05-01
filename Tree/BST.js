class Node{
    constructor(value){
        this.value = value;
        this.right=null
        this.left=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    isEmpty(){
        return this.root == null
    }
    insert(value){

        const newNode=new Node(value)

        if(this.isEmpty()){
            this.root = newNode;
        }else{
            this.insertHelper(this.root,newNode )
        }
    }
    insertHelper(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left = newNode
            }else(
                this.insertHelper(root.left,newNode)
            )
        }else{
            if(root.right==null){
                root.right = newNode
            }else(
                this.insertHelper(root.right,newNode)
            )
        }
    }

    search(root,value){
        if(!root){
            return false
        }else{
            if(root.value===value){
                return true
            }else if(value<root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    delete(value) {
        this.root=this.deleteHelper(this.root,value)
    }

    deleteHelper(root, value) {
        if(root===null){
            return root
        }
        if(value<root.value){
            root.left=this.deleteHelper(root.left,value)
        }else if(value>root.value){
            root.right=this.deleteHelper(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.value=this.min(root.right)
            root.right=this.deleteHelper(root.right,root.value)
        }
        return root
    } 
}


const bst = new BinarySearchTree()


bst.insert(10)
bst.insert(15) 
bst.insert(5)
bst.insert(3)
bst.insert(7)

bst.delete(5)
console.log(bst)
bst.inOrder(bst.root)
