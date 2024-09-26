"use client";

import Link from "next/link";

export default function CustomerPage(): JSX.Element {
  return (
    <div>
      <h1>Sign Up</h1>
      <div>
        <label htmlFor="id">Id</label>
        <input placeholder="id" id="id" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input placeholder="password" id="password" />
      </div>
      <div>
        <label htmlFor="password-comfirm">Password Comfirm</label>
        <input placeholder="password-comfirm" id="password-comfirm" />
      </div>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
      <div>
        <Link href="/login">Sign Up</Link>
      </div>
      <div>
        <Link href="/">Go to Main Page</Link>
      </div>
      <div>
        <Link href="/login">Back to Login</Link>
      </div>
    </div>
  );
}
