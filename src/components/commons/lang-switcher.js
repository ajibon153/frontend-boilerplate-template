import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';

export default function LangSwitcher() {
  const { route, locales, locale: currentLocale } = useRouter();
  return (
    <div className="flex items-center space-x-2.5">
      <div>Switch Language 👉</div>
      <ul className="flex space-x-1.5">
        {locales.map((locale) => (
          <li key={locale}>
            <Link href={route} locale={locale}>
              <a
                className={clsx(
                  'block py-1 px-2 border hover:border-blue-500 rounded',
                  currentLocale === locale && 'bg-blue-100',
                )}
              >
                {locale}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
