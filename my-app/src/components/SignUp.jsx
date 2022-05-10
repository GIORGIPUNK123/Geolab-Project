// import { useState } from 'react';
// import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
// import { auth } from '../../firebase-config';

// const SignUp = () => {
//   const [registerEmail, setRegisterEmail] = useState('');
//   const [registerPassword, setRegisterPassword] = useState('');
//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');
//   const [currentUser, setCurrentUser] = useState();

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       setCurrentUser(user.user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   const logOut = async () => {
//     await signOut(auth);
//   };

//   return (
//     <>
//       <div className='registration'>
//         <div className='registration-box'>
//           <h2 className='register-main-text'>Sign Up</h2>
//           <div className='registration-part'>
//             <div className='main-registration'>
//               <input
//                 className='registration-input'
//                 type='mail'
//                 name=''
//                 id=''
//                 placeholder='Email'
//                 onChange={(event) => {
//                   setRegisterEmail(event.target.value);
//                 }}
//               />
//               <input
//                 className='registration-input'
//                 type='password'
//                 name=''
//                 id=''
//                 placeholder='Password'
//                 onChange={(event) => {
//                   setRegisterPassword(event.target.value);
//                 }}
//               />
//               <button
//                 onClick={() => {
//                   register();
//                 }}
//                 className='registration-button'
//               >
//                 Sign Up
//               </button>
//             </div>
//             <h1>Logged in as {currentUser?.email}</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;
