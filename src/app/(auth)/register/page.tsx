"use client";

import { Checkbox, FloatingLabel, Label, Radio } from "flowbite-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button, PageContainer } from "src/components";

const RegisterPage = () => {
  const [accountType, setAccountType] = useState<"user" | "seller">("user");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [acceptStatute, setAcceptStatute] = useState<boolean>(false);
  const [newsletter, setNewsletter] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <PageContainer>
      <form className='w-96 p-6 mx-auto bg-white drop-shadow-md rounded-xl flex flex-col gap-2' onSubmit={handleSubmit}>
        <h1 className='text-lg text-gray-900 text-center font-semibold mb-2'>Utwórz nowe konto</h1>

        <fieldset className='flex max-w-md flex-row justify-center gap-4 mb-4'>
          <legend className='text-center mb-2 text-gray-600 text-md font-medium'>Wybierz typ konta</legend>
          <div className='flex items-center gap-2'>
            <Radio
              id='user'
              name='accountType'
              value='user'
              checked={accountType === "user"}
              onChange={(e) => setAccountType(e.target.value as "user" | "seller")}
            />
            <Label htmlFor='user'>Użytkownik</Label>
          </div>
          <div className='flex items-center gap-2'>
            <Radio
              id='seller'
              name='accountType'
              value='seller'
              checked={accountType === "seller"}
              onChange={(e) => setAccountType(e.target.value as "user" | "seller")}
            />
            <Label htmlFor='seller'>Sprzedawca</Label>
          </div>
        </fieldset>

        <FloatingLabel label='Email' variant='outlined' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <FloatingLabel label='Imię' variant='outlined' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <FloatingLabel label='Nazwisko' variant='outlined' value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <FloatingLabel label='Hasło' variant='outlined' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <FloatingLabel
          label='Potwierdź hasło'
          variant='outlined'
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className='flex items-center gap-2'>
          <Checkbox id='acceptStatute' checked={acceptStatute} onChange={(e) => setAcceptStatute(e.target.checked)} />
          <Label htmlFor='acceptStatute' className='inline'>
            Zapoznałem/am się i akceptuję&nbsp;
            <Link href='/statute' className='text-indigo-600 hover:underline dark:text-cyan-500'>
              regulamin
            </Link>
            .
          </Label>
        </div>

        <div className='flex items-center gap-2'>
          <Checkbox id='newsletter' checked={newsletter} onChange={(e) => setNewsletter(e.target.checked)} />
          <Label htmlFor='newsletter' className='inline'>
            Chcę otrzymywać informacje o nowościach i promocjach.
          </Label>
        </div>

        <Button type='submit' className='w-full bg-indigo-600 mt-4'>
          Zarejestruj się
        </Button>

        <Link href={"/login"} className='text-sm font-medium text-indigo-600 text-center mt-2'>
          Masz już konto? Zaloguj się
        </Link>
      </form>
    </PageContainer>
  );
};

export default RegisterPage;
