'use client'

import { useState } from "react";
import SubmitCodeForm from "@/components/auth/submit-code-form";
import SubmitMobileForm from "@/components/auth/submit-mobile-form";
const Login = () => {
    const [formStatus, setFormStatus] = useState('');
    const handleStatus = (name: string) => {
        setFormStatus(name);
    };
    return (
        <>
            <div className="container">
                <div className="flex max-w-full md:w-[480px] mx-auto items-center justify-center py-6 px-6 lg:px-8 md:mt-36 bg-slate-100 dark:bg-zink-800">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                            className="mx-auto h-10 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="Your Company"
                        />
                        <div className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            ورود | ثبت نام
                        </div>

                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        {

                         formStatus ? <SubmitCodeForm mobile={formStatus} /> : <SubmitMobileForm checkForm={handleStatus} />
                        
                        }

                    </div>


                </div>
            </div>
        </>
    )
}
export default Login