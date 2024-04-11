$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const itemsString = urlParams.get('items');
    let items = [];

    if (itemsString) {
        items = JSON.parse(decodeURIComponent(itemsString));
    }

    const cartItemsDiv = $('#cartItems');

    if (items.length === 0) {
        cartItemsDiv.text("Your cart is empty.");
    } else {
        renderItems();
    }

    function extractPrice(priceString) {
        const regex = /(\d+(\.\d+)?)/;
        const match = priceString.match(regex);
        if (match) {
            return parseFloat(match[0]);
        } else {
            return 0;
        }
    }

    function renderItems() {
        cartItemsDiv.empty();
        const table = $('<table></table>').css('width', '100%');
        let totalPrice = 0;

        const trHeader = $('<tr></tr>');
        const th1 = $('<th></th>').text('Item');
        const th2 = $('<th></th>').text('Price per Item');
        const th3 = $('<th></th>').text('Quantity');
        const th4 = $('<th></th>').text('Final Price');
        trHeader.append(th1, th2, th3, th4);
        table.append(trHeader);

        items.forEach(item => {
            const price = extractPrice(item.price);
            const quantity = item.quantity ? item.quantity : 0; // Check for valid quantity
            const finalPrice = price * quantity;
            totalPrice += finalPrice;

            const tr = $('<tr></tr>');
            const td1 = $('<td></td>').text(`${item.name}`);
            const td2 = $('<td></td>').text(`₹${price}`);
            const td3 = $('<td></td>').text(`${quantity}`);
            const td4 = $('<td></td>').text(`₹${finalPrice}`);
            tr.append(td1, td2, td3, td4);
            table.append(tr);
        });

        cartItemsDiv.append(table);

        const totalP = $('<p></p>').addClass('totalPrice').text(`Total Price: ₹${totalPrice.toFixed(2)}`);
        cartItemsDiv.append(totalP);

        const finalPaymentHeading = $('<h2></h2>').text(`Final Amount: ₹${totalPrice.toFixed(2)}`).css('margin-top', '20px');
        cartItemsDiv.append(finalPaymentHeading);

        const payButton = $('<button></button>').addClass('payButton').text('Pay Now');
        cartItemsDiv.append(payButton);
        payButton.click(function () {
            alert('Payment is done.');
            window.location.href="main.html";
        });
    }
});