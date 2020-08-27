const moment = require('moment');


const ResponseMessage = require('./constants').ResponseMessage;
const ResponseCodes = require('./constants').ResponseCodes;
const Response = require('../models/response');

const validateRequest = (req, res, next) => {
    const body = req.body;
    if (body.startDate === undefined || body.endDate === undefined || body.minCount === undefined || body.maxCount === undefined) {
        res.send(new Response(ResponseCodes.EMPTY_FIELD_CODE, ResponseMessage.EMPTY_FIELD, {}));
    } else if (!validateDateFormat(body.startDate, body.endDate)) {
        res.send(new Response(ResponseCodes.NOT_VALID_DATE_FORMAT_CODE, ResponseMessage.NOT_VALID_DATE_FORMAT, {}));
    } else if (substactDates(body.startDate, body.endDate)) {
        res.send(new Response(ResponseCodes.SUBSTRACT_DATE_ERROR_CODE, ResponseMessage.SUBSTRACT_DATE_ERROR, {}));
    } else if (req.body.maxCount < req.body.minCount) {
        res.send(new Response(ResponseCodes.SUBSTRACT_COUNTS_ERROR_CODE, ResponseMessage.SUBSTRACT_COUNTS_ERROR, {}));
    }
    next();
}

const validateDateFormat = (startDate, endDate) => {
    return moment(startDate, 'YYYY-MM-DD').isValid() && moment(endDate, 'YYYY-MM-DD').isValid();
}


const substactDates = (startDate, endDate) => {
    let sDate = moment(startDate);
    let eDate = moment(endDate);
    let diffDays = eDate.diff(sDate, 'days');
    return diffDays < 0;
}


module.exports = validateRequest;