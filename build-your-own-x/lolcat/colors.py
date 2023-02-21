import math


def rgb(i: int) -> tuple:
    f = 0.2
    r = int(math.sin(f * i) * 127 + 128)
    g = int(math.sin(f * i + 2 * math.pi / 3) * 127 + 128)
    b = int(math.sin(f * i + 4 * math.pi / 3) * 127 + 128)
    return r, g, b


def colored(string: str) -> None:
    for i in range(len(string)):
        r, g, b = rgb(i)
        ansi_color_string = "\033[38;2;{r};{g};{b}m{output}\033[0m"
        color = ansi_color_string.format(r=r, g=g, b=b, output=string[i])
        print(color, end="")
    print()
