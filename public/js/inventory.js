
cloneItem = (itemId) => {
    $.ajax({
        method: 'POST',
        url: '/item/' + itemId + "/clone",
        success: function (resp) {
            console.log('Item Cloned: ' + resp._id)
            template = `<div id="<%=item._id%>" class="inventory-item">
            <div class="d-flex">
                <div id="<%=item._id%>-itemName" class="item-title"><Strong><%=item.name%></Strong></div>
                <div id="<%=item._id%>-itemPrice" class="ml-auto item-price"><strong>$<%=item.purchasedPrice%></strong></div>
            </div>
        
            <div class="d-flex" style="max-height: 80%;">
                <div>
        
                    <div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong id="<%=item._id%>-itemSize">Size: <%=item.size%></strong>
                        </div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong>
                                <span class="d-none d-md-inline d-lg-none d-xl-inline">Date:</span> <span id="<%=item.id%>-itemDate"><%=item.purchasedDate%></span>
                            </strong>
                        </div>
                    </div>
        
                </div>
        
                <!-- Buttons for each item -->
                <div id="edit-links" class=" ml-auto align-self-end d-flex align-items-center">
        
                <!-- Add edit button -->
                <button type="button" class="editItemButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#editItem-<%=item._id%>">
                    <i class=" fa fa-pencil-square-o ml-3" aria-hidden="true"></i>
                </button>
                
                <!-- Add edit modal -->
                <!-- <form action="/item/<%=item._id%>?_method=PATCH" method="POST"> -->
                <div class="modal fade" id="editItem-<%=item._id%>" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                
                            <!-- modal header -->
                            <div class="modal-header" style="padding-bottom: 0;">
                                <h5 class="modal-title" id="modalLabel">Edit Item</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style="color: white;">&times;</span>
                                </button>
                            </div>
                
                            <!-- modal body -->
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" style="color: lightslategray"><strong>Name</strong></label>
                                    <input name="name" type="text" class="form-control" id="<%=item._id%>-edit-name" value="<%=item.name%>" required>
                                </div>
                                <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                    <div class="form-group">
                                        <label for="size-text" class="col-form-label" style="color: lightslategray"><strong>Size</strong></label>
                                        <input name="size" type="text" class="form-control" id="<%=item._id%>-edit-size" value="<%=item.size%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label" style="color: lightslategray"><strong>Price</strong></label>
                                        <input name="price" type="text" class="form-control" id="<%=item._id%>-edit-price" value="<%=item.purchasedPrice%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="date-text" class="col-form-label" style="color: lightslategray"><strong>Date</strong></label>
                                        <input name="date" type="text" class="form-control" id="<%=item._id%>-edit-date" value="<%=item.purchasedDate%>" required>
                                    </div>
                                </div>
                            </div>
                
                            <!-- modal footer -->
                            <div class="modal-footer">
                                <div class="form-group">
                                    <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                                    <button id="<%=item._id%>-editItemSubmit" type="submit" class="editItemSubmitButton btn" data-dismiss="modal">Submit</button>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
                <!-- </form> -->
        
                    <button id="<%=item._id%>-clone" class="cloneItemButton btn p-0 p-md-2">
                        <i class="fa fa-clone ml-3" aria-hidden="true"></i>
                    </button>
        
                    <!-- Item to Sale button -->
<button type="button" class="sellButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#sellItem-<%=item._id%>">
    <i class="fa fa-usd ml-3" aria-hidden="true"></i>
</button>

<!-- Add new inventory modal -->
<form action="sale/<%=item._id%>/sell" method="POST">
    <div class="modal fade" id="sellItem-<%=item._id%>" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- modal header -->
                <div class="modal-header" style="padding-bottom: 0;">
                    <h5 class="modal-title" id="modalLabel">Sell Item</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" style="color: white;">&times;</span>
                    </button>
                </div>

                <!-- modal body -->
                <div class="modal-body">
                    <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                        <div class="form-group">
                            <label for="<%=item._id%>-buyer-text" class="col-form-label" style="color: lightslategray"><strong>Buyer</strong></label>
                            <input name="buyer" type="text" class="form-control" id="<%=item._id%>-buyer" placeholder="Buyer" required>
                        </div>
                        <div class="form-group">
                            <label for="<%=item._id%>-soldPrice-text" class="col-form-label" style="color: lightslategray"><strong>Price Sold</strong></label>
                            <input name="soldPrice" type="text" class="form-control" id="<%=item._id%>-soldPrice" placeholder="Price Sold" required>
                        </div>
                    </div>

                </div>

                <!-- modal footer -->
                <div class="modal-footer">
                    <div class="form-group">
                        <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn" style="background-color: rgb(121, 136, 242); color:white;">Sell</button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</form>
        
                    <button id="<%=item._id%>-delete" class="deleteItemButton btn p-0 p-md-2">
                        <i class="fa fa-trash ml-3 " aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>`
            var html = ejs.render(template, { item: resp })
            $(html).hide().appendTo('.inventory-scroll-list').fadeIn(300)
        },
    })
}

