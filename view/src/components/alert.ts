import { Alert, AlertIcon, Icon } from "@chakra-ui/react";

interface AlertProps {
  message: string,
  status: 'info' | 'warning' | 'success' | 'error';
}

const alert = ({ message, status }: AlertProps) => {
    return (
        <Alert status={status}>
            <AlertIcon as={Icon} />
            {message}
        </Alert>
    );
};
export default alert;
