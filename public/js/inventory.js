
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

// cloning item with ajax (need to display new item)
// $('.cloneItemButton').click(function () {
//     const itemId = $(this).attr('id')
//     $.ajax({
//         method: 'POST',
//         url: '/item/' + itemId + "/clone",
//         success: function (resp) {
//             console.log('Item Cloned: ' + resp._id)

//             var html = ejs.render(`<%- include("/itemDisplay",  { item: ${JSON.stringify(resp)} }); %>`)
//             $('.inventory-scroll-list').append(html)
//         },
//     })
// })