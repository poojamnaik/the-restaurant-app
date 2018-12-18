var mongoose= require('mongoose');

var RestaurantSchema = new mongoose.Schema({
        refId: {
            type: 'String'
        },
        name: {
            type: 'String'
        },
        url: {
            type: 'String'
        },
        location: {
            address: {
                type: 'String'
            },
            locality: {
                type: 'String'
            },
            city: {
                type: 'String'
            },
            latitude: {
                type: 'String'
            },
            longitude: {
                type: 'String'
            },
            zipcode: {
                type: 'Date'
            },
            country_id: {
                type: 'Date'
            }
        },
        average_cost_for_two: {
            type: 'Date'
        },
        price_range: {
            type: 'Date'
        },
        currency: {
            type: 'String'
        },
        thumb: {
            type: 'String'
        },
        featured_image: {
            type: 'String'
        },
        photos_url: {
            type: 'String'
        },
        menu_url: {
            type: 'String'
        },
        events_url: {
            type: 'String'
        },
        user_rating: {
            aggregate_rating: {
                type: 'Date'
            },
            rating_text: {
                type: 'String'
            },
            rating_color: {
                type: 'String'
            },
            votes: {
                type: 'Date'
            }
        },
        has_online_delivery: {
            type: 'Date'
        },
        is_delivering_now: {
            type: 'Date'
        },
        has_table_booking: {
            type: 'Date'
        },
        deeplink: {
            type: 'String'
        },
        cuisines: {
            type: 'String'
        },
        all_reviews_count: {
            type: 'String'
        },
        photo_count: {
            type: 'String'
        },
        phone_numbers: {
            type: 'String'
        },
        photos: {
            type: [
                'Mixed'
            ]
        },
        all_reviews: {
            type: [
                'Mixed'
            ]
        }
    });

  module.exports = mongoose.model('Restaurant', RestaurantSchema);