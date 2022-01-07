// write a class to calculate uber price

class Uber
{
    
    constructor(distance,pricePerKm)
    {
        this.defaultDistance = distance;
        this.defaultPricePerKm = pricePerKm;
        this.defaultBillAmount = this.defaultDistance*this.defaultPricePerKm;
    }
    calculation(distance,pricePerKm)
    {
        
        this.distance=distance;
        this.pricePerKm=pricePerKm;
        if(this.distance<1)
        this.billAmount=this.defaulBillAmount;
        else
        this.billAmount=this.distance*this.pricePerKm;
        
    }
    displayResult()
    {
        console.log(`Travelled Distance = ${this.distance} km \nBill Amount : ${this.billAmount}`);
    }

}
const uberobject=new Uber();

uberobject.calculation(3,30);
uberobject.displayResult();
uberobject.calculation(17,30);
uberobject.displayResult();
uberobject.calculation(27,30);
uberobject.displayResult();

// Output : 
// Travelled Distance = 3 km 
// Bill Amount : 90
// Travelled Distance = 17 km 
// Bill Amount : 510
// Travelled Distance = 27 km 
// Bill Amount : 810
