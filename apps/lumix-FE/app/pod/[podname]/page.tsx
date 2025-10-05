import { FC } from "react"; //function component type

interface podPageProps {
    params: {
        podname: string;
    }
}

const pod: FC<podPageProps> = ({params})=>{
    const { podname } = params;
    return <div>
        welcome to {podname}
    </div>
}

export default pod;