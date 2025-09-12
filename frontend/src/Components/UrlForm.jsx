import React, { useState } from 'react'
import Service from '../utils/http'
import { Button, Container, Text, TextInput } from '@mantine/core';




const obj = new Service();

export default function UrlForm(props) {

    const generateShortUrl = async (data) => {

        try{

            let response= await obj.post("s",data);
            console.log(response);
            props.setResponse(response);
        }
        catch(error){
            console.log(error);
        }


    }
    const [data,setData]=useState({
        "originalUrl":"",
        "expiresAt":"",
        "title":"",
        "customUrl":""
    });
    




  return (
    <Container size="xs" mt="100">

        <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Original Url"
      withAsterisk
      placeholder="Give your Original Url"
      onChange={(e)=>
      {
        setData({...data , originalUrl:e.target.value})
      }
      }
    />
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Custom Url"
      placeholder="Give your Custom Url"
      onChange={(e)=>
      {
        setData({...data , customUrl:e.target.value})
      }
      }
    />
    <TextInput
      variant="filled"
      size="md"
      radius="md"
      label="Title"
      placeholder="Give your title"
      onChange={(e)=>
      {
        setData({...data , title:e.target.value})
      }
      }
    />
    <TextInput
      type="date"
      variant="filled"
      size="md"
      radius="md"
      label="Expires At"
      placeholder="Choose a date"
      onChange={(e)=>
      {
        setData({...data , expiresAt:e.target.value})
      }
      }
    />

    <Button onClick={()=>{
               // console.log(data);
               generateShortUrl(data);
             }}
             disabled = {data?.originalUrl?.length>10?false:true} 
             fullWidth mt="lg" color='red'>Generate Shortened URL</Button>


    </Container>
  )
}
