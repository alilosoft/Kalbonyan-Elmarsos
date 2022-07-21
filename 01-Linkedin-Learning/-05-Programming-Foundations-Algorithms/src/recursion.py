def count_down(x):
    # the function arg is saved in a callstack for each call
    if x == 0: # breaking condition to prevent the function call endlessly 
        print('Done!')
    else:
        print(x)
        count_down(x - 1) # call itself
    # this will be printed from buttom to top when the callstack is unwound after the lastcall returns.  
    print('called with x:', x)

#count_down(5)

def power(x, y):
    if y == 0:
        return 1
    elif y == 1:
        return x
    else:
        return x * power(x, y - 1)

# print(power(2, 10))
# print(power(2, 5))
# print(power(2, 1))
# print(power(2, 0))

def factorial(x):
    if x == 0: 
        return 1
    elif x == 1:
        return 1
    else:
        return x * factorial(x - 1)

print(factorial(500))