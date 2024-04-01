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

const Register: React.FC<RegisterProps> = ({isOpen, onClose}) => {
    const [feedback, setFeedback] = useState('')
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit: SubmitHandler<Record<string, any>> = async (data) => {
        const url = `${import.meta.env.VITE_AUTH_URL}/signup`
        const response = await UsersRequest(url, data)
        const res = await response.json()
        if (response.ok) {
            setFeedback('Staff record added successfully')
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
            <ModalHeader><h2 className="text-2xl font-medium">Add staff record</h2></ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={4}>
            {feedback && <Feedback message={feedback} status='success' />}
              <form onSubmit={handleSubmit(onSubmit)} className="font-sans flex flex-col space-y-5 text-sm">
                <input
                    type="text"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="First Name" {...register('firstname', { required: true })}
                />
                {errors.firstname && <span className="text-red-500 text-xs">This field is required</span>}
                <input
                    type="text"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Last Name" {...register('lastname', { required: true })} 
                />
                {errors.lastname && <span className="text-red-500 text-xs">This field is required</span>}
                <input
                    type="tel"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Telephone" {...register('telephone', {required: true})}
                />
                {errors.telephone && <span className="text-red-500 text-xs">This field is required</span>}
                <input
                    type="hidden"
                    value='Welcome@2024' {...register('password')}
                />
                <input
                    type="email"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Email" {...register('email', {required: true})} 
                />
                {errors.email && <span className="text-red-500 text-xs">This field is required</span>}
                <input
                    type="text"
                    className="border rounded-md px-4 py-3 outline-none"
                    placeholder="Address" {...register('address', {required: true})} 
                />
                {errors.address && <span className="text-red-500 text-xs">This field is required</span>}
                <select {...register('type', { required: true})} className="border rounded-md px-4 py-3 outline-none text-sm text-slate-400" id="">
                  <option value="">Select Role</option>
                  <option value={3}>Admin</option>
                  <option value={2}>Staff</option>
                </select>
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

export default Register