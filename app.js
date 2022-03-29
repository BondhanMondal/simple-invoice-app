const detailsButton = document.getElementById('detail-submit-btn');

detailsButton.addEventListener('click', function(){
    
    const buyerDetailsInput = document.getElementById('buyer-details-input');
    document.getElementById("buyer-info").innerText = buyerDetailsInput.value;
    buyerDetailsInput.value = '';

});

const addButton = document.getElementById('add-detail-btn');

addButton.addEventListener('click', function(){

    const infoTable = document.getElementById('info-table');
    const itemName = document.getElementById('item-name-input');
    const itemPrice = document.getElementById('item-price-input');
    const itemQuantity = document.getElementById('item-quantity-input');

    // <tr>
    //     <th >1</th>
    //     <td>Mark</td>
    //     <td>Otto</td>
    //     <td>@mdo</td>
    // </tr>
    const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

    const tr = document.createElement('tr');
    const th = document.createElement('th');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');

    th.innerText = itemName.value;
    td1.innerText = itemPrice.value;
    td2.innerText = itemQuantity.value;
});