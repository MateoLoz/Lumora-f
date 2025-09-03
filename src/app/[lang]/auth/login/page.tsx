import { getDictionary } from "@/app/i18n/dictionary";
import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: "en" | "es" | "br" | "pt" | "fr" | "de" | "it" }>;
}) {
  const lang = (await params).lang;
  const t  = (await getDictionary(lang)).loginPage;
  return (
    <div
      style={{ backgroundImage: "var(--gradient-mesh)" }}
      className="w-full justify-center h-screen"
    >
      <LoginForm lang={t} />
    </div>
  );
}
