import { format } from 'date-fns/esm'

const result = format(new Date(2017, 0, 25, 21, 28, 15), 'dd.MM.yyyy HH:mm:ss')
console.log(result === '25.01.2017 21:28:15')
