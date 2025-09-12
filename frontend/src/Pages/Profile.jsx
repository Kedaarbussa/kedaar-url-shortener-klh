import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Service from '../utils/http'
import { Avatar, Center, Container, Text } from '@mantine/core';

const obj = new Service();

export default function Profile() {
  

    const [user, setUser] = useState({})


   const getProfileData = async () => {
       try {
           let data = await obj.get("user/me")
           setUser(data)
           console.log(data);
       } catch (error) {
           console.log(error);
       }
   }

   
   useEffect(() => {
       getProfileData();
   }, [])


    return (<>

<Center style={{height: 500 }}>
    <Container size="responsive"
            style={{
              backgroundColor:"cyan",
              borderRadius: "40px",
              padding: "20px",
              paddingTop: "10px",
            }} >
        <Center >
        <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocIzRK1kjU5H9gZZqfvGX-7e1fcp5RiVl7C-vi_vVJrxGp8FHKW6=s96-c" size="100" />
    </Center>
    <Center>
        <Text size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'gray', to: 'rgba(0, 0, 0, 1)', deg: 360 }}>Name : {user.name}</Text>
    </Center>
    <Center>
        <Text size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'gray', to: 'rgba(0, 0, 0, 1)', deg: 360 }}>Email : {user.email}</Text>
    </Center>
    <Center>
        <Text size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'gray', to: 'rgba(0, 0, 0, 1)', deg: 360 }}>ID : {user._id}</Text>
    </Center>
    <Center>
        <Text size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: 'gray', to: 'rgba(0, 0, 0, 1)', deg: 360 }}>CreatedAt : {user.createdAt}</Text>
    </Center>
    </Container>
    </Center>
    
    </>
  )
}
