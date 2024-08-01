import {ILogin} from '../models/ILogin'
export class PageController{
    url:string;

    constructor(url: string){
        this.url = url;
    }
    async login (data: ILogin, endPoint: string){
        const response = await fetch (`${this.url}${endPoint}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'Application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.status != 200){
            throw new Error('No se pudo iniciar sesion')
        }


        const token = response.json();
        // this.tokenLog = responseOfLogin.token; 
        return token;
    }
}
