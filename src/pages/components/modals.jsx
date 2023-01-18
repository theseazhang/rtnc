import { Example } from '@/components/layout/example'
import { Button } from '@/components/ui/Button'
import { BasicModal } from '@/components/ui/Modal'
import { BackHome } from '@/components/ui/Nav'
import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [modalProps, setModalProps] = useState({
    isOpen: false,
    showIcon: false,
    dismiss: false,
    showCancel: true,
    modalType: 'primary',
  })

  function closeModal() {
    const newState = { ...modalProps }
    newState.isOpen = false
    setModalProps(newState)
  }

  function openModal() {
    setModalProps({
      isOpen: true,
      showIcon: false,
      dismiss: false,
      showCancel: false,
      modalType: 'primary',
    })
  }

  function openModal2() {
    setModalProps({
      isOpen: true,
      showIcon: true,
      dismiss: false,
      showCancel: true,
      modalType: 'primary',
    })
  }

  function openModal3() {
    setModalProps({
      isOpen: true,
      showIcon: true,
      dismiss: false,
      showCancel: true,
      modalType: 'danger',
    })
  }

  function openModal4() {
    setModalProps({
      isOpen: true,
      showIcon: true,
      dismiss: false,
      showCancel: false,
      modalType: 'danger',
    })
  }

  function openModal5() {
    setModalProps({
      isOpen: true,
      showIcon: true,
      dismiss: true,
      showCancel: false,
      modalType: 'danger',
    })
  }

  return (
    <>
      <Head>
        <title>Modals</title>
      </Head>
      <BackHome />
      <Example title="Modals">
        <Button onClick={openModal}>Basic</Button>
        <Button onClick={openModal2}>Show Icon</Button>
        <Button onClick={openModal3}>Danger Alert</Button>
        <Button onClick={openModal4}>Hidden Cancel Button</Button>
        <Button onClick={openModal5}>Show Dismiss</Button>
      </Example>
      <section>
        <BasicModal
          title="This is a modal!"
          description="This is a description, it is a <p></p> tag. The dismiss button only show while screen >= 640px."
          buttonText="buttonText"
          showIcon={modalProps.showIcon}
          showCancel={modalProps.showCancel}
          modalType={modalProps.modalType}
          dismiss={modalProps.dismiss}
          onClose={closeModal}
          onOk={closeModal}
          show={modalProps.isOpen}
        />
      </section>
    </>
  )
}
