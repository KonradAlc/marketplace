"use client";

import { Checkbox, FloatingLabel, Label, Radio } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, PageContainer } from "src/components";
import { RootState } from "src/store/store";

const LoginPage = () => {
  const count = useSelector((state: RootState) => state.auth.value);
  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <form className='w-96 p-6 mx-auto bg-white drop-shadow-md rounded-xl flex flex-col gap-2' onSubmit={handleSubmit}>
        <h1 className='text-lg text-gray-900 text-center font-semibold mb-4'>Zaloguj się</h1>

        <FloatingLabel label='Email' variant='outlined' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <FloatingLabel label='Hasło' variant='outlined' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button type='submit' className='w-full bg-indigo-600 mt-4'>
          Zaloguj się
        </Button>

        <Link href={"/register"} className='text-sm font-medium text-indigo-600 text-center mt-2'>
          Nie masz konta? Zarejestruj się
        </Link>
      </form>
    </PageContainer>
  );
};

export default LoginPage;
