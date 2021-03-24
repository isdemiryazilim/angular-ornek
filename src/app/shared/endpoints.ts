import { environment } from '../../environments/environment'

export const ENDPOINTS = {
    GENEL : {
        DEPT_LIST: `${environment.API_URL}/egitim/genel/dept-liste`
    },
    PERSONEL_YONETIMI: {
        PERSONEL_LISTE: `${environment.API_URL}/egitim/personel-yonetimi/personel-liste`,
        PERSONEL_KAYDET: `${environment.API_URL}/egitim/personel-yonetimi/personel-kaydet`,
        PERSONEL_SIL: `${environment.API_URL}/egitim/personel-yonetimi/personel-sil`,
    },
    DOSYA: {
        DOSYA_KAYDET: `${environment.API_URL}/egitim/dosya-islemleri/dosya-kaydet`,
        DOSYA_GETIR: `${environment.API_URL}/egitim/dosya-islemleri/dosya-getir`,
    },
}