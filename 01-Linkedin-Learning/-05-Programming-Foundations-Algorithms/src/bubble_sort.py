# The bubble sort algorithm has a time complexity of O(n²)
# It's only used for teching purposes.

def bubble_sort(list):
    j = len(list) - 1
    while j > 0:
        for i in range(j):
            if(list[i] > list[i + 1]):
                temp = list[i]
                list[i] = list[i + 1]
                list[i + 1] = temp
        j -= 1
        print(list)

bubble_sort([3,1,5,4,2])
bubble_sort([31,12,55,41,21])
bubble_sort([6, 20, 8, 19, 56, 23, 87, 41, 49, 53])