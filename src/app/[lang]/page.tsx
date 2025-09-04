import { getDictionary } from "../i18n/dictionary";

export default async function Home({params}: {params: Promise<{ lang: "en" | "es" }>}) {

  const lang = (await params).lang;
  const t = await (await getDictionary(lang)).homePage;
 
  return (
    <div className="font-sans flex flex-row gap-2 bg-white min-h-screen p-4 pb-20 gap-16 sm:p-4">
      <button>{t.title}</button>
      <button >Login</button>
      <button>Register</button>
    </div>
  );
}
