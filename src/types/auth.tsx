
export interface loginForm {
    email:string;
    password:string

}
export type LoginContextTye ={
    authgetValue(data:loginForm):any;
    authValue:loginForm;
    logOut():any;
    isLogin():any 
}