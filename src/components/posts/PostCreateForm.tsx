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

interface PostCreateFormProps {
  slug: string
}

export default function PostCreateForm({ slug }: PostCreateFormProps) {
  const [formState, formAction] = useFormState(
    actions.createPost.bind(null, slug),
    {
      errors: {},
    }
  )
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button onPress={onOpen}>Create a Post</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Create a Post
              </ModalHeader>
              <ModalBody>
                <form action={formAction}>
                  <div className='flex flex-col gap-4 p-4 w-80'>
                    <Input
                      name='title'
                      label='Title'
                      labelPlacement='outside'
                      placeholder='Input post title here...'
                      isInvalid={!!formState.errors.title}
                      errorMessage={formState.errors.title?.join('. ')}
                    />
                    <Textarea
                      name='content'
                      label='Content'
                      labelPlacement='outside'
                      placeholder='Input post content here...'
                      isInvalid={!!formState.errors.content}
                      errorMessage={formState.errors.content?.join('. ')}
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
