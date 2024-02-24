'use server'
import { z } from "zod"
import type { loginFormType } from "@/type/login_form_type"
import { cookies } from "next/headers";
const loginSchema = z.object({
mobile: z.string().length(11, { message: 'تعداد شماره های موبایل صحیح نمی باشد' })
//mobile: z.string()
})

const loginCodeSchema = z.object({
    mobile: z.string().length(11, { message: 'تعداد شماره های موبایل صحیح نمی باشد' }),
    code: z.string().length(5, { message: 'تعداد کاراکتر های کد وارد شده اشتباه می باشد' })
})


export const LoginForm = async (formstate: loginFormType, formData: FormData): Promise<loginFormType> => {

    const result = loginSchema.safeParse({
        mobile: formData.get('mobile')
    })

    if (!result.success) {
   
        return {
            messages: result.error.flatten().fieldErrors
        }
    }

    try {
       const res = await fetch('http://localhost:3001/auth/send-otp',{
        cache: 'no-store',
        method:'POST',
        headers:{
              'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            mobile: result.data.mobile
        })

        })
       
        const data = await res.json()

        if(data?.data?.statusCode==201){

            return {
                messages: {
                    success: result.data.mobile
                }

            }
        }else{

            return {
                messages: {
                 mobile: [data.data.message]
                }

            }
        }

    } catch (error: unknown) {

        if (error instanceof Error) {
            return {
                messages: {
                    _form: [error.message]
                }

            }
        } else {
            return {
                messages: {
                    _form: ['something went wrong']
                }

            }

        }

    }

        
}

export const LoginFormCode = async(formstate : loginFormType,  formData: FormData): Promise<loginFormType> =>{
    const result = loginCodeSchema.safeParse({
        mobile: formData.get('mobile'),
        code: formData.get('code')
    })

    if (!result.success) {
      
        return {
            messages: result.error.flatten().fieldErrors
        }
    }

    try {
        const res = await fetch('http://localhost:3001/auth/check-otp', {
         cache: 'no-store',   
         method:'POST',
         headers:{
             'Content-Type' : 'application/json'
         },
         body: JSON.stringify({
             mobile: result.data.mobile,
             code:result.data.code
         })
 
         })
        
         const data = await res.json()
       
         if(data?.data?.statusCode==201){
            cookies().set({
                name: 'token',
                value: data.data.token,
                httpOnly: true,
                path: '/',
              })
              cookies().set({
                name: 'refreshTokne',
                value: data.data.refreshToken,
                httpOnly: true,
                path: '/',
              })
        
             return {
                 messages: {
                     success: data.data.mobile
                 }
             }
         }else{
 
             return {
                 messages: {
                  code: [data?.data?.message]
                 }
 
             }
         }
 
     } catch (error: unknown) {
 
         if (error instanceof Error) {
        
            return {
                 messages: {
                     _form: [error.message]
                 }
 
             }
        
            } else {

             return {
                 messages: {
                     _form: ['something went wrong']
                 }
 
             }
 
         }
 
     }
 
}