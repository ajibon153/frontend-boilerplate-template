import useTranslation from 'next-translate/useTranslation';
import Layout from '../../components/layouts/layout';

export default function ExampleI18nPage() {
  const { t, lang } = useTranslation();

  return (
    <Layout title="i18n Example">
      <main className="p-6">

        <h1>i18n Example</h1>

        <div className="py-6">Lang: {lang}</div>
        <h3>{t('common:title')}</h3>
        <p>{t('common:variable-example', { name: 'Takalab' })}</p>
        {/* <p className="pt-3 pb-4 italic">
          {t('home:paragraph-1')} 👈 Will not work because out of scope
        </p> */}

      </main>
    </Layout>
  );
}
