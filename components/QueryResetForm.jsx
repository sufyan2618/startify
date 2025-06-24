"use client"
import { X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const QueryResetForm = () => {
    const reset = () => {
        const form = document.querySelector("form");
        if(form){
            form.reset();
        }
    }
    return (
        <div>
            <button type='reset' onClick={reset}>
                <Link href="/">
                <X className="absolute right-10 top-7 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                </Link>
                
                
            </button>
        </div>
    )
}

export default QueryResetForm