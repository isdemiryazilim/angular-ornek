import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../shared/endpoints';
import { Observable } from 'rxjs';
import { EmpDTO, ResponseDTO, ComboDTO } from '../models/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  departmanListesiGetir(): Observable<ResponseDTO<ComboDTO[]>> {
    return this.http.post<ResponseDTO<ComboDTO[]>>(ENDPOINTS.GENEL.DEPT_LIST, {});
  }

  personelListesiGetir(deptNo: number): Observable<ResponseDTO<EmpDTO[]>> {
    const url = `${ENDPOINTS.PERSONEL_YONETIMI.PERSONEL_LISTE}/${deptNo}`;
    return this.http.post<ResponseDTO<EmpDTO[]>>(url, {});
  }

  personelKaydet(personel: EmpDTO): Observable<ResponseDTO<EmpDTO>>{
    return this.http.post<ResponseDTO<EmpDTO>>(ENDPOINTS.PERSONEL_YONETIMI.PERSONEL_KAYDET, personel);
  }

  personelSil(personel: EmpDTO): Observable<ResponseDTO<any>>{
    return this.http.post<ResponseDTO<any>>(ENDPOINTS.PERSONEL_YONETIMI.PERSONEL_SIL, personel);
  }
}
