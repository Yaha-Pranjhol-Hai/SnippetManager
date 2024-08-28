import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav className="bg-zinc-50 dark:bg-zinc-950 p-3 flex justify-between border-b shadow-md sticky top-0 z-50">
      <div className="text-lg font-bold">Twitter-Threads</div>
      <div className="flex items-center gap-4">
        <SignedOut>
          <Button variant="outline" onClick={() => router.push("/sign-in")}>
            Sign In
          </Button>
          <Button variant="outline" onClick={() => router.push("/sign-up")}>
            Create Account
          </Button>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
