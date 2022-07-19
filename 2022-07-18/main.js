/*our goal is to return multiplication table for number that is always an integer from 1 to 10.

For example, a multiplication table (string) for number == 5 looks like below:*/

const multiTable = (n) => {
  const table = []
  for(let i = 1; i <= 10; i++) {
    table.push(`${i} * ${n} = ${i*n}`)
  }
  return table.join('\n')
}