const request = require('supertest');
require('dotenv').config()
const application = require('../server');

describe('getRoutes test cases', () => {
    let requestData;
    beforeEach(() => {
        jest.useFakeTimers();
        requestData = {
            startDate: '2018-01-26',
            endDate: '2020-02-02',
            minCount: '1000',
            maxCount: '2000',
        };
    });


    afterEach(async () => {
        await application.close();
    });

    const getRequests = () => request(application).post('/records').send(requestData);

    it('Missing input prop test', async () => {
        delete requestData.startDate;
        const res = await getRequests();
        expect(res.body.code).toBe(1);
    });

    it('Not valid date format test', async () => {
        requestData.startDate = '';
        requestData.endDate = '';
        const res = await getRequests();
        expect(res.body.code).toBe(2);
    });

    it('Max count lower than min count test', async () => {
        requestData.minCount = 5000;
        const res = await getRequests();
        expect(res.body.code).toBe(4);
    });


});