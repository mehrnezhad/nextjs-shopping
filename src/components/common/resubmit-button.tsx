'use client'
import { Button } from "@nextui-org/react"
import { useFormStatus } from "react-dom"
export const ReSubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <Button
            type="submit"
            isLoading = {pending}
            className="rounded-md bg-slate-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        >
            ارسال دوباره
        </Button >
    )
}