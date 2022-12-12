const match = require('./match')

describe('match function', () => {
  it('should match first test case', () => {
    const expected = true
    
    const actual = match([1, 2, 3], function(num) { return num === 2 })
    
    expect(actual).toBe(expected)
  })
  
  it('should not match second test case', () => {
    const expected = false
    
    const actual = match([1, 5, 3], function(num) { return num === 2 })
    
    expect(actual).toBe(expected)
  })
  
  it('should match third test case', () => {
    const expected = true
    
    const actual = match([1, 2, 3], function(num) { return num % 2 === 0 })
    
    expect(actual).toBe(expected)
  })
  
  it('should not match fourth test case', () => {
    const expected = false
    
    const actual = match([1, 5, 3], function(num) { return num % 2 === 0})
    
    expect(actual).toBe(expected)
  })
})