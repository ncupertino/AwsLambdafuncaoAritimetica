'use strict';
const somar = require('./aritimetica/somar');
const multi = require('./aritimetica/multiplicar')



module.exports.hello = async (event,context) => {
  try {
    let result = 0;
    let operation = '';

    if (event.operation === 'somar') {
      result = somar.somar(event.number1, event.number2);
      operation = 'somar';
    } else if (event.operation === 'multiplicar') {
      result = multi.multiplicar(event.number1, event.number2)
      operation = 'multiplicar';
    } else {
      operation = 'Não encontrada';
    }
    
    const data = {
      result: result,
      operation: operation
    }

    return {
      statusCode: 200,
      data: data,
      context: context
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: error.message,
    }
  }
};
