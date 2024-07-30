var data ='2024-07-21 14:00:00'
function convertToPersianDateTime(date,flag) {
    var persianDateTime
    var lang ='fa' //please write en or fa or ar for convert
    var LLL =''
    if (lang=="ar") {LLL = "ar-SA"} else if (lang=="en") {LLL='en-US'} else if (lang=="fa") {LLL='fa-IR'}
   const cleanedDateTime = date.replace(' ', 'T');
    if (flag==1) {
    persianDateTime =new Date(date.replace(/\//g, '/')).toLocaleString(LLL).replace('هـ', '').replace('م', '').replace(',',' ');
    } 
     else if(flag==0){
     persianDateTime = new Date(date.replace(/\//g, '/')).toLocaleDateString(LLL).replace('هـ', '');
    }
    return persianDateTime
}
console.log(convertToPersianDateTime(data,1));
console.log(convertToPersianDateTime(data,0));