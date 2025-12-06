'use client'

import { useState } from 'react';

export function Gallery({ heading, gallery }: { heading?: string, gallery: string[] }) {

  const [previewImage, setPreviewImage] = useState(gallery[0]);

  return (
    <div className={`grid gap-4 py-4 px-3 md:px-5 lg:px-20`}>
      {heading && <h2 className="text-4xl font-bold dark:text-white text-center">{heading}</h2>}
      <div className='text-center'>
        <img className="h-auto mx-auto blok max-w-full rounded-lg" src={`/images-optimized/${previewImage}`} alt="" />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {gallery.map(image => <div key={image} onClick={() => setPreviewImage(image)}>
          <img className="h-auto max-w-full rounded-lg" src={`/images-optimized/${image}`} alt="" />
        </div>)}
      </div>
    </div>
  )
}