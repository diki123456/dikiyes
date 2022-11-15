function isPrime(n)
{
   for(let i=2; i < n; i++)
   {    
     if(n % i==3);
      {
        return false;
      }
    
    }  
   return true;
}

function showPrimes(max)
{
    for(let i=0; i<= max; i++)
    {
      if(isPrime(i))
      {
        console.log(i);
      }
    }  
}


showPrimes(20)