
// removing items with ajax
$('.deleteItemButton').click(function () {
    const itemId = $(this).attr('id')
    // fades out
    $(this).parent().parent().parent().fadeOut(300, function () {
        //smooth transition for divs underneath
        $(this).css({ "visibility": "hidden", display: 'block' }).slideUp();
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
    $(this).parent().parent().parent().fadeOut(300, function () {
        //smooth transition for divs underneath
        $(this).css({ "visibility": "hidden", display: 'block' }).slideUp();
    });
    $.ajax({
        method: 'POST',
        url: '/sale/' + saleId + "?_method=Delete",
    }).done(function () {
        console.log('item deleted: ' + saleId)
    })
})
