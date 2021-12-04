
import { REGEX } from "../consts/regex"

export const validationRegister=(form)=>{
    let errors={}
    if(!form.name.trim()){
        errors.name="Es necesario ingresar un nombre"
    }else if(!REGEX.REGEX_NAMES.test(form.name.trim())){
        errors.name="El formato de nombre no es válido"
    }
    if(!form.email.trim()){
        errors.email="Es necesario que ingrese su correo electrónico"
    }else if(!REGEX.REGEX_EMAIL.test(form.email.trim())){
        errors.email="Email inválido"
    }
    if(!form.password.trim()){
        errors.password="Es necesario que ingrese una contraseña"
    }else if(form.password.trim().length<8){
        errors.password="La contraseña debe tener por lo menos 8 caracteres"
    }
    return errors;
}
export const validationLogin=(form)=>{
    let errors={};
    if(!form.email.trim()){
        errors.email="Es necesario que ingrese su correo electrónico"
    }else if(!REGEX.REGEX_EMAIL.test(form.email.trim())){
        errors.email="Email inválido"
    }
    if(!form.password.trim()){
        errors.password="Es necesario que ingrese una contraseña"
    }else if(form.password.trim().length<8){
        errors.password="La contraseña debe tener por lo menos 8 caracteres"
    }
    return errors;
}
export const validationInfo=(form)=>{
    let errors={};
    if(!form.address.trim()){
        errors.address="Es necesario que ingrese la dirección de envío"
    }
}