import { CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

type loginHeaderProps = {
  title: string;
  subtitle: string;
};

export const LoginHeader = ({ title, subtitle }: loginHeaderProps) => {
  return (
    <CardHeader className="space-y-1">
      <CardTitle className="text-2xl font-bold text-center">{title}</CardTitle>
      <CardDescription className="text-center">{subtitle}</CardDescription>
    </CardHeader>
  );
};
