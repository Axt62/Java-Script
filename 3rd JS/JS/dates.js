print (new Date()); // Date d'aujourd'hui
print (new Date().getDay()); // Jour de la semaine ex : 2 pour mercredi ( semaine start le Dimanche)
print (new Date().getMonth()); // Le mois en cours.
print (new Date().getDate());
print (new Date(2022, 2, 13).getDay()); // 0 = Dimanche

function print(...str){
    document.writeln(str + "<br>");
}