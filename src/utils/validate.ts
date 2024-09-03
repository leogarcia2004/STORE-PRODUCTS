


import { UserProduct } from "../type/typeProductUse";

type Error = { 
    [key: string]: string;
};

export const validate = (data: UserProduct) => { 

    const errors: Error = {}; 

    if(!data.title) {
        errors["name"] = "O title é obrigatório";
    } 
    
    if(!data.price) { 
        errors["email"] = "O price é obrigatório";
    }

    if(!data.description) {
        errors["password"] = "A description é obrigatória";
    }

    if(!data.image ) {
        errors["confirmPassword"] = "A url da imagem é obrigatória";
    }

    if(data.description.length < 6) {
        errors["password"] = "A description deve ter no mínimo 6 caracteres";
    }


    


    return errors;
}