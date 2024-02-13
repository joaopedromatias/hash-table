# Hash Table

**`Hash table`** is a data structure capable of retrieving data very fast. It is commonly used in database indexing, caching and authentication. When key values pair are stored, it is commonly called `hash map`.

In a hash table, the indexes of the values are related to the values themselves.

The **`hashing function`** (or hashing algorithm) defines the index of values in the hash table, hence where to search it afterwards.

**`Collisions`**: happens when the hashing function results in the same index for two or more values. There are two main ways to deal with it: `open addressing` and `close addressing`.

`Open Addressing`: in this approach, the value is inserted at some empty index available in the hash table. The methodology to search for the empty index can vary, and it will impact in the time complexity of the hash table. The collisions can affect any of the hash table indexes.

`Closed Addressing`: the value is inserted in the index returned by the hash function. Inside this index, there will be a data structure capable of storing multiple values, like a linked list. The collisions affect only one index of the hash table.

A strategy to decrease the occurrence of collisions is to create more indexes than necessary, seeking to achieve a load factor (load factor is the percentage of indexes filled) smaller than 100%.

A good hash function will take into account the nature and the amount of data to be stored. Its goals are to decrese the occurrence of collisions and distribute the values evenly in the hash table indexes. They must be easy and fast to calculate.
