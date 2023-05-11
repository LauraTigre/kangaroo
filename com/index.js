const isEmail = require('./checkers/isEmail')
const validateName = require('./validators/validateName')
const validatedateOfBirth = require('./validators/validateDateOfBirth')
const validateEmail = require('./validators/validateEmail')
const validatePassword = require('./validators/validatePassword')
const validateCallback = require('./validators/validateCallback')
const validateUserId = require('./validators/validateUserId')
const validateText = require('./validators/validateText')
const validateVisibility = require('./validators/validateVisibility')
const validateStickyId = require('./validators/validateStickyId')
const validateNewEmail = require('./validators/validateNewEmail')
const validateNewPassword = require('./validators/validateNewPassword')
const validateNewPasswordConfirm = require('./validators/validateNewPasswordConfirm')
const validateColor = require('./validators/validateColor')
const validateToken = require('./validators/validateToken')
const validateUserNannyId = require('./validators/validateUserNannyId')
const validateCity = require('./validators/validateCity')
const validatePresentation = require('./validators/validatePresentation')
const validateExperience = require('./validators/validateExperience')
const validateExtras = require('./validators/validateExtras')
const validatePrice = require('./validators/validatePrice')
const validateAvailabilities = require('./validators/validateAvailabilities')
const validateDescription = require('./validators/validateDescription')
const validateKidsFrom = require('./validators/validateKidsFrom')
const validateKidsTo = require('./validators/validateKidsTo')
const validateRole = require('./validators/validateRole')
const validateUserParentId = require('./validators/validateUserParentId')
const validateMondayMorningSelected = require('./validators/validateMondayMorningSelected')
const validateMondayAfternoonSelected = require('./validators/validateMondayAfternoonSelected')
const validateMondayEveningSelected = require('./validators/validateMondayEveningSelected')
const validateTuesdayMorningSelected = require('./validators/validateTuesdayMorningSelected')
const validateTuesdayAfternoonSelected = require('./validators/validateTuesdayAfternoonSelected')
const validateTuesdayEveningSelected = require('./validators/validateTuesdayEveningSelected')
const validateWendsdayMorningSelected = require('./validators/validateWendsdayMorningSelected')
const validateWendsdayAfternoonSelected = require('./validators/validateWendsdayAfternoonSelected')
const validateWendsdayEveningSelected = require('./validators/validateWendsdayEveningSelected')
const validateThursdayMorningSelected = require('./validators/validateThursdayMorningSelected')
const validateThursdayAfternoonSelected = require('./validators/validateThursdayAfternoonSelected')
const validateThursdayEveningSelected = require('./validators/validateThursdayEveningSelected')
const validateFridayMorningSelected = require('./validators/validateFridayMorningSelected')
const validateFridayAfternoonSelected = require('./validators/validateFridayAfternoonSelected')
const validateFridayEveningSelected = require('./validators/validateFridayEveningSelected')
const validateSaturdayMorningSelected = require('./validators/validateSaturdayMorningSelected')
const validateSaturdayAfternoonSelected = require('./validators/validateSaturdayAfternoonSelected')
const validateSaturdayEveningSelected = require('./validators/validateSaturdayEveningSelected')
const validateSundayAfternoonSelected = require('./validators/validateSundayAfternoonSelected')
const validateSundayMorningSelected = require('./validators/validateSundayMorningSelected')
const validateSundayEveningSelected = require('./validators/validateSundayEveningSelected')
const validatePriceFrom = require('./validators/validatePriceFrom')
const validatePriceTo = require('./validators/validatePriceTo')
const validateYearsOfExperienceFrom = require('./validators/validateYearsOfExperienceFrom')
const validateYearsOfExperienceTo = require('./validators/validateYearsOfExperienceTo')
const validateNannyId = require('./validators/validateNannyId')
const validateNewMondayMorningSelected = require('./validators/validateNewMondayMorningSelected')
const validateNewMondayAfternoonSelected = require('./validators/validateNewMondayAfternoonSelected')
const validateNewMondayEveningSelected = require('./validators/validateNewMondayEveningSelected')
const validateNewTuesdayMorningSelected = require('./validators/validateNewTuesdayMorningSelected')
const validateNewTuesdayAfternoonSelected = require('./validators/validateNewTuesdayAfternoonSelected')
const validateNewTuesdayEveningSelected = require('./validators/validateNewTuesdayEveningSelected')
const validateNewWendsdayMorningSelected = require('./validators/validateNewWendsdayMorningSelected')
const validateNewWendsdayAfternoonSelected = require('./validators/validateNewWendsdayAfternoonSelected')
const validateNewWendsdayEveningSelected = require('./validators/validateNewWendsdayEveningSelected')
const validateNewThursdayMorningSelected = require('./validators/validateNewThursdayMorningSelected')
const validateNewThursdayAfternoonSelected = require('./validators/validateNewThursdayAfternoonSelected')
const validateNewThursdayEveningSelected = require('./validators/validateNewThursdayEveningSelected')
const validateNewFridayMorningSelected = require('./validators/validateNewFridayMorningSelected')
const validateNewFridayAfternoonSelected = require('./validators/validateNewFridayAfternoonSelected')
const validateNewFridayEveningSelected = require('./validators/validateNewFridayEveningSelected')
const validateNewSaturdayMorningSelected = require('./validators/validateNewSaturdayMorningSelected')
const validateNewSaturdayAfternoonSelected = require('./validators/validateNewSaturdayAfternoonSelected')
const validateNewSaturdayEveningSelected = require('./validators/validateNewSaturdayEveningSelected')
const validateNewSundayMorningSelected = require('./validators/validateNewSundayMorningSelected')
const validateNewSundayAfternoonSelected = require('./validators/validateNewSundayAfternoonSelected')
const validateNewSundayEveningSelected = require('./validators/validateNewSundayEveningSelected')
const validateNewDescription = require('./validators/validateNewDescription')
const validateNewExperience = require('./validators/validateNewExperience')
const validateParentId = require('./validators/validateParentId')
const validateNewName = require('./validators/validateNewName')
const validateNewDateOfBirth = require('./validators/validateNewDateOfBirth')
const validateNewExtras = require('./validators/validateNewExtras')
const validatePhoto = require('./validators/validatePhoto')
const validateKidId = require('./validators/validateKidId')
const validateNewPhoto = require('./validators/validateNewPhoto')
const validateMessage = require('./validators/validateMessage')
const validateUserIdFrom = require('./validators/validateUserIdFrom')
const validateUserIdTo = require('./validators/validateUserIdTo')
const validateDate = require('./validators/validateDate')
const validateChatId = require('./validators/validateChatId')
const validateNewPrice = require('./validators/validateNewPrice')



