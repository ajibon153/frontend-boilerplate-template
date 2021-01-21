# Front-end (Next.js) Boilerplate

[Next.js](https://nextjs.org/) boilerplate based on the [official repo's examples](https://github.com/vercel/next.js/tree/canary/examples), best practices, and popular libraries in the developer community.


## Getting Started

1. Clone this repo.
2. Run `npm install` to install dependencies.
3. Configure environment variables.
   - Create `.env.local` file (or `.env.development`, or `.env.production`, see [official docs](https://nextjs.org/docs/basic-features/environment-variables)).
   - Configure `env.js` file.
4. Run `npm run dev`.


## Scripts

- `npm run dev` - Run development mode
- `npm run build` - Build the application for production
- `npm run start` - Start a Next.js production server (require `npm run build` first)
- `npm run start:express` - Start Next.js with Express server, required when using docker (because it can't get the environment variables when start using regular Next.js server 🤷)
- `npm run lint` - Run [ESLint](https://eslint.org/)
- `npm run lint:fix` - Fix codes from ESLint errors
- `npm run test` - Run [jest](https://jestjs.io/) and collect test coverage
- `npm run test:ci` - Run [jest](https://jestjs.io/) in a CI environment


## File Structure

```raw
.
├── 📂 locales/                JSON files for internationalization (i18n)
├── 📂 public/                 Public files (e.g. favicon)
├── 📂 src/
│   ├── 📂 __test__/           Test suite using Jest & React Testing Library
│   ├── 📂 api/                API-related functions
│   ├── ⚛️ components/
│   │   ├── ⚛️ commons/        Common components
│   │   ├── ⚛️ forms/          Common components which is used specifically for user input
│   │   ├── ⚛️ layouts/        Components which has specific location in a page and cannot just be placed anywhere (e.g. header, sidebar, footer)
│   │   ├── ⚛️ sections/       Components which create a block/section of a page
│   │   └── ⚛️ views/          Biggest components, containing section components
│   ├── 📂 config/
│   ├── ⚛️ containers/         Components which has no UI, only for functionality (e.g. context-provider)
│   ├── ⚛️ hooks/              Custom hooks
│   ├── ⚛️ pages/              Next.js page components
│   ├── 📂 styles/
│   │   ├── 📂 components/     CSS files for components (e.g. button, table)
│   │   ├── 📂 vendors/        CSS files for modifying external component library's style (e.g. react-select, react-modal)
│   │   ├── base.css            Base styles
│   │   ├── index.css           Contains @import statements to merge all CSS files
│   │   └── utilities.css       Contains utility classes
│   └── 📂 utils/              Utility functions
├── .babelrc                    Babel configuration, used for Jest
├── .editorconfig               EditorConfig file
├── .env.local                  Put environment variables here
├── .eslintignore
├── .eslintrc.js                ESLint configuration
├── .gitattributes
├── .gitignore
├── env.js                      Specify which environment variables are server-only and which should be exposed to the browser
├── i18n.json                   i18n configuration, to specify namespaces
├── jest.config.js              Jest configuration
├── next.config.js              Next.js configuration
├── package.json
├── postcss.config.js           PostCSS configuration
├── server.js                   Express.js server, used for docker only
└── tailwind.config.js          Tailwind configuration

Notes:
📂: Folder
⚛️: React-related folder
```


## File & Folder Naming

- In general, **kebab-case** is prefered for folder & file naming.
- Use **kebab-case** and **.js** extension for react component file naming.  
  You can create component file directly like `some-component.js`, or create a folder `some-component/index.js`, as long as it is consistent.
- Use **kebab-case** and **.spec.js** for test file naming.


## Tools

- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Global State Management**: [<sup id="1">[1]</sup>](#note-1)
  - API-related state: [React Query](https://react-query.tanstack.com/) [<sup id="2">[2]</sup>](#note-2)
  - Form-related state: [React Hook Form](https://react-hook-form.com/) [<sup id="3">[3]</sup>](#note-3)
  - Anything not related to API & form:  
    _Does it complex & frequent-update?_
    - _No_ 👉 Use built-in react context (combined with useState)
    - _Yes_ 👉 Are you sure? What kind of state which is not related to data-fetching or forms but complex & frequent-update? Explain this before using additional state-management library.
- **Date & Time Utility**: [date-fns](https://date-fns.org/)
- **Data Fetching**: [axios](https://github.com/axios/axios)
- **className Utility**: [clsx](https://www.npmjs.com/package/clsx)
- **Internationalization (i18n)**: [built-in Next.js internationalized routing](https://nextjs.org/blog/next-10#internationalized-routing) + [next-translate](https://github.com/vinissimus/next-translate)
- **Fallback UI**: use built-in React [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
- **Linting**:
  - Ecma Version: 12 (es2021) 
  - Plugin: Airbnb, react, jsx-a11y
- **Testing**: [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

Notes:  
[<sup id="note-1">[1]</sup>](#1) <span id="1"></span>Global state means the state which can be **accessed & updated from anywhere** in the component tree (inside a provider) without needing to pass down the props.  
[<sup id="note-2">[2]</sup>](#2) <span id="2"></span>Use [QueryClientProvider](https://react-query.tanstack.com/reference/QueryClientProvider) & [useQueryClient](https://react-query.tanstack.com/reference/useQueryClient).  
[<sup id="note-3">[3]</sup>](#3) <span id="3"></span>Use FormProvider & [useFormContext](https://react-hook-form.com/api#useFormContext).


## Naming Conventions

- Variable name:
  - Should be camelCase.
  - For boolean variable, use "is", "can", or "has" prefix.  
    Example: `isExpired`, `isDeleted`, `canEditSomething`, `hasSomething`.
- Function name:
  - Should be camelCase.
  - Should starts with verb 1, and don't abbreviate that verb.  
    ✅ Correct example: `createAccount`, `validateForm`  
    ❌ Incorrect example: `creatingAccount`, `vldtForm`
  - For event-handler function, you can use "on" or "handle" prefix.  
    Example: `onScroll` / `handleScroll`, `onSave` / `handleSave`
- React component:
  - Should be PascalCase.
  - Page component (components in `src/pages` folder) name should ends with Page.  
    Example: `HomePage`, `LoginPage`, `ProductDetailPage`.
- React Query hook:
  - Should use "query" or "mutation" prefix. Example:  
    ✅ Correct example:  
    ```javascript
    const queryProducts = useQuery();
    const queryProductById = useQuery();
    const queryUsers = useQuery();
    const mutationProduct = useMutation();
    const mutationUser = useMutation();
    ```
    ❌ Incorrect example:  
    ```javascript
    // Don't destructure since the destructured variables name will conflict
    // You will end up renaming many variables
    const {
      data: dataProduct, isLoading: isLoadingProduct, error: errorProduct, refetch: refetchProduct,
    } = useQuery();
    const {
      data: dataUser, isLoading: isLoadingUser, error: errorUser, refetch: refetchUser,
    } = useQuery();
    const {
      data: dataMutationUser, isLoading: isLoadingMutationUser, error: errorMutationUser, mutate: mutateUser,
    } = useMutation();
    ```
- Environment variable which needs to be exposed to the browser should use NEXT_PUBLIC_ prefix.  
  Example: `NEXT_PUBLIC_GOOGLE_API_KEY = abcdefghijk`.
