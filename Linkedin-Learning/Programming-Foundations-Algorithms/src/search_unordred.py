# Searching an item in an ordered list, has time complexity
# of O(n) in the worst case, because we need to check every item
# in the list, and as the size of the dataset grows the number
# of operations grows 
def find_item(item, list):
    for i in range(len(list)):
        if item == list[i]:
            return i
    return None    

print(find_item(5, [1, 2, 4, 5, 6]))
print(find_item(7, [1, 2, 4, 5, 6]))