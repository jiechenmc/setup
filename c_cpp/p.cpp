// arrays example
#include <iostream>
using namespace std;

void modify(int a[], int size)
{
    for (int i = 0; i < size; i++)
    {
        // *& deferencing the address lol
        *&a[i] = 5;
    }
}

void print(int a[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << a[i] << '\n';
    }
}
int main()
{
    int foo[] = {16, 2, 77, 40, 12071};
    modify(foo, 5);
    print(foo, 5);
    return 0;
}
