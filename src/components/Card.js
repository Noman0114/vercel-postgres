'use client'
import React, { useState } from 'react'
import { supabase } from '@/app/utils/supabase' 

const Card = () => {
    const [title, setTitle] = useState('') // Initialize with an empty string

    async function handleSubmit(e) {
        e.preventDefault()

        // Upsert (insert or update) the title into the 'post' table
        const { data, error } = await supabase
            .from('post')
            .upsert({ title })  // Ensure you're inserting the correct field
            .select()

        if (error) {
            console.error('Error inserting/updating:', error)
        } else {
            console.log('Data inserted/updated:', data)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    className='border'
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                />
                <button type='submit'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default Card
