const authorSubmitModel = require("../models/authorSubmit.model")

exports.createAuthorSubmitServices = async ({'description': description , 'fileURL' : fileURL, 'title': title}) => {
    const submitInfo = await authorSubmitModel.create({'description': description , 'fileURL' : fileURL, 'title': title});
    console.log(submitInfo);
    return submitInfo;
};
exports.getAuthorSubmitServices = async () => {
    const submitInfo = await authorSubmitModel.find({});
    console.log(submitInfo);
    return submitInfo;
};