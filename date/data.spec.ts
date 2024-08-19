import { beforeEach, afterEach, it, expect, describe, vi } from 'vitest'
import { checkFriday } from "./date";

describe('date', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.useRealTimers()
  })
  it("should be happy when it's Friday", () => {
    vi.setSystemTime(new Date(2024, 7, 16))

    const r = checkFriday()

    expect(r).toBe("happy")
  })

  it("should be happy when it's not Friday", () => {
    vi.setSystemTime(new Date(2024, 7, 19))

    const r = checkFriday()

    expect(r).toBe("sad")
  })
})
