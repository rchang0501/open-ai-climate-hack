# this snippet is taken from: https://archive.stsci.edu/vo/python_examples.html

def Greg2JD(year, month, day):

    if (month < 3):
        y = float(year) - 1.0
        m = float(month) + 12.0
    else:
        y = float(year)
        m = float(month)
    a = 0; b = 0
    if (y + m / 12 + float(day) / 365 > 1582.87166):
        a = int(y / 100)
        b = 2 - a + int(float(a / 4))
    c = 0
    if (y < 0.0):
        c = int(365.25 * y - 0.75)
    else:
        c = int(365.25 * y)
    d = int(30.6001 * (m + 1))
    jd = float(b + c + d + day + 1720994.5)

    return jd