const FormatError = require('./format-error');
function forceError() {
    //throw new Error('...')
    //throw new TypeError('...')
    throw new FormatError('...')
}

try {
    forceError()
} catch (error) {
    if (error instanceof TypeError)
        console.log('type error')
    else if (error instanceof FormatError)
        console.log('format error')
    else
        console.log('generic error')
}