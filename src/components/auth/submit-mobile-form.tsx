'use client'
import { Input } from "@nextui-org/react"
import { SubmitButton } from "../common/submit-button";
import * as actions from "@/actions"
import { useFormState } from "react-dom";

  
const SubmitMobileForm= ({checkForm} : {checkForm : (name: string) => void}) => {
    const [formState, action] = useFormState(actions.LoginForm, { messages: {} })

    if(!!formState.messages.success){
        checkForm(formState.messages.success)
    }
    return (
        <form className="space-y-6" action={action} method="POST">
            <div>

                <label htmlFor="code" className="block text-sm font-medium leading-6 text-gray-900">
                    لطفا شماره موبایل را وارد نمایید
                </label>
                <div className="mt-2">
                    <Input
                        isRequired
                        type="text"
                        label="موبایل"
                        name="mobile"
                        placeholder="0912..."
                        className="max-w-xs"
                        dir="rtl"
                        isInvalid={!!formState?.messages?.mobile}
                        errorMessage={formState?.messages?.mobile?.join(', ')}
                    />
                </div>
            </div>
            {formState.messages?._form?.join(', ') ? <div className="bg-red-200 text-sm border border-red-400 rounded-md p-2">{formState.messages._form?.join(', ')}</div> : null}

            <div className="flex justify-between items-center">
                <SubmitButton title="ورود"/>
            </div>

        </form>
    )

}

export default SubmitMobileForm