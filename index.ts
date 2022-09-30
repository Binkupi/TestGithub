let test:string = "test"
let number:number =1;
let isCheck:boolean = false;
let array:number[] = [1,2];
let strArray:string[]= ["01", "02"];
let anyArray:any[]= [1,true,"23"];
anyArray[0];
let unknowArray:unknown[]= [1,2,"true", true];
unknowArray[0];
console.log(unknowArray);
if(typeof(number) =="number"){
    console.log(number);
}

class people{
    name:string;
    constructor(){

    }
    getName(){
        return this.name;
    }

    setName(name:string){
        this.name=name
    }
}

const user = new people();
user.setName("Quốc");
const strName:string =  user.getName();

let classRoom:{name:string, numberStudent:number}={
    name:"test",
    numberStudent:1
}

function alertInfo():void{
    alert("my info");
}

function testFunction(name:string, numberText:number): number{
    return 123;
}
testFunction("!23",2);
function testFunction2 (name:string, numberText:number =3): any{
    return numberText;
}

function testFunction3 (name:string, numberText?:number): any{
    return numberText;
}

testFunction3("!23");

function fullName(name: string, ...restOfName: string[]): string {
    return name  + restOfName.join(",");
}

fullName("Quốc đẹp trai","1","2");


