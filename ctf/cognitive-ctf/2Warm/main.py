def main():
    ans = ""
    num = 23

    while num != 0:
        div, mod = divmod(num, 2)
        ans = str(mod) + ans
        num = div

    print(ans)


if __name__ == "__main__":
    main()
