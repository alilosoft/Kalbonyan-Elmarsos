# hashtables are very optimized for inserting, removing 
# & searching items but they do not guaranty any order of items.
# hashtables are suitable for large datasets.  


# demonstrate hashtable usage
# TODO: create a hashtable all at once
hash_table1 = {
    'key1' : 'val_one',
    'key2' : 'val_two',
    'key3' : 'val_three',
}

# TODO: create a hashtable progressively
# adding items to a hashtable are O(1) operations
hash_table2 = {}
hash_table1['key1'] = 'val_one'
hash_table1['key2'] = 'val_two'
hash_table1['key3'] = 'val_three'

# TODO: try to access a nonexistent key


# TODO: replace an item


# TODO: iterate the keys and values in the dictionary
for (key, val) in hash_table1.items():
    print(f'key: {key} => val: {val}')