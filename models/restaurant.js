var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
    refId: 'String',
    name: 'String',
    url:'String',
    location: {
        address:'String',
        locality: 'String',
        city:  'String',
        latitude: 'String',
        longitude:'String',
        zipcode:  'String',
        country_id:  'String'
    },
    average_cost_for_two:  'String'  ,
    price_range:'String',
    thumb: 'String',
    photos_url:'String',
    has_online_delivery:  'String',
    is_delivering_now: 'String',
    cuisines:  'String',
    all_reviews_count:  'String'
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);