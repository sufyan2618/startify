import Link from 'next/link';
import React from 'react'

const Card = ({post}) => {
    // Assuming post is an object with properties like title, author, date, etc.
    const { title, author: {id:author_id, name}, date, category, id, description, image, views } = post;

  return (
    <div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <Link href={`/startup/${id}`}><p className="text-gray-600 mb-4">{description}</p></Link>
            <div className="flex items-center justify-between text-sm text-gray-500">
                <Link href={`/user/${author_id}`}><span>By {name}</span></Link>
                <span>{date}</span>
                <span>{views} views</span>
            </div>
            <div className="mt-4">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">{category}</span>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Card