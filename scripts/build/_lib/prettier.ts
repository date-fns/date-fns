import prettier from 'prettier'
import config from '../../../.prettierrc'

export function formatCode(code: string, parser: string = 'babel'): string {
  return prettier.format(code, { ...config, parser })
}
