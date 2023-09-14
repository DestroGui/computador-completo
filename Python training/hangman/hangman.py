import random
from words import words

def get_valid_word(words):
   word = random.choice(words)
   while '-' in word or ' ' in word:
     word = random.choice(words) 

def split(word):
    return list(word)


hangmanWord = get_valid_word(words)
letterOfWord = split(hangmanWord)
correctWord = ['_'] * len(letterOfWord)
life = 5

print('You start with 5 lifes, good luck!!')

while correctWord != hangmanWord:
  letterChoosen = input('Choose a letter: ')
  if letterChoosen in letterOfWord:
    entireWord = ''
    indices = [i for i, x in enumerate(letterOfWord) if x == letterChoosen]
    for letter in indices:
       correctWord[letter] = letterChoosen
    for letter in correctWord:
       entireWord += letter
    print (entireWord)
  else:
     life -= 1
     print('you have :', life, 'lifes')
     if life == 0:
        print('End of the game')
        print('The word was: ', hangmanWord)
        exit()
print("Congratulations, you've guessed the correct word")
