'use client'

import React from 'react'
import { BsChevronRight } from 'react-icons/bs'

interface BreadcrumbsProps {
  pageName: string
}

export default function Breadcrumbs({ pageName }: BreadcrumbsProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white/90">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-1.5">
          <li>
            <a
              className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
              href="/"
            >
              Home
              <BsChevronRight className="text-gray-400" size={16} />
            </a>
          </li>
          <li className="text-sm text-gray-800 dark:text-white/90">
            {pageName}
          </li>
        </ol>
      </nav>
    </div>
  )
}
