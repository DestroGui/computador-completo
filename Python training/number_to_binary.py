#transfomar numeros em binário
number = int(input('Choose a number: '))
transform_binary = []

while number != 0:
    transform_binary.append(str(int(number % 2)))
    number = (number - (number % 2)) / 2

transform_binary.reverse()
x = ''.join(transform_binary)
print(x)
