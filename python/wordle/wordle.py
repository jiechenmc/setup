from bs4 import BeautifulSoup
import requests

words = []


def add_words(page):
    soup = BeautifulSoup(requests.get(page).content, "html.parser")
    for span in soup.body.findAll("span"):
        for word in span.text.split():
            if len(word) == 5 and word == word.upper():
                words.append(word + "\n")


def main():
    for i in range(1, 16):
        if i == 1:
            add_words("https://www.bestwordlist.com/5letterwords.htm")
        #else:
        add_words(f"https://www.bestwordlist.com/5letterwordspage{i}.htm")

    with open("words.txt", "w") as f:
        f.writelines(words)


if __name__ == "__main__":
    main()