//Total Common Function
function totalCount(){
    let netPrice = parseInt(document.getElementById('net-charge').innerText);
    let extraMemoryCharge = parseInt(document.getElementById('extra-memory-charge').innerText);
    let extraStorageCharge = parseInt(document.getElementById('extra-storage-charge').innerText);
    let extraDeleveryCharge = parseInt(document.getElementById('extra-delevery-charge').innerText);
    document.getElementById('total-charge').innerText = netPrice + extraMemoryCharge + extraStorageCharge + extraDeleveryCharge;
    document.getElementById('grand-total').innerText = netPrice + extraMemoryCharge + extraStorageCharge + extraDeleveryCharge;
}

//Upate Price Common Function
function updatedCharge(buttonId,extraPrice){
    
    let chargeReport = document.getElementById(buttonId);
    chargeReport.innerText = extraPrice;
    totalCount()
}

//Memory Button Click Handler

document.getElementById('8gb-memory-button').addEventListener('click',function(){
    updatedCharge("extra-memory-charge",0);
})
document.getElementById('16gb-memory-button').addEventListener('click',function(){
    updatedCharge("extra-memory-charge",180);
})

//Storage Button Click Handler
document.getElementById('256gb-storage-button').addEventListener('click',function(){
    updatedCharge("extra-storage-charge",0);
})
document.getElementById('512gb-storage-button').addEventListener('click',function(){
    updatedCharge("extra-storage-charge",100);
})
document.getElementById('1024gb-storage-button').addEventListener('click',function(){
    updatedCharge("extra-storage-charge",180);
})
//Delevery Button Click Handler
document.getElementById('25Aug-delevry-button').addEventListener('click',function(){
    updatedCharge("extra-delevery-charge",0);
})
document.getElementById('21Aug-delevry-button').addEventListener('click',function(){
    updatedCharge("extra-delevery-charge",20);
})
// Promo Button Click Handler
document.getElementById('promo-button').addEventListener('click',function(){
    let promoCode = document.getElementById('promo-input').value;
    console.log(promoCode);
    if (promoCode == 'stevekaku'){
        let totalBill = parseFloat(document.getElementById('grand-total').innerText);
        let grandTotal = totalBill - (totalBill*(20/100));
        document.getElementById('grand-total').innerText = grandTotal;
    }
})