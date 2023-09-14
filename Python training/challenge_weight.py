weight = float(input('Weight: '))
scale = input('(K)g or (L)bs ? ')
if scale.upper() == 'K':
    print('Weight in Lbs: ' + str(weight * 2.20462))
elif scale.upper() == 'L':
    print('Weight in Kg: ' + str(weight / 2.20462))
else:
    print('Error, try again')