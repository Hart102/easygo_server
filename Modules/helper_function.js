const generate_username = (email) => {
    const emailAddress = email.split('@')[0]
    const usernameWithoutDots = emailAddress.replace(/\./g, '')
    const alphanumericOnly = usernameWithoutDots.replace(/\W/g, '_').toLowerCase()
    return alphanumericOnly
}
module.exports = {
    generate_username
}