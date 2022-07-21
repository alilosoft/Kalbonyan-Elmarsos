# MergeSort algorithm, has a time complexity of O(n.log(n))
# It's suitable for large datasets
# It uses recursion to split the dataset

def mergesort(list, call=0):
    print('____'*call ,'divide: ', list)
    call += 2
    if len(list) > 1:
        mid = len(list) // 2
        left = mergesort(list[:mid], call)
        right = mergesort(list[mid:], call)
        print('___'*call, 'l:',left, 'r:',right)
        return merge(left, right)
    else:
        return list

def merge(arr1, arr2):
    final = []
    i = 0
    j = 0
    k = 0
    while i < len(arr1) and j < len(arr2):
        if arr1[i] < arr2[j]:
            final.append(arr1[i])
            i += 1
        else:
            final.append(arr2[j])
            j += 1

    for r in arr1[i:]:
        final.append(r)

    for r in arr2[j:]:
        final.append(r)
    return final 


# print(merge([0, 2, 4, 6, 8], [1, 3, 5, 7]))
print(mergesort([3,6,1,5,4,7,2]))