cloneSale = (saleId) => {
    $.ajax({
        method: 'POST',
        url: '/sale/' + saleId + "/clone",
        success: function (resp) {
            console.log('Sale Cloned: ' + resp._id)
            template = `<div id="<%=sale._id%>" class="inventory-item">
            <div class="d-flex">
                <div class="item-title"><Strong><span id="<%=sale._id%>-saleName"><%=sale.name%></span> <span id="<%=sale._id%>-saleBuyer" class="buyerName d-none d-md-inline d-lg-none d-xl-inline">(Sold To: <%=sale.buyer%>)</span></Strong></div>
                <div class="ml-auto item-price"><strong><span id="<%=sale._id%>-salePurchasedPrice" class="d-none d-md-inline">$<%=sale.purchasedPrice%> -> </span><span id="<%=sale._id%>-saleSoldPrice">$<%=sale.soldPrice%></span><span id="<%=sale._id%>-saleProfit" class="profit d-none d-md-inline d-lg-none d-xl-inline"> ($<%=sale.profit%>)</span></strong></div>
            </div>
        
            <div class="d-flex" style="max-height: 80%;">
                <div>
        
                    <div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong id="<%=sale._id%>-saleSize">Size: <%=sale.size%></strong>
                        </div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong>
                                <span class="d-none d-md-inline">Date:</span> <span id="<%=sale._id%>-salePurchasedDate"><%=sale.purchasedDate%></span>
                            </strong>
                        </div>
                    </div>
        
                </div>
                <div id="edit-links" class=" ml-auto align-self-end align-items-center d-flex">
        
                <!-- Add edit button -->
                <button type="button" class="editSaleButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#editSale-<%=sale._id%>">
                    <i class=" fa fa-pencil-square-o ml-3" aria-hidden="true"></i>
                </button>
                
                <!-- Add edit modal -->
                <!-- <form> -->
                <div class="modal fade" id="editSale-<%=sale._id%>" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                
                            <!-- modal header -->
                            <div class="modal-header" style="padding-bottom: 0;">
                                <h5 class="modal-title" id="modalLabel">Edit Sale</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style="color: white;">&times;</span>
                                </button>
                            </div>
                
                            <!-- modal body -->
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" style="color: lightslategray"><strong>Name</strong></label>
                                    <input name="name" type="text" class="form-control" id="<%=sale._id%>-edit-name" value="<%=sale.name%>" required>
                                </div>
                                <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                    <div class="form-group">
                                        <label for="size-text" class="col-form-label" style="color: lightslategray"><strong>Size</strong></label>
                                        <input name="size" type="text" class="form-control" id="<%=sale._id%>-edit-size" value="<%=sale.size%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="price-text" class="col-form-label" style="color: lightslategray"><strong>Price</strong></label>
                                        <input name="price" type="text" class="form-control" id="<%=sale._id%>-edit-purchasedPrice" value="<%=sale.purchasedPrice%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="date-text" class="col-form-label" style="color: lightslategray"><strong>Date</strong></label>
                                        <input name="date" type="text" class="form-control" id="<%=sale._id%>-edit-purchasedDate" value="<%=sale.purchasedDate%>" required>
                                    </div>
                                </div>
                
                                <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                    <div class="form-group">
                                        <label for="buyer-text" class="col-form-label" style="color: lightslategray"><strong>Buyer</strong></label>
                                        <input name="buyer" type="text" class="form-control" id="<%=sale._id%>-edit-buyer" value="<%=sale.buyer%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="soldPrice-text" class="col-form-label" style="color: lightslategray"><strong>Price Sold</strong></label>
                                        <input name="soldPrice" type="text" class="form-control" id="<%=sale._id%>-edit-soldPrice" value="<%=sale.soldPrice%>" required>
                                    </div>
                                </div>
                
                            </div>
                
                            <!-- modal footer -->
                            <div class="modal-footer">
                                <div class="form-group">
                                    <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                                    <button id="<%=sale._id%>-editSaleSubmit" type="submit" class="editSaleSubmitButton btn" data-dismiss="modal">Submit</button>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
                <!-- </form> -->
        
                    <button id="<%=sale._id%>-clone" class="cloneSaleButton btn p-0 p-md-2">
                        <i class="fa fa-clone ml-3" aria-hidden="true"></i>
                    </button>
        
                    <button id="<%=sale._id%>-delete" class="deleteSaleButton btn p-0 p-md-2">
                        <i class="fa fa-trash ml-3" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>`
            var html = ejs.render(template, { sale: resp })
            $(html).hide().appendTo('.sale-scroll-list').fadeIn(300)
        },
    })
}

