# Find the greatest common denominator of two numbers
# using Euclid's algorithm

def gcd(a, b): # given: a > b
    gcd = 1
    while a % b != 0:
        gcd = a % b
        a = b
        b = gcd
    return gcd

def gcd1(a, b): # given: a > b
    while b != 0:
        t = a
        a = b
        b = t % a
    return a


print(gcd1(540, 300)) # should be 60
print(gcd1(60, 96))  # should be 12
print(gcd1(20, 8))   # should be 4