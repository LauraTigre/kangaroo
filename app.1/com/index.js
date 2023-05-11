const isEmail = require('./checkers/isEmail')
const validateName = require('./validators/validateName')
const validatedateOfBirth = require('./validators/validateDateOfBirth')
const validateEmail= require('./validators/validateEmail')
const validatePassword= require('./validators/validatePassword')
const validateCallback = require('./validators/validateCallback')
const validateUserId= require('./validators/validateUserId')
const validateText= require('./validators/validateText')
const validateVisibility= require('./validators/validateVisibility')
const validateStickyId= require('./validators/validateStickyId')
const validateNewEmail = require('./validators/validateNewEmail')
const validateNewPassword= require('./validators/validateNewPassword')
const validateNewPasswordConfirm= require('./validators/validateNewPasswordConfirm')
const validateColor = require('./validators/validateColor')
const validateToken= require('./validators/validateToken')
const validateUserNannyId = require('./validators/validateUserNannyId')
const validateCity= require('./validators/validateCity')
const validatePresentation = require('./validators/validatePresentation')
const validateExperience = require('./validators/validateExperience')
const validateExtras= require('./validators/validateExtras')
const validatePrice = require('./validators/validatePrice')
const validateAvailabilities = require('./validators/validateAvailabilities')
const validateDescription = require('./validators/validateDescription')
const validateKids= require('./validators/validateKids')
const validateRole = require('./validators/validateRole')
const validateUserParentId = require('./validators/validateUserParentId')


const AuthError= require('./errors/AuthError') 
const CoherenceError= require('./errors/CoherenceError') 
const FormatError= require('./errors/FormatError') 
const ExistenceError= require('./errors/ExistenceError') 
const ValueError = require('./errors/ValueError')
const ClientError = require('./errors/ClientError')
const ServerError = require('./errors/ServerError')


module.exports={
    isEmail,


    validateName,
    validatedateOfBirth,
    validateEmail,
    validatePassword,
    validateCallback,
    validateUserId,
    validateText,
    validateVisibility,
    validateStickyId,
    validateNewEmail,
    validateNewPassword,
    validateNewPasswordConfirm,
    validateColor,
    validateToken,
    validateUserNannyId,
    validateCity,
    validatePresentation,
    validateExperience,
    validateExtras,
    validatePrice,
    validateAvailabilities,
    validateDescription,
    validateKids,
    validateRole,
    validateUserParentId,
   

    AuthError,
    CoherenceError,
    FormatError,
    ExistenceError,
    ValueError,
    ClientError,
    ServerError



}