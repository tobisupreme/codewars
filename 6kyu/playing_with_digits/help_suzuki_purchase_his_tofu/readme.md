View [this kata](https://www.codewars.com/kata/5552101f47fc5178b1000050/) on [Codewars](https://www.codewars.com)

# Playing with Digits

## Description

Some numbers have funny properties. For example:

`89` ==> 8<sup>1</sup> + 9<sup>2</sup> = `89 * 1`

`695` ==> 6<sup>2</sup> + 9<sup>3</sup> + 5<sup>4</sup> = `1390` = `695 * 2`

`46288` ==> 4<sup>3</sup> + 6<sup>4</sup> + 2<sup>5</sup>+ 8<sup>6</sup> + 8<sup>7</sup>= `2360688` = `46288 * 51`

Given a positive integer `n` written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer `k`, if it exists, such that the sum of the digits of `n` taken to the successive powers of `p` is equal to `k * n`.
In other words:

Is there an integer `k` such as : `(a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...)` = `n * k`

If it is the case we will return `k`, if not return `-1`.
