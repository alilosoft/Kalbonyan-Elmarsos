# find max value in a list using recursion algo,
# Time complexity: O(n), because it ended up comaparing
# each item with its neighbor.
def find_max(list):
    if len(list) == 1:
        return list[0]
    else:
        val1 = list[0]
        val2 = find_max(list[1:])
        if val1 > val2:
            return val1
        else:
            return val2

find_max([1, 2, 5, 0, 3, 10, 4])