#sort a list of numbers
list_numbers = []
while 5 != 6:
    adicionar = input('Add n° (ou letra para sair): ')

    try: 
        x = float(adicionar)
        list_numbers.append(x)

    except:
        break

order = input('(A)scending, (D)escending or (N)one? ')

if order.upper() == 'A':
    list_numbers.sort()
    print(list_numbers)

elif order.upper() == 'D':
    list_numbers.sort(reverse = True)
    print(list_numbers)

elif order.upper() == 'N':
    print(list_numbers)

else: print('Error detected, try again')

print('The End')