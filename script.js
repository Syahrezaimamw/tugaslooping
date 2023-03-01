let sum = "";
while(true){
    let value = prompt("masukan huruf", '');
    if(!value) break;

    sum+= value;

}
alert('sum : ' + sum);