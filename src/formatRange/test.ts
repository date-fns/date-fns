import formatRange from './index'
import { describe, it } from 'vitest'
import assert from 'assert'

const from = new Date(2023, 1, 1)
const to = new Date(2023, 1, 2)

const from2 = new Date(2023, 1, 1)
const to2 = new Date(2023, 2, 12)

const from3 = new Date(2023, 1, 1)
const to3 = new Date(2024, 2, 12)

describe('formatRange', () => {
  it('only day range', () => {
    assert(
      formatRange(from, to, { day: 'numeric', month: 'long', year: 'numeric' }),
      '1-2 februára 2023'
    )
    assert(
      formatRange(from, to, {
        day: 'numeric',
        month: undefined,
        year: 'numeric',
      }),
      '1-2 2023'
    )
    assert(
      formatRange(from, to, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      '1-2 2 2023'
    )
    assert(
      formatRange(from, to, {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
      }),
      '1-2 2 2023'
    )
    assert(
      formatRange(from, to, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),
      '1-2 2 2023'
    )
    assert(
      formatRange(from, to, {
        day: 'numeric',
        month: 'narrow',
        year: 'numeric',
      }),
      '1-2 2 2023'
    )
  })

  it('only month range', () => {
    assert(
      formatRange(from2, to2, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      '1 februára-12 marca 2023'
    )
    assert(
      formatRange(from2, to2, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      '1 2-12 3 2023'
    )
    assert(
      formatRange(from2, to2, {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
      }),
      '1 02-12 03 2023'
    )
    assert(
      formatRange(from2, to2, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),
      '1 2-12 3 2023'
    )
    assert(
      formatRange(from2, to2, {
        day: 'numeric',
        month: 'narrow',
        year: 'numeric',
      }),
      '1 2-12 3 2023'
    )
    assert(
      formatRange(from2, to2, {
        day: 'numeric',
        month: undefined,
        year: 'numeric',
      }),
      '1-12 2023'
    )
  })

  it('only month range', () => {
    assert(
      formatRange(from3, to3, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }),
      '1 februára 2023-12 marca 2024'
    )
    assert(
      formatRange(from3, to3, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      '1 2 2023-12 3 2024'
    )
    assert(
      formatRange(from3, to3, {
        day: 'numeric',
        month: '2-digit',
        year: 'numeric',
      }),
      '1 02 2023-12 03 2024'
    )
    assert(
      formatRange(from3, to3, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      }),
      '1 2 2023-12 3 2024'
    )
    assert(
      formatRange(from3, to3, {
        day: 'numeric',
        month: 'narrow',
        year: 'numeric',
      }),
      '1 2 2023-12 3 2024'
    )
    assert(
      formatRange(from3, to3, {
        day: 'numeric',
        month: undefined,
        year: 'numeric',
      }),
      '2023 1-2024 12'
    )
  })
})
