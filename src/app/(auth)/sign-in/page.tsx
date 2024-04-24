import { Button, FloatingLabel } from "flowbite-react";
import React from "react";
import { PageContainer } from "src/components";

const SignInPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <form className='w-96 p-6 mx-auto bg-white drop-shadow-md rounded-xl flex flex-col gap-2 '>
        <h1 className='text-md text-gray-900'>Zaloguj się</h1>
        <FloatingLabel label='Email' variant='outlined' />
        <FloatingLabel label='Hasło' variant='outlined' type='password' />
        <Button type='submit' className='w-full bg-indigo-600'>
          Zaloguj się
        </Button>
      </form>
    </PageContainer>
  );
};

export default SignInPage;
