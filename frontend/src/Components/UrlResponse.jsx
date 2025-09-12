import { Text } from '@mantine/core';
import Service from '../utils/http'
const obj = new Service();


export default function UrlResponse(props) {
   const short = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   return (
       <div>
           <Text color="red"> {short} </Text>
       </div>
   )
}
