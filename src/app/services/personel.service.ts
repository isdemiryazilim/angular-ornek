import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../shared/endpoints';
import { Observable } from 'rxjs';
import { EmpDTO, ResponseDTO } from '../models/personel';

@Injectable({
  providedIn: 'root'
})
export class PersonelService {

  constructor(private http: HttpClient) { }

  departmanListesiGetir(): Observable<ResponseDTO<EmpDTO[]>> {
    return this.http.post<ResponseDTO<EmpDTO[]>>(ENDPOINTS.GENEL.DEPT_LIST, {});
  }

  personelListesiGetir(deptNo) {

  }

  personelKaydet(personel: EmpDTO) {

  }

  personelSil(personel: EmpDTO) {

  }
}
