// import React from 'react';

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       'SignInEmail': '',
//       'SignInPassword': '',
//     };
//   };

//   EmailChange = (event) => {
//     this.setState({'SignInEmail': event.target.value})
//   };

//   PasswordChange = (event) => {
//     this.setState({'SignInPassword': event.target.value})
//   };

//   SignInSubmit = () => {
//     fetch('https://sheltered-ocean-88097.herokuapp.com/signin', {
//        'method': 'post',
//        'headers': {'Content-Type': 'application/json'},
//        'body': JSON.stringify({
//          'email': this.state.SignInEmail,
//          'password': this.state.SignInPassword
//        })
//      })
//      .then(response => response.json())
//      .then(data => {
//        if (typeof data != "string") {
//          this.props.LoadUser(data);
//          this.props.RouteChange('home')
//        };
//      })
//   };

// 	render() {
//     const {RouteChange} = this.props;
//     return (
//       <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
//         <main className="pa4 black-80">
//           <div className="measure">
//             <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
//               <legend className="f1 fw6 ph0 mh0">Sign In</legend>
//               <div className="mt3">
//                 <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
//                 <input 
//                   className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
//                   type="email" 
//                   name="email-address"  
//                   id="email-address"
//                   onChange={this.EmailChange}
//                 />
//               </div>
//               <div className="mv3">
//                 <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
//                 <input 
//                   className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
//                   type="password" 
//                   name="password"  
//                   id="password"
//                   onChange={this.PasswordChange}
//                 />
//               </div>
//             </fieldset>
//             <div className="">
//               <input 
//                 className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
//                 type="submit" 
//                 value="Sign In"
//                 onClick={this.SignInSubmit}
//               />
//             </div>
//             <div className="lh-copy mt3">
//               <p className="f6 link dim black db pointer" onClick={() => RouteChange('register')}><b>Register</b></p>
//             </div>
//           </div>
//         </main>
//       </article>
//   	);
//   };
// };

// export default SignIn;

import React, {useState} from 'react';

function SignIn(props) {

  const [SignInEmail, setSignInEmail] = useState('')
  const [SignInPassword, setSignInPassword] = useState('')

  const EmailChange = (event) => {
    setSignInEmail(event.target.value)
  };

  const PasswordChange = (event) => {
    setSignInPassword(event.target.value)
  };
 
  const SignInSubmit = () => {
    fetch('https://sheltered-ocean-88097.herokuapp.com/signin', {
       'method': 'post',
       'headers': {'Content-Type': 'application/json'},
       'body': JSON.stringify({
         'email': SignInEmail,
         'password': SignInPassword
       })
     })
     .then(response => response.json())
     .then(data => {
       if (typeof data != "string") {
         props.LoadUser(data);
         props.RouteChange('home')
       };
     })
  };

  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input 
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="email" 
                name="email-address"  
                id="email-address"
                onChange={EmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input 
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                type="password" 
                name="password"  
                id="password"
                onChange={PasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Sign In"
              onClick={SignInSubmit}
            />
          </div>
          <div className="lh-copy mt3">
            <p className="f6 link dim black db pointer" onClick={() => RouteChange('register')}><b>Register</b></p>
          </div>
        </div>
      </main>
    </article>
  );
};

export default SignIn;