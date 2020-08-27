const HttpStatus = require('http-status-codes');
const Record = require('../models/recordAdapter');
const Response = require('../models/response');

const ResponseMessage = require('../utility/constants').ResponseMessage;
const ResponseCodes = require('../utility/constants').ResponseCodes;

class RecordController {
    static async searchRecords(req, res) {
        try {
            let records = await Record.filterRecord(req.body);
            res.status(HttpStatus.OK).send(new Response(ResponseCodes.SUCCESS_CODE, ResponseMessage.SUCCESS_MESSAGE, records));
        } catch (err) {
        }
    }
}

module.exports = RecordController