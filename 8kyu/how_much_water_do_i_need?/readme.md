View [this kata](ttps://www.codewars.com/kata/575fa9afee048b293e000287) on [Codewars](https://www.codewars.com)

# How much water do I need?

My washing machine uses `water` amount of water to wash `load` (in JavaScript and Python) or `max-load`(in Ruby) amount of clothes. You are given a `clothes` amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

For example, if the load is `10`, the amount of water it requires is `5` and the amount of clothes to wash is `14`, then you need `5 * 1.1 ^ (14 - 10)` amount of water.

Write a function `howMuchWater` (JS)/`how_much_water` (Python and Ruby) to work out how much water is needed if you have a`clothes` amount of clothes. The function will accept 3 arguments: - `water`, `load` (or `max_load` in Ruby) and `clothes`.

My washing machine is an old model that can only handle double the amount of `load` (or `max_load`). If the amount of `clothes` is more than 2 times the standard amount of `load` (`max_load`), return `'Too much clothes'`. The washing machine also cannot handle any amount of `clothes` less than `load` (`max_load`). If that is the case, return `'Not enough clothes'`.
