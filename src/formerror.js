import valid from 'card-validator'

export default function formerror(data)
{
    let errors={}
    let credcard=valid.number(data.number)
    credcard.expirationDate=valid.expirationDate(data.expiry)
    credcard.cardholderName=valid.cardholderName(data.name)
    credcard.cvv=valid.cvv(data.cvc)
console.log(credcard)

    errors.show=false
    errors.message=''
    errors.cname=false
    errors.cnum=false
    errors.cexp=false
    errors.ccvv=false

    if(credcard.cvv.isValid)
    {
        errors.ccvv=true
    }
    else{
        errors.message='credit card CVV is Invalid'
    }

    if(credcard.expirationDate.isValid)
    {
        errors.cexp=true
    }
    else{
        errors.message='credit card Date is Invalid'
    }

    if(credcard.isValid)
    {
        errors.cnum=true
    }
    else{
        errors.message='credit card number is Invalid'
    }

    if(credcard.cardholderName.isValid)
    {
        errors.cname=true
    }
    else{
        errors.message='credit card name is Invalid'
    }
    if(errors.cname && errors.cnum && errors.cexp && errors.ccvv)
    {
        errors.show=true
        errors.message='Congrats ! Card Is Valid'
    }

    return errors
}