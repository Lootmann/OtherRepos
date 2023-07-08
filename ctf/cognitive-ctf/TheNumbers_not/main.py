def num_to_char(num: int, diff: int = 1) -> str:
    return chr(ord("a") + num - diff)


def convert(nums: list) -> str:
    ans = ""
    for num in nums:
        ch = num_to_char(num)
        ans += ch
    return ans


def main():
    origins = "3 15 7 14 9 20 9 22 5 3 20 6 { 20 8 5 14 21 13 2 5 18 19 13 1 19 15 14 3 15 4 }"

    for ch in origins.split(" "):
        if ch == "{" or ch == "}":
            print(ch, end="")
        else:
            print(num_to_char(int(ch)), end="")


if __name__ == "__main__":
    main()
