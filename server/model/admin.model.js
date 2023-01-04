const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const adminSchema = new Schema ({
email: { type: String, required: true },
password: { type: String, required: true },
}, {
versionKey: false
});

const admin = mongoose.model('admin', adminSchema);

module.exports = admin;