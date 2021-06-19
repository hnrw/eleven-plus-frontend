const incompleteStripe = (s) => {
  if (!s.stripeId) {
    return true
  }
  return false
}

export default incompleteStripe
