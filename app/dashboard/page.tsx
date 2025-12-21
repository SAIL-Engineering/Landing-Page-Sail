import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = constructMetadata({
  title: "Dashboard",
  description: "Your SAIL account.",
  canonical: "/dashboard",
});

export default async function Dashboard() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/signin");
  }

  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();
    await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <main className="bg-white pt-28">
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <p className="sail-kicker">Account</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-slate-900">
          Welcome to <span className="sail-wordmark">SAIL</span>
        </h1>
        <p className="mt-4 text-slate-600">
          Signed in as <span className="font-mono">{user.email}</span>.
        </p>
        <div className="mt-8">
          <form action={handleSignOut}>
            <Button variant="sail" type="submit">
              Sign out
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
