interface AlertProps {
  message: string,
  status: string;
}

const Feedback: React.FC<AlertProps> = ({ message, status }: AlertProps) => {
    return (
        <>
            <div className={status}>
                    <p>{message}</p>
            </div>
        </>
    )
};
export default Feedback;
