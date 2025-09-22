import { getDictionary } from "@/app/i18n/dictionary";
import { RegisterForm } from "@/components/auth/RegisterForm";

export default async function Register({params}: {
  params: Promise<{ lang: "en" | "es"| "br" | "pt" | "fr" | "de" | "it" }>;
}) {
  const lang = (await params).lang;
  const t  = (await getDictionary(lang)).registerPage;

  return (
    <div
      style={{ backgroundImage: "var(--gradient-mesh)" }}
      className="w-full justify-center h-screen"
    >
      <RegisterForm lang={t} />
    </div>
  );
}
