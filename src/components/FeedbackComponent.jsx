import { Card } from 'flowbite-react'
import React from 'react'

const CardFeedBackComponent = (props) => {
  return (
    <>
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-4xl font-bold leading-none text-blue-800 dark:text-white">FeedBack</h5>
          <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            View all
          </a>
        </div>
        <div className="flow-root grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-auto">
          {props.comments.map((comments) => (
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 bg-gray-200 rounded" key={comments.id}>
              <li className="p-3 sm:p-4">
                <div className="flex items-center">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium text-gray-900 dark:text-white uppercase">{comments.user.username}</p>
                    <p className="truncate text-sm text-gray-500 dark:text-gray-400">{comments?.body}</p>
                  </div>
                  <div className="inline-flex items-center text-lg font-semibold text-blue-800 dark:text-white">$ {comments?.postId}</div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </Card>
    </>
  )
}

export default CardFeedBackComponent 