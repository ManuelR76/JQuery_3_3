var randomNumber = Math.floor((Math.random() * 100) + 1); //vaiable qui créer un chiffre aléatoire à trouver.
var compteur = 0 //la variable de tentatives
var regex = /^\d{1,3}$/;
$("#submit").on("click", function(){ //fonction click au bouton
var choixUtilisateur = parseInt($("#textbox").val());//variable du choix de l'utilisateur.
    compteur++     //le compteur qui monte à chaque click
  if(regex.test(choixUtilisateur) && choixUtilisateur<=100){
    if (randomNumber !== choixUtilisateur) { //fonction if si le résultat n'est pas égal
      if (choixUtilisateur > randomNumber) { //si choix utilisateur est supérieur à celui de l'ordinateur
        alert("Plus petit");//réponse si valeur utilisateur supérieur à celle de l'ordinateur
      }else{//si valeur utilisateur inférieur à celle de l'ordinateur alors
    alert("Plus grand"); // réponse si valeur utilisateur inférieure à celle de l'ordinateur
  }}else{//si valeur choix utilisateur et ordinateur sont égales
    alert("Bonne réponse ! Tu as trouvé le bon iffre bravo après " + compteur +" tentatives.");//message bonne réponse
}} else {
 alert("Le nombre doit être compris entre 0 et 100");}
})//fin de la fonction click.
