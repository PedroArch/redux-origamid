import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadNewPhotos } from '../store/photos'
import Loading from './helper/Loading'
import styles from '../styles/PhotosLoadMore.module.scss'

function PhotosLoadMore() {
  const dispatch = useDispatch();
  const { pages, infinite, loading } = useSelector(state => state.photos)

  function handleClick () {
    dispatch(loadNewPhotos(pages + 1))
  }

  if (loading) return <Loading />
  if (!infinite) return null;
  return (
    <button className={styles.button} onClick={handleClick}>
      +
    </button>
  )
}

export default PhotosLoadMore
