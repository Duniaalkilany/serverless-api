'use strict';


const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {
  try {
    const id = event.pathParameters ? event.pathParameters.id : null;
    const { name, phone ,gender } = JSON.parse(event.body);
    const data = await peopleModel.update({ "id": id }, { "name": name, "phone": phone ,"gender": gender});
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
  } catch (e) {
    return {
      statusCode: 500,
      message: e.message
    }
  }
}