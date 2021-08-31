const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    //const id = event?.pathParameters?.id;
    const id = event.pathParameters ? event.pathParameters.id : null;
    let data;
    if (id) {
        //get specific info for only this id 
      const results = await peopleModel.query('id').eq(id).exec();
      data = results[0];
    } else {
        //get all objects 
      data = await peopleModel.scan().exec();
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      message: err.message,
    };
  }
};