deleteItem = async (itemId) => {
    // fades out
    itemDisplay = $(`#${itemId}`)
    await itemDisplay.fadeOut(200, function () {
        //smooth transition for divs underneath
        itemDisplay.css({ "visibility": "hidden", display: 'block' }).slideUp(250, function () {
            itemDisplay.remove()
        })
    });
    $.ajax({
        method: 'POST',
        url: '/item/' + itemId + "?_method=Delete",
    }).done(function () {
        console.log('Item Deleted: ' + itemId)
    })
}

deleteSale = async (saleId) => {
    // fades out
    saleDisplay = $(`#${saleId}`)
    await saleDisplay.fadeOut(200, function () {
        //smooth transition for divs underneath
        saleDisplay.css({ "visibility": "hidden", display: 'block' }).slideUp(250, function () {
            saleDisplay.remove()
        })
    });
    $.ajax({
        method: 'POST',
        url: '/sale/' + saleId + "?_method=Delete",
    }).done(function () {
        console.log('Sale Deleted: ' + saleId)
    })
}

editItem = function (itemId) {
    let name = $(`#${itemId}-edit-name`).val()
    let size = $(`#${itemId}-edit-size`).val()
    let price = $(`#${itemId}-edit-price`).val()
    let date = $(`#${itemId}-edit-date`).val()
    $.ajax({
        method: 'POST',
        url: '/item/' + itemId + '?_method=Patch',
        data: {
            name,
            size,
            price,
            date,
        }
    })
    $(`#${itemId}`).fadeOut(300, function () {
        $(`#${itemId}-itemName`).html(`<strong>${name}</strong>`)
        $(`#${itemId}-itemSize`).html(`Size: ${size}`)
        $(`#${itemId}-itemPrice`).html(`<strong>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)}</strong>`)
        $(`#${itemId}-itemDate`).html(date)
        $(this).fadeIn(300)
    })
}

editSale = function (saleId) {
    let name = $(`#${saleId}-edit-name`).val()
    let size = $(`#${saleId}-edit-size`).val()
    let purchasedPrice = $(`#${saleId}-edit-purchasedPrice`).val()
    let purchasedDate = $(`#${saleId}-edit-purchasedDate`).val()
    let buyer = $(`#${saleId}-edit-buyer`).val()
    let soldPrice = $(`#${saleId}-edit-soldPrice`).val()

    $.ajax({
        method: 'POST',
        url: '/sale/' + saleId + '?_method=Patch',
        data: {
            name,
            size,
            price: purchasedPrice,
            date: purchasedDate,
            buyer,
            soldPrice,
        }
    })

    $(`#${saleId}`).fadeOut(300, function () {
        $(`#${saleId}-saleName`).html(`<strong>${name}</strong>`)
        $(`#${saleId}-saleSize`).html(`Size: ${size}`)
        $(`#${saleId}-saleBuyer`).html(`(Sold To: ${buyer})`)
        $(`#${saleId}-salePurchasedPrice`).html(`<strong>${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(purchasedPrice)} -> </strong>`)
        $(`#${saleId}-salePurchasedDate`).html(purchasedDate)
        $(`#${saleId}-saleSoldPrice`).html(`$${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(soldPrice)}`)
        // $(`#${saleId}-saleProfit`).html(`$(${profit})`)
        $(this).fadeIn(300)
    })
}

