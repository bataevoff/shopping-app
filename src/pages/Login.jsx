import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return <div className='flex justify-center'>
      <div className='flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[60%] rounded-lg'>
        <text className='text-2xl'>Login</text>
        <div className='mt-3'>
          <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                 type="username"
                 placeholder='username'/>
        </div>
        <div className='mt-3'>
          <input className='border-[2px] rounded-lg w-[100%] p-2 outline-[#8a4af3] focus:border-[#8a4af3] ease-linear duration-200'
                 type="password"
                 placeholder='password'/>
        </div>
        <input type='button' value='Login' className='btn mt-7 hover:scale-[1.02]'/>
      </div>
    </div>
  }
}
