
// removing items with ajax
$('.deleteItemButton').click(function () {
    const itemId = $(this).attr('id')
    // fades out
    $(this).parent().parent().parent().fadeOut(200, function () {
        //smooth transition for divs underneath
        $(this).css({ "visibility": "hidden", display: 'block' }).slideUp(150);
    });
    $.ajax({
        method: 'POST',
        url: '/item/' + itemId + "?_method=Delete",
    }).done(function () {
        console.log('item deleted: ' + itemId)
    })
})

// removing sale with ajax
$('.deleteSaleButton').click(function () {
    const saleId = $(this).attr('id')
    // fades out
    $(this).parent().parent().parent().fadeOut(200, function () {
        //smooth transition for divs underneath
        $(this).css({ "visibility": "hidden", display: 'block' }).slideUp(150);
    });
    $.ajax({
        method: 'POST',
        url: '/sale/' + saleId + "?_method=Delete",
    }).done(function () {
        console.log('item deleted: ' + saleId)
    })
})

// // cloning item with ajax (need to display new item)
// $('.cloneItemButton').click(function () {
//     const itemId = $(this).attr('id')
//     $.ajax({
//         method: 'POST',
//         url: '/item/' + itemId + "/clone",
//         success: function (resp) {
//             console.log('Item Cloned: ' + resp._id)
//             const item = resp

//             let str = "<%= include('/itemsDisplay', {item: resp}); %>",
//                 fn = ejs.compile(str, { client: true });

//             fn(data, null, function (path, d) { // include callback
//                 console.log(path);
//                 console.log(d);
//                 // d -> {person: 'John'}
//                 // Put your code here
//                 // Return the contents of file as a string
//             }); // returns rendered string
//             $('.inventory-scroll-list').append(fn)
//         },
//     })
// })