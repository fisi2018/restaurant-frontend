import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { methodPost } from "../../../utils/methods";

const options={
    providers:[
        Providers.Credentials({
            name:"Login Restaurant",
            async authorize(credentials){
                const url="user/login";
               const response=await methodPost(url,{
                   email:credentials.email,
                   password:credentials.password
               });
               console.log("API",response);
               if(response.message){
                const errorMessage = response.message
                throw new Error(errorMessage + '&email=' + credentials.email)
               }
               console.log("Antes de enviar");
               return {
                   name:response.data.name,
                   email:response.data.email,
                   image:response.data._id,
                   token:response.tokenSesion
               };

            }
        })
    ],
    callbacks:{
        async jwt(token,user){
            if(user){
                token.accessToken=user.token;
            }
            return token;
        },
        async session(session, token) {
        session.accessToken = token.accessToken
        return session
  }
    },
    pages:{
        error:"/login"
    }
}

export default (req,res)=>NextAuth(req,res,options);