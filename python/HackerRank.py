x_i = [62, 65, 59, 63, 69, 63, 60]
y_i = [2, 6, 1, 4, 6, 1, 3]

print(sum([x * y_i[i] for i, x in enumerate(x_i)]))
