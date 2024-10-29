import React from 'react'
import HeadingLink from './HeadingLink'
import RecentPostItem from './RecentPostItem'

function RecentPosts() {
  return (
    <div>
    <HeadingLink heading="Recent Posts" link="/posts" />

    <div className="bg-white rounded-xl shadow-sm min-h-[380px] w-full px-5 py-7">
      <RecentPostItem/>
      <RecentPostItem/>
      <RecentPostItem/>
      <RecentPostItem/>
      <RecentPostItem/>
    </div>
  </div>
  )
}

export default RecentPosts