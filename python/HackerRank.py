if __name__ == '__main__':
    students = [[input(), float(input())] for _ in range(int(input()))]

    current_low = min(students, key=lambda x: x[1])

    for student in students[:]:
        if student[1] == current_low[1]:
            students.remove(student)
    students.sort()

    for student in students:
        if student[1] == min(students, key=lambda x: x[1])[1]:
            print(student[0])