function fib(n) 
{
    array = new Array(n);

    if (n >= 0)
    {
        array[0] = 0;
    }

    if (n >= 1)
    {
        array[1] = 1;
    }

    calculate(n, array)
    return array;
}

function calculate(n, array)
{
    if (n < 2)
    {
        return;
    }

    calculate(n - 1, array);
    array[n] = array[n - 1] + array[n - 2];
    return;
}