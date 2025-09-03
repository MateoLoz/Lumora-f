import { Button } from "@/components/ui/button";

type createAccountLinkProps = {
  text: string;
};

export const CreateAccountLink = ({ text }: createAccountLinkProps) => {
  return (
    <div className="text-center">
      <Button
        variant="link"
        size="sm"
        className="text-muted-foreground hover:text-foreground"
      >
        {text}
      </Button>
    </div>
  );
};