newItem = function () {
    let name = $('#new-item-name').val()
    let size = $('#new-item-size').val()
    let price = $('#new-item-price').val()
    let date = $('#new-item-date').val()

    $.ajax({
        method: 'POST',
        url: '/item',
        data: {
            name,
            size,
            price,
            date,
        },
        success: function (resp) {
            template = `<div id="<%=item._id%>" class="inventory-item">
            <div class="d-flex">
                <div id="<%=item._id%>-itemName" class="item-title"><Strong><%=item.name%></Strong></div>
                <div id="<%=item._id%>-itemPrice" class="ml-auto item-price"><strong>$<%=item.purchasedPrice%></strong></div>
            </div>
        
            <div class="d-flex" style="max-height: 80%;">
                <div>
        
                    <div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong id="<%=item._id%>-itemSize">Size: <%=item.size%></strong>
                        </div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong>
                                <span class="d-none d-md-inline d-lg-none d-xl-inline">Date:</span> <span id="<%=item.id%>-itemDate"><%=item.purchasedDate%></span>
                            </strong>
                        </div>
                    </div>
        
                </div>
        
                <!-- Buttons for each item -->
                <div id="edit-links" class=" ml-auto align-self-end d-flex align-items-center">
        
                <!-- Add edit button -->
                <button type="button" class="editItemButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#editItem-<%=item._id%>">
                    <i class=" fa fa-pencil-square-o ml-3" aria-hidden="true"></i>
                </button>
                
                <!-- Add edit modal -->
                <!-- <form action="/item/<%=item._id%>?_method=PATCH" method="POST"> -->
                <div class="modal fade" id="editItem-<%=item._id%>" tabindex="-1" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                
                            <!-- modal header -->
                            <div class="modal-header" style="padding-bottom: 0;">
                                <h5 class="modal-title" id="modalLabel">Edit Item</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true" style="color: white;">&times;</span>
                                </button>
                            </div>
                
                            <!-- modal body -->
                            <div class="modal-body">
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label" style="color: lightslategray"><strong>Name</strong></label>
                                    <input name="name" type="text" class="form-control" id="<%=item._id%>-edit-name" value="<%=item.name%>" required>
                                </div>
                                <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                    <div class="form-group">
                                        <label for="size-text" class="col-form-label" style="color: lightslategray"><strong>Size</strong></label>
                                        <input name="size" type="text" class="form-control" id="<%=item._id%>-edit-size" value="<%=item.size%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label" style="color: lightslategray"><strong>Price</strong></label>
                                        <input name="price" type="text" class="form-control" id="<%=item._id%>-edit-price" value="<%=item.purchasedPrice%>" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="date-text" class="col-form-label" style="color: lightslategray"><strong>Date</strong></label>
                                        <input name="date" type="text" class="form-control" id="<%=item._id%>-edit-date" value="<%=item.purchasedDate%>" required>
                                    </div>
                                </div>
                            </div>
                
                            <!-- modal footer -->
                            <div class="modal-footer">
                                <div class="form-group">
                                    <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                                    <button id="<%=item._id%>-editItemSubmit" type="submit" class="editItemSubmitButton btn" data-dismiss="modal">Submit</button>
                                </div>
                            </div>
                
                        </div>
                    </div>
                </div>
                <!-- </form> -->
        
                    <button id="<%=item._id%>-clone" class="cloneItemButton btn p-0 p-md-2">
                        <i class="fa fa-clone ml-3" aria-hidden="true"></i>
                    </button>
        
                    <!-- Item to Sale button -->
                    <button type="button" class="sellButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#sellItem-<%=item._id%>">
                        <i class="fa fa-usd ml-3" aria-hidden="true"></i>
                    </button>

                    <!-- Add new inventory modal -->
                    <form action="sale/<%=item._id%>/sell" method="POST">
                        <div class="modal fade" id="sellItem-<%=item._id%>" tabindex="-1" role="dialog">
                            <div class="modal-dialog">
                                <div class="modal-content">

                                    <!-- modal header -->
                                    <div class="modal-header" style="padding-bottom: 0;">
                                        <h5 class="modal-title" id="modalLabel">Sell Item</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" style="color: white;">&times;</span>
                                        </button>
                                    </div>

                                    <!-- modal body -->
                                    <div class="modal-body">
                                        <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                            <div class="form-group">
                                                <label for="<%=item._id%>-buyer-text" class="col-form-label" style="color: lightslategray"><strong>Buyer</strong></label>
                                                <input name="buyer" type="text" class="form-control" id="<%=item._id%>-buyer" placeholder="Buyer" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="<%=item._id%>-soldPrice-text" class="col-form-label" style="color: lightslategray"><strong>Price Sold</strong></label>
                                                <input name="soldPrice" type="text" class="form-control" id="<%=item._id%>-soldPrice" placeholder="Price Sold" required>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- modal footer -->
                                    <div class="modal-footer">
                                        <div class="form-group">
                                            <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                                            <button type="submit" class="btn" style="background-color: rgb(121, 136, 242); color:white;">Sell</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </form>
        
                    <button id="<%=item._id%>-delete" class="deleteItemButton btn p-0 p-md-2">
                        <i class="fa fa-trash ml-3 " aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>`
            var html = ejs.render(template, { item: resp })
            $(html).hide().appendTo('.inventory-scroll-list').fadeIn(300)
        }
    })
}

