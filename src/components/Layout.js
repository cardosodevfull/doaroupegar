import Script from 'next/script'
import Head from 'next/head';

const layout = ({children}) =>{
    return(
        <>
        <Head>            
            <title>Entregadorlog</title>
        </Head>
            {children}
            <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB0QDt6SPY2NE6wCAxVhA2cupgqnVRGFUE&libraries=places"></Script>
        </>
    )
}

export default layout