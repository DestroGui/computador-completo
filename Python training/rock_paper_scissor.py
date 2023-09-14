import random

def rock_paper_scissor():
    return random.choice(["Rock", "Paper", "Scissor"])

def transform(choice):
    if choice in ['R', 'r']:
        return 'Rock'
    elif choice in ['P', 'p']:
        return 'Paper'
    elif choice in ['S', 's']:
        return 'Scissor'
    else: return exit('error')

def winner_loser(player, computer):
    if player == computer:
        print('É um empate!!')
    else:
        if 'Scissor' in [player, computer]:
            if 'Rock' in [player, computer]:
                print('Winner: Player') if player == 'Rock' else print('Winner: Computer')
            else:
                print('Winner: Computer') if player == 'Paper' else print('Winner: Player')
        else:
            print('Winner: Player') if player == 'Paper' else print('Winner: Computer')
                

player1 = transform(input('(R)ock or (P)aper or (S)cissor: '))
print('Player chose:' + player1)

player2 = rock_paper_scissor()
print('Computer chose:' + player2 )

winner_loser(player1, player2)