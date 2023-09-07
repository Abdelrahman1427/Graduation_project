import Services  from './Services';
import { useTranslation } from 'react-i18next';

const ServicesMain = () => {
  const { t } = useTranslation();
  return (
    <section className="ServicesSection" id='Services'>
    <div className="titleServices d-flex">
    {t('serv_title')}
    </div>

    <div className="ServiesParent ">
    <Services/>
    </div>
    </section>
  )
}

export default ServicesMain;
