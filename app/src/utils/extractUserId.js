function extractUserId(token) {
    const [, payloadB64] = token.split('.') 
    
    const payloadJson = atob(payloadB64)

    const payload = JSON.parse(payloadJson)

    return payload.sub
}

export default extractUserId