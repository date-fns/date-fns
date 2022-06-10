import { setDefaultOptions } from '../defaultOptions'

export function assertType<T>(_: T): void {}

export function resetDefaultOptions(): void {
  setDefaultOptions({})
}
