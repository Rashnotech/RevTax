import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
  } from '@chakra-ui/react'

interface PanelItemProps {
    label: string;
    number: number;
    type: string | 'increase' | 'decrease';
    percent: number;
}

  
const PanelItem: React.FC<PanelItemProps> = ({label, number, type, percent}) => {
    return (
        <div className="p-6 w-full  md:w-[32%] bg-white shadow-md space-y-2">
            <StatGroup>
                <Stat>
                    <StatLabel>{label}</StatLabel>
                    <StatNumber>{number}</StatNumber>
                    <StatHelpText>
                        <StatArrow type={type as 'increase' | 'decrease'} />
                        {percent}%
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </div>
    )
}

export default PanelItem;