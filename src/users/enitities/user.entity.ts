export class User{

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private age: number
    ){}

    public show(): void{
        console.log(this.name)
        console.log(this.email)
        console.log(this.age)
    }
}