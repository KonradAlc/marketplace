"use client";

import React, { useState } from "react";
import { Input } from "src/components";

type PersonalInfoFormProps = {};

const PersonalInfoForm = (props: PersonalInfoFormProps) => {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zip, setZip] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  return (
    <form className='w-100 flex flex-col gap-4'>
      <Input id='firstname' name='firstname' label='Imię' placeholder='Wpisz swoje imię' value={firstname} setValue={setFirstname} />
      <Input id='lastname' name='lastname' label='Nazwisko' placeholder='Wpisz swoje nazwisko' value={lastname} setValue={setLastname} />
      <Input id='email' type='email' name='email' label='Email' placeholder='Wpisz swój email' value={email} setValue={setEmail} />
      <Input id='phone' name='phone' label='Telefon' placeholder='Wpisz swój numer telefonu' value={phone} setValue={setPhone} />
      <Input id='address' name='address' label='Adres' placeholder='Wpisz swój adres' value={address} setValue={setAddress} />
      <Input id='city' name='city' label='Miasto' placeholder='Wpisz swoje miasto' value={city} setValue={setCity} />
      <Input id='zip' name='zip' label='Kod pocztowy' placeholder='Wpisz swój kod pocztowy' value={zip} setValue={setZip} />
      <Input id='country' name='country' label='Kraj' placeholder='Wpisz swój kraj' value={country} setValue={setCountry} />
    </form>
  );
};

export default PersonalInfoForm;
