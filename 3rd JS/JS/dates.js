print (new Date()); // Date d'aujourd'hui
print (new Date().getDay()); // Jour de la semaine ex : 2 pour mercredi ( semaine start le Dimanche)
print (new Date().getMonth()); // Le mois en cours.
print (new Date().getDate());
print (new Date(2022, 2, 13).getDay()); // 0 = Dimanche
const age = new Date() - new Date(1981, 6, 9);
print(age);
print(Math.floor(milliToYear(age)));

function milliToYear(milli){
    const oneYear = 1000 * 60 * 60 * 24 * 365.25;
    return milli / oneYear 
    
}

function print(...str){
    document.writeln(str + "<br>");
}