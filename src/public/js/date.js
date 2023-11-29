const payValue = document.getElementById("pay_value");

function calculate() {
    const valueReserve = document.getElementById("reserve_value");
    const checkIn = new Date(document.getElementById("join_effective").value);
    const checkOut = new Date(document.getElementById("leave_effective").value);

    if(valueReserve.value && checkIn && checkOut) {
        const diff = checkOut.getTime() - checkIn.getTime();
    
        const diffDays = diff / (1000 * 3600 * 24);
    
        console.log(diff);

        payValue.value = valueReserve.value * diffDays;
    }    
}