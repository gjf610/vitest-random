
export function checkFriday() {
  const today = new Date()
  console.log(today.getDay())
  if (today.getDay() === 5) {
    return "happy"
  } else {
    return "sad"
  }
}
