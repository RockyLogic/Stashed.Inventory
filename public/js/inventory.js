

cloneItem = (itemId) => {
    $.ajax({
        method: 'POST',
        url: '/item/' + itemId + "/clone",
        success: function (resp) {
            console.log('Item Cloned: ' + resp._id)
            template = `<div id="<%=item._id%>" class="inventory-item">
                    <div class="d-flex">
                        <div class="item-title"><Strong><%=item.name%></Strong></div>
                        <div class="ml-auto item-price"><strong>$<%=item.purchasedPrice%></strong></div>
                    </div>

                    <div class="d-flex" style="max-height: 80%;">
                        <div>

                            <div>
                                <div class="item-info" style="max-height: 50%;">
                                    <strong>Size: <%=item.size%></strong>
                                </div>
                                <div class="item-info" style="max-height: 50%;">
                                    <strong>
                                        <span class="d-none d-md-inline d-lg-none d-xl-inline">Date:</span> <%=item.purchasedDate%>
                                    </strong>
                                </div>
                            </div>

                        </div>
                        <div id="edit-links" class=" ml-auto align-self-end d-flex align-items-center">

                        <!-- Add edit button -->
                        <button type="button" class="greyButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#editItem-<%=item._id%>">
                            <i class=" fa fa-pencil-square-o ml-3" aria-hidden="true"></i>
                        </button>

                        <!-- Add edit modal -->
                        <form action="/item/<%=item._id%>?_method=PATCH" method="POST">
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
                                                <input name="name" type="text" class="form-control" id="recipient-name" value="<%=item.name%>" required>
                                            </div>
                                            <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                                <div class="form-group">
                                                    <label for="size-text" class="col-form-label" style="color: lightslategray"><strong>Size</strong></label>
                                                    <input name="size" type="text" class="form-control" id="size-text" value="<%=item.size%>" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="message-text" class="col-form-label" style="color: lightslategray"><strong>Price</strong></label>
                                                    <input name="price" type="text" class="form-control" id="message-text" value="<%=item.purchasedPrice%>" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="date-text" class="col-form-label" style="color: lightslategray"><strong>Date</strong></label>
                                                    <input name="date" type="text" class="form-control" id="date-text" value="<%=item.purchasedDate%>" required>
                                                </div>
                                            </div>
                                        </div>

                                        <!-- modal footer -->
                                        <div class="modal-footer">
                                            <div class="form-group">
                                                <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                                                <button type="submit" class="btn" style="background-color: rgb(121, 136, 242); color:white;">Submit</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>

                        <!-- <form action="/item/<%=item._id%>/clone" method="POST" style="margin-block-end: 0;"> -->
                        <button id="<%=item._id%>-clone" class="cloneItemButton btn p-0 p-md-2">
                            <i class="fa fa-clone ml-3" aria-hidden="true"></i>
                        </button>
                        <!-- </form> -->

                        <!-- Item to Sale button -->
                        <button type="button" class="sellButton btn ml-auto mr-1 no-outline p-0 p-md-2" data-toggle="modal" data-target="#sellItem-<%=item._id%>">
                            <i class="fa fa-usd ml-3" aria-hidden="true"></i>
                        </button>

                        <!-- Item to Sale modal -->
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
                                                    <label for="buyer-text" class="col-form-label" style="color: lightslategray"><strong>Buyer</strong></label>
                                                    <input name="buyer" type="text" class="form-control" id="buyer-text" placeholder="Buyer" required>
                                                </div>
                                                <div class="form-group">
                                                    <label for="soldPrice-text" class="col-form-label" style="color: lightslategray"><strong>Price Sold</strong></label>
                                                    <input name="soldPrice" type="text" class="form-control" id="soldPrice-text" placeholder="Price Sold" required>
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

                        <!-- <form style="margin-block-end: 0;"> -->
                        <button id="<%=item._id%>"-delete" class="deleteItemButton btn p-0 p-md-2">
                            <i class="fa fa-trash ml-3" aria-hidden="true"></i>
                        </button>
                        <!-- </form> -->
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
                <div class="item-title"><Strong><%=sale.name%> <span class="buyerName d-none d-md-inline d-lg-none d-xl-inline">(Sold To: <%=sale.buyer%>)</span></Strong></div>
                <div class="ml-auto item-price"><strong><span class="d-none d-md-inline">$<%=sale.purchasedPrice%></span><span class="d-none d-md-inline d-lg-none d-xl-inline"> -> $<%=sale.soldPrice%></span><span class="profit"> ($<%=sale.profit%>)</span></strong></div>
            </div>
        
            <div class="d-flex" style="max-height: 80%;">
                <div>
        
                    <div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong>Size: <%=sale.size%></strong>
                        </div>
                        <div class="item-info" style="max-height: 50%;">
                            <strong>
                                <spa class="d-none d-md-inline">Date:</spa> <%=sale.purchasedDate%>
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
                <form action="/sale/<%=sale._id%>?_method=PATCH" method="POST">
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
                                        <input name="name" type="text" class="form-control" id="recipient-name" value="<%=sale.name%>" required>
                                    </div>
                                    <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                        <div class="form-group">
                                            <label for="size-text" class="col-form-label" style="color: lightslategray"><strong>Size</strong></label>
                                            <input name="size" type="text" class="form-control" id="size-text" value="<%=sale.size%>" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="price-text" class="col-form-label" style="color: lightslategray"><strong>Price</strong></label>
                                            <input name="price" type="text" class="form-control" id="price-text" value="<%=sale.purchasedPrice%>" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="date-text" class="col-form-label" style="color: lightslategray"><strong>Date</strong></label>
                                            <input name="date" type="text" class="form-control" id="date-text" value="<%=sale.purchasedDate%>" required>
                                        </div>
                                    </div>
                
                                    <div class="form-group row d-flex justify-content-between" style="padding: 0 1rem;">
                                        <div class="form-group">
                                            <label for="buyer-text" class="col-form-label" style="color: lightslategray"><strong>Buyer</strong></label>
                                            <input name="buyer" type="text" class="form-control" id="buyer-text" value="<%=sale.buyer%>" required>
                                        </div>
                                        <div class="form-group">
                                            <label for="soldPrice-text" class="col-form-label" style="color: lightslategray"><strong>Price Sold</strong></label>
                                            <input name="soldPrice" type="text" class="form-control" id="soldPrice-text" value="<%=sale.soldPrice%>" required>
                                        </div>
                                    </div>
                
                                </div>
                
                                <!-- modal footer -->
                                <div class="modal-footer">
                                    <div class="form-group">
                                        <button type="button" class="btn" style="background-color: lightslategray;" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn" style="background-color: rgb(121, 136, 242); color:white;">Submit</button>
                                    </div>
                                </div>
                
                            </div>
                        </div>
                    </div>
                </form>
        
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

deleteItem = (itemId) => {
    // fades out
    itemDisplay = $(`#${itemId}`)
    itemDisplay.fadeOut(200, function () {
        //smooth transition for divs underneath
        itemDisplay.css({ "visibility": "hidden", display: 'block' }).slideUp(150);
    });
    $.ajax({
        method: 'POST',
        url: '/item/' + itemId + "?_method=Delete",
    }).done(function () {
        console.log('Item Deleted: ' + itemId)
    })
}

deleteSale = (saleId) => {
    // fades out
    saleDisplay = $(`#${saleId}`)
    saleDisplay.fadeOut(200, function () {
        //smooth transition for divs underneath
        saleDisplay.css({ "visibility": "hidden", display: 'block' }).slideUp(150);
    });
    $.ajax({
        method: 'POST',
        url: '/sale/' + saleId + "?_method=Delete",
    }).done(function () {
        console.log('Sale Deleted: ' + saleId)
    })
}

$('.inventory-scroll-list').click(async function (e) {

    //selecting the right element
    if (e.target.matches("button")) {
        buttonPressed = e.target
    }
    else if (e.target.matches("i")) {
        buttonPressed = e.target.parentElement
    }
    let itemId = buttonPressed.id

    //Clone Item Button
    if (buttonPressed.classList[0] == "cloneItemButton") {
        itemId = itemId.replace('-clone', '')
        await cloneItem(itemId)
    }
    //Delete Item Button
    if (buttonPressed.classList[0] == "deleteItemButton") {
        itemId = itemId.replace('-delete', '')
        await deleteItem(itemId)
    }

})

$('.sale-scroll-list').click(async function (e) {
    //selecting the right element
    if (e.target.matches("button")) {
        buttonPressed = e.target
    }
    else if (e.target.matches("i")) {
        buttonPressed = e.target.parentElement
    }
    let saleId = buttonPressed.id

    //Clone Sale Button
    if (buttonPressed.classList[0] == "cloneSaleButton") {
        saleId = saleId.replace('-clone', '')
        await cloneSale(saleId)
    }

    //Delete Sale Button
    else if (buttonPressed.classList[0] == "deleteSaleButton") {
        saleId = saleId.replace('-delete', '')
        await deleteSale(saleId)
    }
})