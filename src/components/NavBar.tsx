import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, useAuth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  const router = useRouter();
  const { userId } = useAuth();

  return (
    <nav className="bg-zinc-50 dark:bg-zinc-950 p-3 flex justify-between border-b shadow-md sticky top-0 z-50">
      <div className="text-lg font-bold">Snippet Manager</div>
      <div className="flex items-center gap-4">
        {userId ? (
          <Link href="/my-notes">
            <Button variant={"outline"}>Access to the App</Button>
          </Link>
        )
      : (
        <SignedOut>
          <Link href="/sign-in">
          <Button variant="outline" onClick={() => router.push("/sign-in")}>
            Sign In
          </Button>
          </Link>
          <Link href="/sign-up">
          <Button variant="outline" onClick={() => router.push("/sign-up")}>
            Sign Up
          </Button>
          </Link>
        </SignedOut>
      )}
        <SignedIn >
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
