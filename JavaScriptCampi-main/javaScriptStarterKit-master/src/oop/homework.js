function IsPrime(...numbers)
{
    let isPrimeControl=true
    for (let i = 0; i < numbers.length; i++) 
    {
        isPrimeControl=true
        let sayi=numbers[i]
        for (let j = 2; j < sayi; j++) 
        {
            if(sayi%j==0)
            {
                isPrimeControl=false
            }
        }
        if(isPrimeControl==true)
        {
            console.log(numbers[i]+" sayi asaldir.")
        }
        else
        {
            console.log(numbers[i]+" sayi asal değildir.")
        }
    }
}
function NumberOfFriends(sayi1,sayi2)
{
    
    let s2total=0
    let s1total=0
    for (let i = 1; i < sayi1; i++) 
    {
        if(sayi1%i==0)
        {
            s1total+=i
        }
    }
    for (let j = 1; j < sayi2; j++) 
    {
        if(sayi2%j==0)
        {
            s2total+=j
        }
    }
    console.log(s1total+"+"+s2total)
    if((s1total==sayi2)&&(s2total==sayi1))
    {
        console.log("iki sayi arkadaşdir")
    }
}
function PerfectNumbers()
{
    for (let i = 1; i < 1001; i++) 
    {
        let total=0;
        for (let j = 0; j < i; j++) 
        {
            if(i%j==0)
            {
                total+=j
            }
        }
        if(total==i)
        {
            console.log(i)

        }  
    }
}
function Prime(...numbers)
{
    let isPrimeControl=true
    for (let i = 1; i < 1001; i++) 
    {
        isPrimeControl=true
        for (let j = 2; j < i; j++) 
        {
            if(i%j==0)
            {
                isPrimeControl=false
                break
            }
        }
        if(isPrimeControl==true)
        {
            console.log(i)
        }
    }
}
Prime()
