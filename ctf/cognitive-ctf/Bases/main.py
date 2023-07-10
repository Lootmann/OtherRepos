import base64


def load(filename: str) -> str:
    with open(filename, "r") as f:
        return f.read()


def main():
    string = load(filename="memo.txt")
    print(string)
    print("ans:")
    print(base64.b64decode(string))


if __name__ == "__main__":
    main()
