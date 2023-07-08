def rot13(ch: str) -> str:
    res = ""
    diff = 9999

    if ch.islower():
        diff = ord("a")
    else:
        diff = ord("A")

    num = (ord(ch) - diff + 13) % 26 + diff

    return chr(num)


def main():
    origins = "PbtavgvirPGS{abg_gbb_onq_bs_n_ceboyrz_7qsn03oq}"

    for ch in origins:
        if ch in {"{", "}", "_"}:
            print(ch, end="")
        elif ch.isdigit():
            print(ch, end="")
        else:
            print(rot13(ch), end="")


if __name__ == "__main__":
    main()
