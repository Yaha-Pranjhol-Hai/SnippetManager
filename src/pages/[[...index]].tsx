import NavBar from "@/components/NavBar";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
const { user } = useUser();

useEffect(() => {
  if(user) {
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.primaryEmailAddress,
        firstName: user.firstName,
        lastName: user.lastName,
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('User added/exists in database:', data);
    })
    .catch(error => {
      console.error('Error adding user to the database:', error);
    })
  }
}, [user])

  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <main className="flex flex-col items-center justify-center p-24">
        <p>Welcome, {user ? user.firstName : 'Guest'}! to the home page!</p>
      </main>
    </div>
  );
}
