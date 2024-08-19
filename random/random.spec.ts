import { it, expect, describe, vi } from 'vitest'
import { generateRandomString } from "./random";


describe('Math.random', () => {
  it('should generate random string', () => {
    // vi.spyOn(Math, "random").mockImplementation(() => {
    //   return 0.1
    // })
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.1
    })
    vi.spyOn(Math, "random").mockImplementationOnce(() => {
      return 0.2
    })

    const r = generateRandomString(2)
    expect(r).toBe("fc")
  })
})