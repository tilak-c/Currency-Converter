var amount;
var from_currency="AED";
var to_currency="AED";
var exit=false;
function am(){
    amount=parseInt(document.getElementById("amount").value);
    return amount;
    
}
function from(){
    from_currency=document.getElementById("from_curr").value;
    return from_currency;
}
function to(){
    to_currency=document.getElementById("to_curr").value;
    return to_currency;
}

function clicked(){
    if(amount==undefined){
        alert("Enter the amount");
        exit=true;
    }
    if(amount<0){
        alert("Oops ! Amount can't be negative");
        exit=true;
    }
  

    else{
        if(exit!=true){
        axios.get('http://data.fixer.io/api/'+'latest'+'?access_key='+ '048c8745464f45db333593f45ca49f6c')
        .then(response=>{
        console.log(response.data.rates);
            var f=response.data.rates[from_currency];
            var t=response.data.rates[to_currency];
            var fin_amount=(amount*(t/f)).toFixed(4);
            document.getElementById("res").innerHTML=('1 '+from_currency+' = '+ (t/f).toFixed(4)+' '+to_currency+'<br>'+
            '1 '+to_currency+' = '+ (f/t).toFixed(4)+' '+from_currency+'<br>'
            +'<br><b>'+amount+' '+from_currency+'  =  '+fin_amount+'   '+to_currency+' </b>');
        },err=>{
            console.log(err);
        });
    }
    }
}

