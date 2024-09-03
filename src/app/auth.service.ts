export class AuthService{
    loggedIn= true;

    isAuthenticated(){
        const promise=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(this.loggedIn);
            }, 8000);
        })
        return promise;
    }

    onLoggingIn(){
        this.loggedIn=true;
    }
    onLoggingOut(){
        this.loggedIn=false;
    }
}