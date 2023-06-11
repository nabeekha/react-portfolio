export function capitalFirstLetter(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    }
}

export function checkEmail(email) {
    //regex expression for validating email addresses 
    var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //return the regex expression
    return regex.test(String(email).toLowerCase())
}