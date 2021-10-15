import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadNewPhotos } from '../store/photos'
import PhotoContent from './PhotoContent'
import PhotosLoadMore from './PhotosLoadMore'

function Photos() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadNewPhotos(1))
  }, [dispatch])

  return (
    <section>
      <PhotoContent />
      <PhotosLoadMore />
    </section>
  )
}

export default Photos
