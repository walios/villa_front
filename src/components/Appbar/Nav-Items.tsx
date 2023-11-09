'use client';
import React, { useEffect, useState } from 'react';
import navstyle from './navbar.module.css';
import Link from 'next/link';
import navItems from '@/data/navbar-item';
import { HiBars3 } from 'react-icons/hi2';
import PrimaryButton from '../Button/Primary-Button';
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { setCookie, getCookie } from 'cookies-next'
import Profile from './Profile';
export type NavItemPropsType = {
  color: string
};
import jwt from 'jsonwebtoken';
import { set } from 'date-fns';


export default function NavbarItems({
  color
}: NavItemPropsType) {
    const [open, setOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const handleSignupOpen = () => setSignupOpen(!signupOpen);
    const [expandNav, setNavExpand] = useState<boolean>(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFistName] = useState('');
    const [lastName, setLastName] = useState('');
    const router = useRouter();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [superuser, setSuperuser] = useState(false); 
    const token = getCookie('jwt');
    useEffect(() => {
      try{
        if (token) {
          var decoded = jwt.verify(token, 'PLEASE WORK');
          if(typeof decoded === 'object' && decoded.superuser === true){
            setSuperuser(true);
          }
        }
        } catch (err) {
          router.push('/');
        }
      }, []);
  useEffect(() => {
    const jwt = getCookie('jwt');
    if (jwt) {
      // Validate the JWT here and set the authenticated state accordingly
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSignIn = async () => {
    // Check if inputs are valid
    if (!emailRegex.test(email) || !password) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: 'Please enter a valid email and password',
        showConfirmButton: false,
        timer: 3000
      });
      return;
    }

    // Call API with input data
    const data = {
      email: email,
      password: password
    };
    const apiUrl = 'http://localhost:8000/users/api/login/';
    try {
      const response = await axios.post(apiUrl, data, { withCredentials: true });
      if (response.data.status === 200) {

        setAuthenticated(true);
        router.replace('/');
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000
        });
        const token = getCookie('jwt');
        try{
          if (token) {
            var decoded = jwt.verify(token, 'PLEASE WORK');
            if(typeof decoded === 'object' && decoded.superuser === true){
              router.push('/drifri');
            }
          }
          } catch (err) {
            router.push('/');
          }
      }
      else {
        Swal.fire({
          position: 'bottom-end',
          icon: 'error',
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000
        });
      }
    } catch (error) {
      Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title: "Something went wrong",
        showConfirmButton: false,
        timer: 3000
      });
    }
  };

  const handleSignUp = async () => {
    if (!emailRegex.test(email) || !password || !firstName || !lastName) {
        Swal.fire({
          position: 'bottom-end',
          icon: 'error',
          title: 'Please enter a valid email and password',
          showConfirmButton: false,
          timer: 3000
        });
        return;
      }
      const data = {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName
      };
      const apiUrl = 'http://localhost:8000/users/api/register/';

      try {
        const response = await axios.post(apiUrl, data, { withCredentials: true });
        if (response.data.status === 200) {
            router.replace('/');
        Swal.fire({
          position: 'bottom-end',
          icon: 'success',
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000
        });

      }
      else {
        Swal.fire({
          position: 'bottom-end',
          icon: 'error',
          title: response.data.message,
          showConfirmButton: false,
          timer: 3000
        });
      }
    } catch (error) {
      console.error(error);
    }
  };



  if (loading) {
    return null; // or a loading spinner
  }

  return (
    <>
      {/* nav routes */}

      <div className={`${navstyle['nav-res']} ${expandNav ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'}`}>

        <ul className={navstyle['nav-item-container']}>

            <li className={`${navstyle['nav-item']} ${color}`}>
              <Link href="/">Home</Link>
            </li>
            <li className={`${navstyle['nav-item']} ${color}`}>
              <Link href="/#Services">Services</Link>
            </li>
            <li className={`${navstyle['nav-item']} ${color}`}>
              <Link href="/#Gallery">Gallery</Link>
            </li>
            {superuser && (
              <li className={`${navstyle['nav-item']} ${color}`}>
                <Link href="/drifri">Admin</Link>
              </li>
            )}
        </ul>

      </div>

      <div className={`flex-full-center gap-5`}>

        {/* authenticate button */}
        {authenticated ? (
          // avatar
          <div className={`${color} gap-5`}>
            <div className='px-2 py-1 md:px-5 md:py-2'></div>
            <Profile />
          </div>
        ) : (
          <div className={`${color} gap-5`}>
            <PrimaryButton padding={`px-2 py-1 md:px-5 md:py-2`} onClick={handleOpen} children={'Sign in'} />
          </div>
        )}

        {/* expand bar icon */}
        <div onClick={() => setNavExpand(!expandNav)} className={`cursor-pointer md:hidden`}>
          <HiBars3 size={35} color={`${expandNav ? '#E0B872' : '#E0B872'}`} />
        </div>
        {/* sign in form */}
        <Dialog size="xs" open={open} handler={handleOpen} className="shadow-none">
            <Card className="w-full">
              <CardHeader variant="gradient" color="gray" className="mb-4 grid h-28 place-items-center">
                <Typography className="text-brown" variant="h3">
                  Sign In
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input label="Password" type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)} />
                <div className="-ml-2.5">
                  <Checkbox label="Remember Me" />
                </div>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="text-brown" variant="gradient" fullWidth onClick={() => { handleSignIn(); handleOpen(); }}>
                  Sign In
                </Button>
                <Typography variant="small" className="mt-6 flex justify-center">
                  Don&apos;t have an account?
                  <Typography
                    as="a"
                    href="#signup"
                    variant="small"
                    color="blue-gray"
                    className="ml-1 font-bold"
                    onClick={handleSignupOpen}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </CardFooter>
            </Card>
        </Dialog>

        {/* sign up form */}
        <Dialog size="xs" open={signupOpen} handler={handleSignupOpen} className="shadow-none">
            <Card className="w-full">
              <CardHeader variant="gradient" color="gray" className="mb-4 grid h-28 place-items-center">
                <Typography className="text-brown" variant="h3">
                  Sign Up
                </Typography>
              </CardHeader>
              <CardBody className="flex flex-col gap-4">
                <Input label="First Name" size="lg" value={lastName} onChange={(e) => setLastName(e.target.value)}/> 
                <Input label="Last Name" size="lg" value={firstName} onChange={(e) => setFistName(e.target.value)}/>
                <Input label="Email" size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Input label="Password" size="lg" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
              </CardBody>
              <CardFooter className="pt-0">
                <Button className="text-brown" variant="gradient" fullWidth onClick={() => { handleSignUp(); handleSignupOpen(); handleOpen();}}>
                  Sign Up
                </Button>
              </CardFooter>
            </Card>
        </Dialog>

        {/* book info form */}

 
      </div>
    </>
  );
};