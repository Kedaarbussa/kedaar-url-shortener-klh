import { Text } from '@mantine/core';
import Service from '../utils/http'
import { QRCodeSVG } from "qrcode.react"
const obj = new Service();


export default function UrlResponse(props) {
   const short = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   return (
       <div>
           <Text color="red"> {short} </Text>
           <QRCodeSVG imageSettings={{
                     excavate: true,
                     src: '/HomeBackground.png',
                     height: 100,
                     width: 100
                 }} value={surl} size={400}>
                   <Image src={'/HomeBackground.png'} />
 </QRCodeSVG>

       </div>

   )
}
