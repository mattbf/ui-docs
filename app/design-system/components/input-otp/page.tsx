import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/InputOTP";
import ComponentDocsPageTemplate from "@/app/design-system/components/ComponentDocsPageTemplate";
import { Card } from "@/components/ui/Card";
import { Text } from "@/components/ui/Text";

const InputPage = () => (
  <ComponentDocsPageTemplate
    title="Input OTP"
    githubLink={"https://github.com/org/repo-name/blob/develop/src/components/ui/InputOTP.tsx"}
    path="/input-otp"
  >
    <div className="py-12 flex flex-col gap-4 w-full items-stretch">
      <Text variant="headline" size="2xl" as="h2">
        OTP Input
      </Text>
      <Card className="w-full p-8 bg-white">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </Card>
    </div>
  </ComponentDocsPageTemplate>
);

export default InputPage;
