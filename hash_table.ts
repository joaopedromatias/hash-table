class Node {
  key: string
  value: unknown
  next: Node | null

  constructor(key: string, value: unknown) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class LinkedList {
  private head: Node | null

  constructor() {
    this.head = null
  }

  insert(node: Node) {
    if (!this.head) return (this.head = node)
    let lastNode = this.head

    while (lastNode.next) {
      lastNode = lastNode.next
    }
    lastNode.next = node
  }

  delete(key: string) {
    const searchResult = this.search(key)
    if (searchResult) {
      const index = searchResult.index
      if (index === 0) {
        this.head = this.head!.next
        return
      }

      let nodeToRemoveNext = this.head!
      for (let i = 1; i < index; i++) {
        nodeToRemoveNext = nodeToRemoveNext.next!
      }
      nodeToRemoveNext.next = nodeToRemoveNext.next ? nodeToRemoveNext.next.next : null
    }
  }

  search(key: string) {
    let currentNode = this.head
    let currentIndex = 0

    while (currentNode) {
      if (currentNode.key === key) return { value: currentNode.value, index: currentIndex }
      currentNode = currentNode.next
      currentIndex++
    }
  }
}

class HashTable {
  private size: number
  private table: LinkedList[]

  constructor(size: number) {
    this.size = size
    this.table = new Array(size).fill(new LinkedList())
    for (let i = 0; i < size; i++) {
      this.table[i] = new LinkedList()
    }
  }

  private hashFunction(key: string): number {
    const keyLen = key.length
    let unicodeSum = 0
    let counter = 0

    while (counter < keyLen) {
      unicodeSum += key.codePointAt(counter)!
      counter++
    }

    const index = unicodeSum % this.size
    return index
  }

  addItem(item: Record<string, unknown>): void {
    const key = Object.keys(item)[0]
    const value = item[key]
    const node = new Node(key, value)
    const index = this.hashFunction(key)
    this.table[index].insert(node)
  }

  deleteItem(key: string): void {
    const index = this.hashFunction(key)
    this.table[index].delete(key)
  }

  getItem(key: string): unknown | null {
    const index = this.hashFunction(key)
    const searchResult = this.table[index].search(key)
    if (searchResult) return searchResult.value
    return null
  }
}

const hashTable = new HashTable(7)

const data0 = {
  John: {
    age: 23,
    city: 'New York'
  }
}
const data1 = {
  Jane: {
    age: 24,
    city: 'San Francisco'
  }
}
const data2 = {
  Mark: {
    age: 25,
    city: 'Los Angeles'
  }
}
const data3 = {
  Alice: {
    age: 26,
    city: 'Seattle'
  }
}
const data4 = {
  Bob: {
    age: 27,
    city: 'Houston'
  }
}
const data5 = {
  Eve: {
    age: 28,
    city: 'Chicago'
  }
}
const data6 = {
  Ada: {
    age: 29,
    city: 'Orlando'
  }
}

hashTable.addItem(data0)
hashTable.addItem(data1)
hashTable.addItem(data2)
hashTable.addItem(data3)
hashTable.addItem(data4)
hashTable.addItem(data5)
hashTable.addItem(data6)

console.log(hashTable.getItem('John'))
console.log(hashTable.getItem('Jane'))
console.log(hashTable.getItem('Mark'))
console.log(hashTable.getItem('Alice'))
console.log(hashTable.getItem('Bob'))
console.log(hashTable.getItem('Eve'))
console.log(hashTable.getItem('Ada'))

hashTable.deleteItem('John')
hashTable.deleteItem('Jane')
hashTable.deleteItem('Mark')
hashTable.deleteItem('Alice')
hashTable.deleteItem('Bob')
hashTable.deleteItem('Eve')
hashTable.deleteItem('Ada')

console.log(hashTable.getItem('John'))
console.log(hashTable.getItem('Jane'))
console.log(hashTable.getItem('Mark'))
console.log(hashTable.getItem('Alice'))
console.log(hashTable.getItem('Bob'))
console.log(hashTable.getItem('Eve'))
console.log(hashTable.getItem('Ada'))

export {}
