const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    key: String,
    value: String,
    createdAt: Date,
    counts: Array
});

class Record {
    static filterRecord({startDate, endDate, minCount, maxCount}) {
        return this.aggregate([
            {
                // Filter by dates.
                $match: {
                    createdAt: {
                        $gte: new Date(startDate),
                        $lte: new Date(endDate)
                    }
                }
            },
            {
                // Flatten counts arrays
                $unwind: {
                    path: '$counts'
                }
            },
            {
                // Group by key and createdAt
                $group: {
                    _id: {key: '$key', createdAt: '$createdAt'},
                    key: {$first: '$key'},
                    createdAt: {$first: 'createdAt'},
                    totalCount: {
                        $sum: '$counts'
                    }
                }
            },
            {
                // Filter by minCount and maxCount
                $match: {
                    totalCount: {
                        $gte: minCount,
                        $lte: maxCount
                    }
                }
            },
            {
                // Exclude _id in resultset
                $project: {
                    _id: 0
                }
            }
        ]).exec();
    }
}

schema.loadClass(Record);

module.exports = mongoose.model('Record', schema);
