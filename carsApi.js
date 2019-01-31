"use strict";
exports.__esModule = true;
exports.carsApi = {
    getCars: function () { return new Promise(function (resolve) { return resolve({
        order_id: 'uuid for order',
        order_description: 'order description',
        cars: [{
                car_id: 'yolo string',
                image: 'intellisense is awesome',
                model: 'whoever doesn\'t agree is a jerk',
                total: 10
            }]
    }); }); }
};
