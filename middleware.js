const Ajv = require("ajv");

const ajv = new Ajv();

const mw = schema => (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (valid) {
        console.log('success');
        next();
        return;
    };

    res.statusCode = 400;
    res.json({ status :'Wrong data' });
};

module.exports = mw;