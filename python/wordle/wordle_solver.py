correct_word = [0, 0, 0, 0, 0]

with open("words.txt", "r") as f:
    words = f.readlines()
    while True:
        i, d = input("pos letter: ").split()
        try:
            i = int(i)
            correct_word[i - 1] = d.upper()

        except ValueError:
            for word in words[:]:
                if d in word:
                    words.remove(word)

        for i, l in enumerate(correct_word):
            if type(l) == str:
                for word in words[:]:
                    if word[i] != l:
                        words.remove(word)
        print(words)