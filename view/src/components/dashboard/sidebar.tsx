import '../../pages/style.css'
import Nav from './nav';
import { UrlItem } from '../../utils/types';

interface AsideProps {
    visibility: string;
    url: UrlItem[];
}


const Aside: React.FC<AsideProps> = ({visibility, url}) => {
    return (
        <aside className={`md:block ${visibility} md:w-[250px] h-full overflow-y-auto bg-white`}>
            <Nav url={url} />
        </aside>
    )
}

export default Aside