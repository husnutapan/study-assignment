const ResponseMessage = {
    SUCCESS_MESSAGE: 'Success',
    EMPTY_FIELD: 'Request missing propert.Please check and retry.',
    NOT_VALID_DATE_FORMAT: 'Please valid date format.',
    SUBSTRACT_DATE_ERROR: 'End date cannot equal or lower than start date',
    SUBSTRACT_COUNTS_ERROR: 'Max count cannot lower than min count'
}

const ResponseCodes = {
    SUCCESS_CODE: 0,
    EMPTY_FIELD_CODE: 1,
    NOT_VALID_DATE_FORMAT_CODE: 2,
    SUBSTRACT_DATE_ERROR_CODE: 3,
    SUBSTRACT_COUNTS_ERROR_CODE: 4

}

module.exports = {ResponseMessage, ResponseCodes}

