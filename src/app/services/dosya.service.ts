import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../shared/endpoints';

@Injectable({
  providedIn: 'root'
})
export class DosyaService {

  constructor(private http: HttpClient) { }

  dosyaKaydet(file: File) {
    const formData: FormData = new FormData();
    formData.append('upload', file, file.name);

    const url = `${ENDPOINTS.DOSYA.DOSYA_KAYDET}/${file.name}`;

    return this.http.post(url, formData);
  }

  dosyaIndir(filename: string) {
    const url = `${ENDPOINTS.DOSYA.DOSYA_GETIR}/${filename}`;
    this.http.get(url, { responseType: 'blob' }).subscribe((res: Blob) => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(res);
      a.download = filename;
      a.click();
    });
  }
}
