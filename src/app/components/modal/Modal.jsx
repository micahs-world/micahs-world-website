'use client'

import { useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import './modal.scss'

export default function Modal({ title, children }) {
  const overlay = useRef(null)
  const wrapper = useRef(null)
  const router = useRouter()

  const onDismiss = useCallback(onDismissCallback, [router])

  function onDismissCallback() {
    router.back();
  }

  const onClick = useCallback(onClickCallback,[onDismiss, overlay, wrapper])

  function onClickCallback(e) {
    if (e.target === overlay.current || e.target === wrapper.current) {
      if (onDismiss) onDismiss()
    }
  }

  const onKeyDown = useCallback(onKeyDownCallback,[onDismiss])

  function onKeyDownCallback(e) {
    if (e.key === 'Escape') onDismiss()
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [onKeyDown])

  return (
    <div
      id="modal-overlay"
      ref={overlay}
      onClick={onClick}
    >
      <section
        id="modal-wrapper"
        ref={wrapper}
      >
        <header>
          <h2>{title}</h2>

          <button onClick={onDismissCallback}>
            Exit <FontAwesomeIcon icon={faXmark} />
          </button>
        </header>

        {children}
      </section>
    </div>
  )
}