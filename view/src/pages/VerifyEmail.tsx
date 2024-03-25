import { useState, useRef, ChangeEvent, KeyboardEvent, FC } from 'react';
import { UsersRequest } from '../utils/PostRequest';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Feedback from '../components/alert';

const Verify: FC = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs  = useRef<HTMLInputElement []>(Array(6).fill(null));
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const email = searchParams.get('email');
    const [feedback, setFeedback] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = e.target.value;
        setOtp(newOtp);

        // Move to the next input field automatically
        if (e.target.value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            const newOtp = [...otp];
            newOtp[index - 1] = '';
            setOtp(newOtp);
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const otpValue = otp.join('');
        setLoading(true);
        try {
            const url = `http://localhost:5000/api/verifytoken?email=${email}`;
            const response = await UsersRequest(url, { token: otpValue })
            const res = await response.json();
            console.log(res);
            if (res.status === 'Ok') {
                setFeedback('Account verified successfully, redirecting to login page');
                setTimeout(() => {
                    navigate('/login');
                }, 5000);
            } else {
                setError(res.error || 'An unexpected error occurred');
            }
        } catch (error) {
            setError('Failed to connect to the server')
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="form_container md:w-4/6 mx-auto">
            <div className='form_wrapper'>
                {feedback && Feedback({ message: feedback, status: 'success' })}
                {error && Feedback({ message: error, status: 'error' })}
                <h2 className="text-2xl font-light">OTP</h2>
                <p className="text-slate-900 font-light text-center">
                    Enter your one time password (OTP) to verify you 
                </p>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='flex items-center flex-row'>
                            {otp.map((value, index) => (
                                <input
                                    key={index}
                                    ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
                                    type="text"
                                    maxLength={1}
                                    value={value}
                                    className="w-full border border-gray-300 p-3 rounded-md text-center mx-1 focus:outline-none focus:border-blue-500"
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                />
                            ))}
                    </div>
                    <button className='btn_primary hover:bg-blue-700/45' disabled={loading}>{loading ? 'Processing' :'Submit'}</button>
                    <button className='border border-gray-800 rounded-md text-sm p-4 hover:bg-slate-400 w-full'>Resend OTP</button>
                </form>
            </div>
        </div>
    );
};

export default Verify;
