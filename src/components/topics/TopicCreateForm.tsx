'use client'

import { useFormState } from 'react-dom'
import {
  Button,
  Input,
  Textarea,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from '@nextui-org/react'

import * as actions from '@/actions'
import FormButton from '../common/FormButton'

export default function TopicCreateForm() {
  const [formState, formAction] = useFormState(actions.createTopic, {
    errors: {},
  })
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen}>Create a Topic</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Create a Topic
              </ModalHeader>
              <ModalBody>
                <form action={formAction}>
                  <div className='flex flex-col gap-4 p-4 w-80'>
                    <Input
                      name='name'
                      label='Name'
                      labelPlacement='outside'
                      placeholder='Input topic name here...'
                      isInvalid={!!formState.errors.name}
                      errorMessage={formState.errors.name?.join('. ')}
                    />
                    <Textarea
                      name='description'
                      label='Description'
                      labelPlacement='outside'
                      placeholder='Input topic description here...'
                      isInvalid={!!formState.errors.description}
                      errorMessage={formState.errors.description?.join('. ')}
                    />

                    {formState.errors._form ? (
                      <div className='p-2 text-red-500'>
                        {formState.errors._form.join('. ')}
                      </div>
                    ) : null}

                    <FormButton>Submit</FormButton>
                  </div>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
