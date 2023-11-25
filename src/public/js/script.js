const home = document.getElementById('home'); 
const auxiliary = document.getElementById('auxiliary');
const auxiliaryy = document.getElementById('auxiliaryy');
const guests = document.getElementById('guests');
const host = document.getElementById('host');
const expenditure = document.getElementById('expenditure');
const reserve = document.getElementById('reserve');
const revenue = document.getElementById('revenue');
const stocks = document.getElementById('stocks');

function select(id){   
  if(id === "home") {
    home.style.backgroundColor = "#2F2E41";
    home.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";

    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if(id === "auxiliary") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";

    auxiliary.style.backgroundColor = "#2F2E41";
    auxiliaryy.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    auxiliary.style.display = "none"
    auxiliaryy.style.display = "flex";

    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if (id === "guests") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";
    
    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";
    
    guests.style.backgroundColor = "#2F2E41";
    guests.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if (id === "host") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";
    
    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";
    
    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";
    
    host.style.backgroundColor = "#2F2E41";
    host.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if (id === "expenditure") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";
    
    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";
    
    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "#2F2E41";
    expenditure.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if (id === "reserve") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";
    
    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";
    
    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "#2F2E41";
    reserve.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if (id === "revenue") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";
    
    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";
    
    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "#2F2E41";
    revenue.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

    stocks.style.backgroundColor = "";
    stocks.style.boxShadow = "";
  }

  else if (id === "stocks") {
    home.style.backgroundColor = "";
    home.style.boxShadow = "";
    
    auxiliary.style.backgroundColor = "";
    auxiliary.style.boxShadow = "";
    auxiliaryy.style.display = "none";
    
    guests.style.backgroundColor = "";
    guests.style.boxShadow = "";

    host.style.backgroundColor = "";
    host.style.boxShadow = "";

    expenditure.style.backgroundColor = "";
    expenditure.style.boxShadow = "";

    reserve.style.backgroundColor = "";
    reserve.style.boxShadow = "";

    revenue.style.backgroundColor = "";
    revenue.style.boxShadow = "";

    stocks.style.backgroundColor = "#2F2E41";
    stocks.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";
  }

};

function closeNav() {
  auxiliary.style.display = "flex";
  auxiliaryy.style.display = "none";

  auxiliary.style.backgroundColor = "#2F2E41";
  auxiliary.style.boxShadow = "9px 5px 7px rgba(0, 0, 0, 0.25)";

  home.style.backgroundColor = "";
  home.style.boxShadow = "";
  
  auxiliary.style.backgroundColor = "";
  auxiliary.style.boxShadow = "";
  
  guests.style.backgroundColor = "";
  guests.style.boxShadow = "";
  
  host.style.backgroundColor = "";
  host.style.boxShadow = "";

  expenditure.style.backgroundColor = "";
  expenditure.style.boxShadow = "";

  reserve.style.backgroundColor = "";
  reserve.style.boxShadow = "";

  revenue.style.backgroundColor = "";
  revenue.style.boxShadow = "";

  stocks.style.backgroundColor = "";
  stocks.style.boxShadow = "";
}