import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import {
    Modal, ModalContent,
    ModalHeader, ModalCloseButton,
    ModalOverlay, Button, ModalBody } from "@chakra-ui/react";
import Feedback from "../../components/alert";
import { UsersRequest } from "../../utils/PostRequest";


interface RegisterProps {
    isOpen: boolean;
    onClose: () => void;
}

const Biztype: React.FC<RegisterProps> = ({isOpen, onClose}) => {
    const [feedback, setFeedback] = useState('')
    const {register, handleSubmit, formState: { errors }} = useForm();

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
            console.log(res.error)
            setFeedback(res.error)
        }
    }
    return (
      <>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader><h2 className="text-2xl font-medium">Add Types</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={4}>
            {feedback && <Feedback message={feedback} status='success' />}
              <form onSubmit={handleSubmit(onSubmit)} className="font-sans flex flex-col space-y-5 text-sm">
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
                    type="currency"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Fees" {...register('fee', {required: true})}
                />
                <button className="btn_primary">
                    Save
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