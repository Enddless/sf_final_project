import AuthService from "../services/authService";
import {makeAutoObservable} from "mobx"


export default class Store {
    //переменная, которая будет содержать информацию о пользователе
    // user = {}
    //переменная, которая будет принимать значение true, если авторизованы и false, если не авторизованы
    isLogged = false; 

    //наблюдает свойства по умолчанию
    constructor() {
        makeAutoObservable(this);
    }

    // реализация мутаций
    // Они запускаются автоматически каждый раз при изменении наблюдаемых данных, 
    // чтобы выполнить определённую логику, которая здесь будет указана
    // setUser(){
    //     this.user = user;
    //     console.log("321")
    // }
    setIsLogged(){
        this.isLogged = Boolean;
        console.log("123")
    }


    //реализация реакций-экшенов
    //действия Actions,  меняют состояние и вызываются из реактивных React компонентов приложения
    async login(username, userpassword){
        try{
            const response = await AuthService.login(username, userpassword)
            localStorage.setItem('expire', response.data.expire) //expire записался
            localStorage.setItem('accesstoken', response.data.accessToken)//token записался
            this.setIsLogged(true)
            console.log("response.data"+ response.data)
            
        } 
        catch (error) {
            console.log('Ошибка в блоке async login:', error.response);
        }
    }


    async logout(){
        try{
            const response = await AuthService.logout();
            localStorage.removeItem('expire') //expire удалился
            localStorage.removeItem('accesstoken')//token удалился
            this.setIsLogged(false)
        } 
        catch (error) {
            console.log('Ошибка в блоке async logout:', error.response);
        }
    }
}