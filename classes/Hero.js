export class Hero{
    static city(){
        return "Gotham"
    }
    constructor(fn, ln){
        this.fname = fn;
        this.lname = ln;
        this._secret = 'heros secret';
    }
    fullname(){
        return this.fname+' '+this.lname;
    }
    get secret(){
        return this._secret
    }
    set secret(val){
        this._secret = val;
    }
};