$('.inventory-scroll-list').click(async function (e) {
    let buttonPressed, itemId
    //selecting the right element
    if (e.target.matches("button")) {
        buttonPressed = e.target
        itemId = buttonPressed.id
    }
    else if (e.target.matches("i")) {
        buttonPressed = e.target.parentElement
        itemId = buttonPressed.id
    }

    //if something is selected
    if (buttonPressed) {

        //Clone Item Button
        if (buttonPressed.classList[0] == "cloneItemButton") {
            itemId = itemId.replace('-clone', '')
            await cloneItem(itemId)
            $('.inventory-scroll-list').animate({ scrollTop: $('.inventory-scroll-list').prop("scrollHeight") }, 500);
        }
        //Delete Item Button
        else if (buttonPressed.classList[0] == "deleteItemButton") {
            itemId = itemId.replace('-delete', '')
            await deleteItem(itemId)
        }
        //Edit Item Submit Button
        else if (buttonPressed.classList[0] == "editItemSubmitButton") {
            itemId = itemId.replace('-editItemSubmit', '')
            console.log(itemId)
            await editItem(itemId)
        }
    }

    buttonPressed = {}
})

$('.sale-scroll-list').click(async function (e) {
    console.log(e.target);
    let buttonPressed, saleId
    //selecting the right element
    if (e.target.matches("button")) {
        buttonPressed = e.target
        saleId = buttonPressed.id
    }
    else if (e.target.matches("i")) {
        buttonPressed = e.target.parentElement
        saleId = buttonPressed.id
    }

    //if something is selected
    if (buttonPressed) {
        //Clone Sale Button
        if (buttonPressed.classList[0] == "cloneSaleButton") {
            saleId = saleId.replace('-clone', '')
            await cloneSale(saleId)
            $('.sale-scroll-list').animate({ scrollTop: $('.sale-scroll-list').prop("scrollHeight") }, 500);
        }
        //Delete Sale Button
        else if (buttonPressed.classList[0] == "deleteSaleButton") {
            saleId = saleId.replace('-delete', '')
            await deleteSale(saleId)
        }
        //Edit Sale Submit Button
        else if (buttonPressed.classList[0] == "editSaleSubmitButton") {
            saleId = saleId.replace('-editSaleSubmit', '')
            await editSale(saleId)
        }

    }

    buttonPressed = {}
})

$('.newItemButtonSubmit').click(function () {
    newItem()
})