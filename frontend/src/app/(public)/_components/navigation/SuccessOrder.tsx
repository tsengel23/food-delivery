"use client"

import { Button } from "@/components/ui/button"

export const SuccessOrder = () => {
    return (
        <div className="bg-white rounded-xl p-6 flex flex-col items-center gap-6 border border-red-500 ">
            <h2 className="text-2xl font-bold text-[#09090B]">Order Placed Successfully!</h2>
            <img src="./public/illustration.png" alt="Success" className="w-39 h-67" />
            <Button variant={"outline"} className="">
                <p className="text-[#18181B] text-sm font-medium px-12 py-3">
                    Back to home
                </p>
            </Button>
        </div>
    )
} 