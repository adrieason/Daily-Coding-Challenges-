/*Given an array of numbers and an index, return either the index of the smallest number that is larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).*/

const leastLarger = (a, i) => a.indexOf(Math.min(...a.filter(n => n > a[i])))
