'use client'
import { Input } from "@nextui-org/react"
import { SubmitButton } from "../common/submit-button";
import * as actions from "@/actions"
import { useFormState } from "react-dom";
import Countdown from 'react-countdown';
import type { countdownType } from "@/type/countdown_form_type"
import { ReSubmitButton } from "@/components/common/resubmit-button"
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { useEffect , useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
const SubmitCodeForm = ({mobile} : {mobile : string}) => {
    const router = useRouter()
    const { setUser } = useContext(AuthContext)
      
    const [formState, action] = useFormState(actions.LoginFormCode, { messages: {} })
    const renderer = ({ minutes, seconds, completed }: countdownType) => {
        if (completed) {
            return <ReSubmitButton />;
        } else {
    
            return <span>{minutes}:{seconds}</span>;
        }
    };


    useEffect(() => {
        if (!!formState.messages.success) {
         setUser(formState.messages.success)
          router.push('/about');
          toast.success('ورود با موفقیت انجام شد');
        }
      }, [formState.messages.success]);




    return (
        <form className="space-y-6" action={action} method="POST">
            <div>
                <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                    لطفا کد را وارد نمایید
                </label>
                <div className="mt-2">
                    <input 
                     type="hidden"
                     name="mobile"
                     value={mobile}
                      
                    />
                    <Input
                        isRequired
                        type="text"
                        label="کد"
                        name="code"
                        className="max-w-xs"
                        dir="rtl"
                        defaultValue=""
                        isInvalid={!!formState?.messages?.code}
                        errorMessage={formState?.messages?.code?.join(', ')}

                    />
                </div>
            </div>
            {formState.messages?._form?.join(', ') ? <div className="bg-red-200 text-sm border border-red-400 rounded-md p-2">{formState.messages._form?.join(', ')}</div> : null}
            <div className="flex justify-between items-center ">
                <SubmitButton title="ورود"/>
                <Countdown
                    date={Date.now() + 120000}
                    renderer={renderer}
                />
            </div>

        </form>
    )

}

export default SubmitCodeForm