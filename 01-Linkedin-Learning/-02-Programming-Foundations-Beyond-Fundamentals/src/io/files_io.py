# open a file located at the same dir as the program file
input = open('input.txt', 'rt', encoding='utf-8')
output = open('output.txt', 'wt')
print('Processing...')
sum = 0
for line in input:
    print(line.rstrip(), file=output) # print to a file
    sum += int(line)

print('Total: ' + str(sum), file=output)
print('Processing Completed!')