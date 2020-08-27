class Response {
    constructor(code, msg, data) {
        this.code = code;
        this.data = data;
        this.message = msg;
    }
}

module.exports = Response