import "../styles/globals.css";
import 'reactjs-popup/dist/index.css';
import { Provider } from "next-auth/client";
import { OrderProvider } from "../stateManagement/contexts/OrderContext";
export default function MyApp({Component,pageProps:{session,...pageProps}}){
    return(
        <Provider session={session}>
            <OrderProvider>
                <Component {...pageProps} />
            </OrderProvider>
        </Provider>
    )
}