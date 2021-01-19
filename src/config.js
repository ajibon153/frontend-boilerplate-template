import getConfig from 'next/config';

/*
NOTE:

This config exist because of different behavior when reading environment
variables in Vercel server and the server running with Docker (Helm).
https://github.com/vercel/next.js/discussions/13427

By default, Next.js can read environment variables directly using process.env.[SOME_KEY].
In Docker, we need to setup Express server and read environment variables using next-dotenv.
In contrast, Vercel server return empty object when using getConfig();

To resolve this issue, you need to read environment variables from this config file.
*/

const config = getConfig();

const isConfigHasValue = Boolean(config?.publicRuntimeConfig?.NEXT_PUBLIC_API_HOST);

const configAlternative = {
  publicRuntimeConfig: {
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_JWT_EXPIRATION_IN_HOURS: process.env.NEXT_PUBLIC_JWT_EXPIRATION_IN_HOURS,
    NEXT_PUBLIC_ENABLE_CONSOLE_LOG: process.env.NEXT_PUBLIC_ENABLE_CONSOLE_LOG,
    NEXT_PUBLIC_ENABLE_CONSOLE_LOG_KEY: process.env.NEXT_PUBLIC_ENABLE_CONSOLE_LOG_KEY,
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
  serverRuntimeConfig: {
    NEXT_PUBLIC_API_HOST: process.env.NEXT_PUBLIC_API_HOST,
    NEXT_PUBLIC_JWT_EXPIRATION_IN_HOURS: process.env.NEXT_PUBLIC_JWT_EXPIRATION_IN_HOURS,
    NEXT_PUBLIC_ENABLE_CONSOLE_LOG: process.env.NEXT_PUBLIC_ENABLE_CONSOLE_LOG,
    NEXT_PUBLIC_ENABLE_CONSOLE_LOG_KEY: process.env.NEXT_PUBLIC_ENABLE_CONSOLE_LOG_KEY,
    NEXT_PUBLIC_GOOGLE_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
};

export const publicRuntimeConfig = isConfigHasValue
  ? config.publicRuntimeConfig
  : configAlternative.publicRuntimeConfig;

export const serverRuntimeConfig = isConfigHasValue
  ? config?.serverRuntimeConfig
  : configAlternative.serverRuntimeConfig;
