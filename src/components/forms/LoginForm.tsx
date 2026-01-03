"use client";

import TextInput from "./common/TextInput";

export default function LoginForm() {
  return (
    <form className="space-y-4 max-w-sm mx-auto">
      <TextInput label="Email" name="email" type="email" />
      <TextInput label="Password" name="password" type="password" />

      <button className="w-full bg-black text-white py-2 rounded-md">
        Login
      </button>
    </form>
  );
}
