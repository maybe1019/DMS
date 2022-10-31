const cookieparser = require('cookieparser')

export function getUserFromCookie(req) {
    if (process.server && process.static) return
    if (!req.headers.cookie) return

    if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie)
        const accessTokenCookie = parsed.access_token
        if (!accessTokenCookie) return

        const decodedToken = JSON.parse(accessTokenCookie)
        if (!decodedToken) return
        return decodedToken
    }
}

export function getUserFromSession(req) {
    return req.session ? req.session.userId : null
}

const generateRandomString = (len) => {
    const str = '0123456789abcdef'
    let res = ''
    for (let i = 0; i < len; i++) {
        res += str[parseInt(Math.random() * str.length)]
    }
    return res
}

export function generateNewToken() {
    return (
        `${generateRandomString(8)}-${generateRandomString(4)}-${generateRandomString(4)}-` +
        `${generateRandomString(4)}-${generateRandomString(12)}`
    )
}
