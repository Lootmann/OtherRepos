from colors import colored
from quotes import Quote, get_random_quote


def main():
    quote: Quote = get_random_quote()

    print(f"\n[{quote.category} by {quote.author}]\n")
    colored(quote.quote)


if __name__ == "__main__":
    main()
