# Front-end (Next.js) Boilerplate


## Global State Management

👉 **React Context + React Query**

React Context utk state yg gak berkaitan dg API.  
React Query utk state yg berkaitan dg API.

FYI: Pake react-query, semua query/mutation bisa dibaca & di-_manage_ dr manapun.

Contoh:  
[https://github.com/afiiif/react-context-react-query](https://github.com/afiiif/react-context-react-query)  
[react-context-react-query.vercel.app](https://react-context-react-query.vercel.app/)


## CSS Styling

👉 **Tailwind CSS + Styled Components**

Tailwind CSS perlu, soalnya ini sangat memudahkan utk ngatur spacing, layouting, dan style2 lainnya.  
Styled Components dipake di shared components. Biar shared components punya style yg independen & gak bentrok className yg lain.


## File Naming

👉 **Prefer kebab-case**

Alasan:  
&dash; Konsistensi _case_ utk nama file.  
&dash; Biar _feel_ nya sama ketika pake komponen sendiri atau yg berasal dr library.
```
import { Select } from 'react-select';  // not like this: ... from 'ReactSelect';
import { MyComponent } from '../component/my-component';
```

👉 **Prefer ekstensi .js (daripada .jsx)**

Mayoritas examples di official repo Next.js kebanyakan pake ekstensi .js.


## File Structuring

#### Component Files Structuring

⬆️ Umum  
&nbsp;&nbsp; |--- **/commons**  : Komponen yg sangat umum  
&nbsp;&nbsp; |--- **/forms**    : Komponen yg sangat umum, tp spesifik utk form  
&nbsp;&nbsp; |--- **/layouts**  : Komponen yg punya lokasi spesifik, gak bisa ditaro di sembarang tempat  
&nbsp;&nbsp; |--- **/sections** : Komponen yang membentuk suatu area/block pada _views_  
&nbsp;&nbsp; |--- **/views**    : Komponen besar yang memuat beberapa _section_ untuk membentuk suatu page utuh  
⬇️ Spesifik

![alt file-structure-components.png](https://i.postimg.cc/85KSLMLZ/file-structure-components.png)

#### CSS Files Structuring

File CSS dipisah2 pake plugin `postcss-import`.

![alt file-structure-styles.png](https://i.postimg.cc/DyQpLFVF/file-structure-styles.png)


## Data Fetching

👉 **Axios**

Sesuai kesepakatan.  
Axios jg punya fitur timeout, yg mana built-in fetch gak punya fitur tsb.


## Form handling

👉 **React-hook-form**

Seperti project2 sebelumnya.


## Date & Time Library

👉 **date-fns**

Alasan: modular, populer, fiturnya relatif lebih lengkap dibanding temen2nya (kayaknya sih)  

[https://www.npmtrends.com/date-fns-vs-dayjs-vs-luxon-vs-moment](https://www.npmtrends.com/date-fns-vs-dayjs-vs-luxon-vs-moment)  
Ter-populer kedua setelah Moment.js


## Internationalization (i18n)

👉 **Pake fitur terbaru Next.js 10 + Library next-translate**

Alasan:  
&dash; Official & Up-to-date (Library lain gak memanfaatkan fitur terbaru Next.js)  
&dash; Konfigurasinya gampang  
&dash; Bagus buat SEO

Referensi:  
&dash; [https://nextjs.org/blog/next-10#internationalized-routing](https://nextjs.org/blog/next-10#internationalized-routing)  
&dash; [https://github.com/vinissimus/next-translate](https://github.com/vinissimus/next-translate)


## Error Management

👉 **Built-in React Error Boundary**


## Javascript Linting

👉 **Airbnb, react, jsx-a11y**

Ini sama kayak project2 sebelumnya lah..

#### Disabled rule from ESLint plugins above:

🔘 `'no-console': 'off'`

Kita butuh console.log buat debugging. Nah, ntar di production, fungsi console.log direplace dg fungsi kosongan.  
[https://github.com/takalabid/boilerplate-candidate-by-afif/blob/master/src/utils/console.js](https://github.com/takalabid/boilerplate-candidate-by-afif/blob/master/src/utils/console.js)

🔘 `'react/jsx-one-expression-per-line': 'off'`

Ini di-disable krna bikin ribet.  
Misal:
```
Lorem <i>ipsum</i> dolor sit amet
```
Mesti diganti dg:
```
Lorem
{' '}
<i>ipsum</i>
{' '}
dolor sit amet
```

🔘 `'react/jsx-filename-extension': 'off'`

Ini di-disable krna kita pake **kebab-case-filename.js**

🔘 `'react/jsx-props-no-spreading': 'off'`

Kadang butuh props spreading di komponen.

🔘 `'react/no-unescaped-entities': 'off'`

Rule ini di-disable krna bikin ribet. Gak ada potensi error jg di sini.

🔘 `'jsx-a11y/anchor-is-valid': 'off'`

Di Next.js, anchor tag pasti bakal invalid, soalnya href itu dipasang di `<Link href="..."><a>Some Text</a></Link>`, jadi rule tsb wajib di-disable.

🔘 `'jsx-a11y/label-has-associated-control': 'off'`

Ini susah diterapkan di beberapa case.

🔘 `'react/require-default-props': 'off'`

Pake default parameters kayak di fungsi2 biasa.  
[https://stackoverflow.com/questions/47774695/react-functional-component-default-props-vs-default-parameters](https://stackoverflow.com/questions/47774695/react-functional-component-default-props-vs-default-parameters)  
💡 _"defaultProps on functional components will eventually be deprecated"_  
[https://twitter.com/dan_abramov/status/1133878326358171650](https://twitter.com/dan_abramov/status/1133878326358171650)

🔘 `'react/forbid-prop-types': 'off'`

Biar bisa sekedar pake PropTypes.object.

🔘 `'import/prefer-default-export': 'off'`

Biar gak wajib export default.


## End of Line

👉 LF

Biar standar, gak ada perbedaan antara pengguna Mac, Linux, & Windows.


## Environment Variable

Untuk development pake **.env.local** ya, jangan pake **.env**.  
Ikutin sesuai official websitenya Next.js, [https://nextjs.org/docs/basic-features/environment-variables](https://nextjs.org/docs/basic-features/environment-variables)  

Penamaan environment variable ikutin official website:  
Kalo valuenya mau diekspos ke browser, gunakan `NEXT_PUBLIC_xxx`.  
Kalo valuenya gak mau dieskpos ke browser, baru gak perlu prefix `NEXT_PUBLIC_`.

---

## Notes

Ketika jalanin `npm run build` bakal dapet warning:  
_You have opted-out of Automatic Static Optimization due to `getInitialProps` in `pages/_app`. This does not opt-out pages with `getStaticProps`_  
Warning tsb karena ada `getInitialProps` di `pages/_app`. Warning tsb akan ilang kalo `getInitialProps` dihapus.

Kenapa ada `getInitialProps` di `pages/_app`?  
Ini cuma dipake kalo aplikasi yg kita develop punya fitur login.  
Kita ngambil auth-nya (decoded JWT) scr server-side. Tujuannya biar _user-experience_-nya lebih bagus.