const AuthError = require('./errors/AuthError')
const CoherenceError = require('./errors/CoherenceError')
const FormatError = require('./errors/FormatError')
const ExistenceError = require('./errors/ExistenceError')
const ValueError = require('./errors/ValueError')
const ClientError = require('./errors/ClientError')
const ServerError = require('./errors/ServerError')


module.exports = {
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
    validateKidsFrom,
    validateKidsTo,
    validateRole,
    validateUserParentId,
    validateMondayMorningSelected,
    validateMondayAfternoonSelected,
    validateMondayEveningSelected,
    validateTuesdayMorningSelected,
    validateTuesdayAfternoonSelected,
    validateTuesdayEveningSelected,
    validateWendsdayMorningSelected,
    validateWendsdayAfternoonSelected,
    validateWendsdayEveningSelected,
    validateThursdayMorningSelected,
    validateThursdayAfternoonSelected,
    validateThursdayEveningSelected,
    validateFridayMorningSelected,
    validateFridayAfternoonSelected,
    validateFridayEveningSelected,
    validateSaturdayMorningSelected,
    validateSaturdayAfternoonSelected,
    validateSaturdayEveningSelected,
    validateSundayMorningSelected,
    validateSundayAfternoonSelected,
    validateSundayEveningSelected,
    validatePriceFrom,
    validatePriceTo,
    validateYearsOfExperienceFrom,
    validateYearsOfExperienceTo,
    validateNannyId,
    validateNewMondayMorningSelected,
    validateNewMondayAfternoonSelected,
    validateNewMondayEveningSelected,
    validateNewTuesdayMorningSelected,
    validateNewTuesdayAfternoonSelected,
    validateNewTuesdayEveningSelected,
    validateNewWendsdayMorningSelected,
    validateNewWendsdayAfternoonSelected,
    validateNewWendsdayEveningSelected,
    validateNewThursdayMorningSelected,
    validateNewThursdayAfternoonSelected,
    validateNewThursdayEveningSelected,
    validateNewFridayMorningSelected,
    validateNewFridayAfternoonSelected,
    validateNewFridayEveningSelected,
    validateNewSaturdayMorningSelected,
    validateNewSaturdayAfternoonSelected,
    validateNewSaturdayEveningSelected,
    validateNewSundayMorningSelected,
    validateNewSundayAfternoonSelected,
    validateNewSundayEveningSelected,
    validateNewDescription,
    validateNewExperience,
    validateParentId,
    validateNewName,
    validateNewDateOfBirth,
    validateNewExtras,
    validatePhoto,
    validateKidId,
    validateNewPhoto,
    validateMessage,
    validateUserIdFrom,
    validateUserIdTo,
    validateDate,
    validateChatId,
    validateNewPrice,

    AuthError,
    CoherenceError,
    FormatError,
    ExistenceError,
    ValueError,
    ClientError,
    ServerError



}