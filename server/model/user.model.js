const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema ({
_id: { type: Schema.Types.ObjectId, auto: true },
name: { type: String, required: true },
contact: { type: String, required: true },
address: { type: String, required: true} ,
email: { type: String, required: true },
password: { type: String, required: true },
}, {
    //ayzen nshufha
versionKey: false
});

const user = mongoose.model('users', userSchema);

module.exports = user;