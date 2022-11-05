# try out the Python stack functions

# TODO: create a new empty stack
# we can simply use Python built-in list because it allows us
# to add items to the end (top) of the list, and we can also 
# pop last added element with complexity of O(1) 
stack = []


# TODO: push items onto the stack
stack.append(1) # O(1)
stack.append(2)
stack.append(3)
stack.append(4)

# TODO: print the stack contents
print(stack) # [1, 2, 3, 4]

# TODO: pop an item off the stack
stack.pop() # O(1)
print(stack) # [1, 2, 3, 4]