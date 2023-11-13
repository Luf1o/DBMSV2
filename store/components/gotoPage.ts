import { useRouter } from "next/router"
const router = useRouter();

const redirectPage=(val: number) => {
    if(val==1)
        router.push('/');
    else
       val++;
}

export default redirectPage;