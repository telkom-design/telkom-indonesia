import { ThemeProvider } from "@emotion/react";
import { createTokens } from "@legion-ui/core";

const TokensTCI = createTokens({
  apiUrl: "https://api.github.com/repos/telkom-design/theme/contents/tci.json",
  apiHeaders: { Accept: "application/vnd.github.v3.raw" },
  tokensName: "tciTokens",
});

const themeTCI = {
  name: "Pijar",
  tokens: TokensTCI,
};

export const LegionProvider = (
  { children }: { children: React.ReactNode },
) => {
  return <ThemeProvider theme={themeTCI}>{children}</ThemeProvider>;
};
