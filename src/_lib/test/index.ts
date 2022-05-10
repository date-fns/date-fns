import { setDefaultLocale } from '../defaultLocale'

export function assertType<T>(_: T): void {}

export function resetDefaultLocale(): void {
  setDefaultLocale(undefined)
}
