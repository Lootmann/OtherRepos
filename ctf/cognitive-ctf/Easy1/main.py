def gen_key(rot: int) -> list:
    keys = []
    for i in range(26):
        keys.append((i + rot) % 26)
    return keys


def load() -> list:
    """create table(instead of loading table.txt :^)"""
    table = [[0] * 26 for _ in range(26)]

    for row in range(26):
        keys = gen_key(row)
        for col in range(26):
            table[row][col] = keys[col]

    return table


def key_to_int(key: str) -> int:
    return ord(key) - ord("A")


def int_to_key(num: int) -> str:
    return chr(num + ord("A"))


def main():
    table = load()
    flag = "BTIUKWDSQPEFD"
    key = "ZCKFRIVALVRKI"

    for f, k in zip(flag, key):
        # found line with table
        row = key_to_int(k)
        line = table[row]

        col = key_to_int(f)
        found = line.index(col)

        print(int_to_key(found), end="")


if __name__ == "__main__":
    main()
