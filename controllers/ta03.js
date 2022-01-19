const Item = require('../models/item');

exports.getTa03 = (req, res, next) => {
    Item.fetchAll(itemList => {
        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03',
            items: itemList
          });
    });
}

exports.postTa03 = (req, res, next) => {
    Item.fetchAll(itemList => {
        const items = [];
        const sItem = req.body.searchItem;
        for (item of itemList) {
            let itemTags
            for (tag of item.tags) {
                itemTags = item.tags.find(
                   t  => t === sItem
                );  
            }
            if (itemTags) {
                items.push(item);
            }
        }
        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03',
            items: items
          });
    });
}