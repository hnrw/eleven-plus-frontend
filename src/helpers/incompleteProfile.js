const incompleteProfile = (p) => {
  if (!p.firstName || !p.lastName || !p.dob || !p.gender) {
    return true
  }
  return false
}

export default incompleteProfile
