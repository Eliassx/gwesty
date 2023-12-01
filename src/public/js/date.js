const payValue = document.getElementById("pay_value");

function calculate() {
    const antecipationValue = Number(document.getElementById("anticipation_value").value);
    const comsuptionValue = Number(document.getElementById("comsuption_value").value);
    const valueReserve = Number(document.getElementById("reserve_value").value);
    const checkIn = new Date(document.getElementById("join_effective").value);
    const checkOut = new Date(document.getElementById("leave_effective").value);

    if(valueReserve && checkIn && checkOut) {
        const diff = checkOut.getTime() - checkIn.getTime();
    
        const diffDays = diff / (1000 * 3600 * 24);
    
        
        payValue.value = valueReserve * diffDays + comsuptionValue - antecipationValue ;
    }    
}