import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
    Modal, ModalContent,
    ModalHeader, ModalCloseButton,
    ModalOverlay, Button, ModalBody } from "@chakra-ui/react";
import Feedback from "../../components/alert";
import { UsersRequest } from "../../utils/PostRequest";
import { PUTRequest } from "../../utils/putRequest";


interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

const Biztype: React.FC<RegisterProps> = ({isOpen, onClose, data}) => {
    const [feedback, setFeedback] = useState('')
    const size = Object.keys(data).length
    const {register, handleSubmit, setValue, formState: { errors }} = useForm();
    setValue('fee', size ? data.fee : '')
    setValue('name', size ? data.name : '')
    setValue('code', size ? data.code : '')

    const onSubmit: SubmitHandler<Record<string, any>> = async (data) => {
        const url = `${import.meta.env.VITE_API_URL}/businesstypes`
        const response = await UsersRequest(url, data)
        const res = await response.json()
        if (response.ok) {
            setFeedback('Type added successfully')
            setTimeout(() => {
                onClose()
            }, 3000);
        } else {
            setFeedback(res.error)
        }
    }

    const onUpdate: SubmitHandler<Record<string, any>> = async (data) => {
        const url = `${import.meta.env.VITE_API_URL}/businesstypes/${data.code}`
        const response = await PUTRequest(url, data)
        const res = await response.json()
        if (response.ok) {
            setFeedback('Type updated successfully')
            setTimeout(() => {
                onClose()
            }, 3000);
        } else {
            setFeedback(res.error)
        }
    }
    return (
      <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <h2 className="text-2xl font-medium">{size > 0  ? 'Update Types' : 'Add Types'}
                </h2>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={4}>
            {feedback && <Feedback message={feedback} status='success' />}
              <form onSubmit={handleSubmit(size > 0 ? onUpdate : onSubmit)} className="font-sans flex flex-col space-y-5 text-sm">
                <input
                    type="text"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Name" {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500 text-xs">This field is required</span>}
                <input
                    type="text"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Code" {...register('code', { required: true })} 
                />
                {errors.code && <span className="text-red-500 text-xs">This field is required</span>}
                <input
                    type="text"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Fees" {...register('fee', {required: true})}
                />
                <button className="btn_primary">
                    {size > 0 ? 'Update' : 'Save'}
                </button>
                <Button onClick={onClose}>Cancel</Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }

export default Biztype