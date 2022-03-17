class UserModel {
    constructor(firstname, lastname, image, email, birthday, adress, tel, password) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.email = email;
        this.birthday = birthday;
        this.adress = adress;
        this.tel = tel;
        this.password = password;
    }
}

export {UserModel}