import { FC } from "react"; //function component type
import { PodBreadCrumb } from "@/components/PodBreadCrumb";

interface podPageProps {
    params: {
        podname: string;
    }
}

const pod: FC<podPageProps> = ({ params }) => {
    const { podname } = params;
    return <div>
        <div className="h-6 px-2 flex items-center bg-gray-100/80">
            <PodBreadCrumb podName={podname} />
        </div>
    </div>
}

export default pod;