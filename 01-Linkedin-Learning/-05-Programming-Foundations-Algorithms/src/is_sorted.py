# this algo uses brute force method
# it has a linear complexity O(n) 
def is_sorted(list):
    for i in range(len(list)- 1):
        if list[i] > list[i + 1]:
            return False
    return True

list = [1, 2, 3, 4, 5, 6]
print(is_sorted(list))


