import { Helmet } from 'react-helmet-async';

const MySEO = ({detail}) => {
    return (
        <Helmet>
            <title>{detail.config_sitename}</title>
            <meta name="description" content={detail.config_metades} />
            <meta name="keywords" content={detail.config_metakey} />
            <meta property="og:title" content={detail.config_sitetitle} />
            <meta property="og:description" content={detail.config_metades} />
        </Helmet>
    )

}
export default MySEO;