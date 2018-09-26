function isPrime(number) {
        if (number === 0 || number === 1) {
          return false
        }
        let i = 2
        while (i < number) {
          if (number % i === 0) {
            return false
          }
          i = i + 1
        }
        return true
      }

      console.log(isPrime(11))
      console.log(isPrime(45))
      console.log(isPrime(7))
