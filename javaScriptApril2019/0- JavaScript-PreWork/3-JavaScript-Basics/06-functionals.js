function getMyTaxReturnAndDoMyTaxesAndStuff(a ,x, y, z) {
    let myInc = a * x;
    let myTaxes = myInc - y;
    let total = myTaxes + z;
    console.log(total);
    return total;
}
getMyTaxReturnAndDoMyTaxesAndStuff(100000, 5, 50000, 0);


