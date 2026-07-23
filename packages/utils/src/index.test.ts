import { describe, it, expect } from 'vitest'
import { formatDate, slugify, truncate, validateEmail } from './index'
 
describe('formatDate', () => {
  it('formats date correctly', () => {
    const date = new Date('2024-01-15')
    expect(formatDate(date)).toBe('Jan 15, 2024')
  })
})
 
describe('slugify', () => {
  it('converts text to slug', () => {
    expect(slugify('Hello World!')).toBe('hello-world')
  })
 
  it('removes special characters', () => {
    expect(slugify('Test@#$%')).toBe('test')
  })
})
 
describe('truncate', () => {
  it('truncates long text', () => {
    expect(truncate('Hello World', 5)).toBe('Hello...')
  })
 
  it('does not truncate short text', () => {
    expect(truncate('Hi', 5)).toBe('Hi')
  })
})
 
describe('validateEmail', () => {
  it('validates correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true)
  })
 
  it('rejects invalid email', () => {
    expect(validateEmail('invalid')).toBe(false)
  })
})