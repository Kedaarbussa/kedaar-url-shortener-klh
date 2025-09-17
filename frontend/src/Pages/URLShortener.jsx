import { Container, TextInput } from '@mantine/core'
import UrlForm from '../Components/UrlForm'
import UrlResponse from '../Components/UrlResponse';
import { useState } from 'react';


export default function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
    
       <Container size={"xs"}>
           {response?<UrlResponse response = {response} />:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}
