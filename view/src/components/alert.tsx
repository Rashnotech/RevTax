import React, { useEffect, useState } from 'react';

interface AlertProps {
  message: string,
  status: string;
}

const Feedback: React.FC<AlertProps> = ({ message, status }: AlertProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Set a timer to hide the feedback after 2000 milliseconds (2 seconds)
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        // Cleanup function to clear the timer if the component unmounts before the timer is finished
        return () => clearTimeout(timer);
    }, []); // Empty dependency array means this effect runs once on mount

    if (!isVisible) return null;

    return (
        <>
            <div className={status}>
                    <p>{message}</p>
            </div>
        </>
    )
};
export default Feedback;
