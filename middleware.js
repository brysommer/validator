const Ajv = require("ajv");

const ajv = new Ajv();

const mw = schema => (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    console.log(valid);
    if (!valid) console.log(validate.errors);
    if (valid) {
        console.log('success');
        next();
        return;
    };
};

module.exports = mw;