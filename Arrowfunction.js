const user = {
    name: "John",
    showName: () => {
        console.log(this.name); 
    }
};

user.showName(); 
const fixedUser = {
    name: "John",
    showName() { 
        console.log(this.name); 
    }
};

fixedUser.showName();
