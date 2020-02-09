
function User(name, hp, en, str, dex, int, prcl, upbr, bio, eml, pswd){
    this.name = name;
    this.health = hp;
    this.energy = en;
    this.strength = str;
    this.dexterity = dex;
    this.intelligence = int;
    this.parcel = prcl;
    this.upbringing = upbr;
    this.biography = bio;
    this.email = eml;
    this.password = pswd;
};
function newUser(){
    var newName = document.getElementById("playerName").value;
    var newParcel = document.getElementById("playerParcel").value;
    var newUpbringing = document.getElementById("playerUpbringing").value;
    var newBio = document.getElementById("playerBio").value;
    var newEmail = document.getElementById("playerEmail").value;
    var newPassword = document.getElementById("playerPassword").value;

    var user = new User(newName, 10, 5, 1, 1, 1, newParcel, newUpbringing, newBio, newEmail, newPassword);

    console.log(user);
};
function playerGenerate(user){

}
