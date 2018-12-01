import path from 'path'
import {func} from './b/sub'
const text = path.resolve(__dirname, 'c', 'text.txt')
func(text)