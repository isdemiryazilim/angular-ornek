import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PersonelService } from '../../services/personel.service';
import { catchError, tap } from 'rxjs/operators';
import { DeptDTO, EmpDTO, dummyDeptList, dummyEmpList } from '../../models/personel';
import { DosyaService } from '../../services/dosya.service';

@Component({
  selector: 'app-personel',
  templateUrl: './personel.component.html',
  styleUrls: ['./personel.component.scss']
})
export class PersonelComponent implements OnInit {
  kayitForm: FormGroup;
  sorguForm: FormGroup;
  deptList: DeptDTO[] = [];
  personelListesi: MatTableDataSource<EmpDTO>;
  kolonListesi = ['empno', 'ename', 'dept', 'hiredate', 'delete'];
  seciliPersonel: EmpDTO = null;
  dosya: File;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private personelService: PersonelService,
    private dosyaService: DosyaService,
  ) { }

  ngOnInit(): void {
    this.createKayitForm();
    this.createSorguForm();
    this.departmanListesiGetir();
    this.personelListesi = new MatTableDataSource<EmpDTO>();
  }

  kaydet() {
    if (this.kayitForm.valid) {
      const personel = this.kayitForm.value as EmpDTO;
      this.personelService.personelKaydet(personel).pipe(tap((res) => {
        if (res.success) {
          this.snackBar.open('Kaydetme Başarılı : ' + res.data.ename, 'Kapat', {
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        } else {
          this.snackBar.open('Kaydetme Başarısız', 'Kapat', {
            horizontalPosition: 'right',
            verticalPosition: 'top'
          });
        }
      })).subscribe();
    } else {
      this.snackBar.open('Gerekli Alanları Doldurunuz', 'Kapat', {
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
  }

  sil(personel: EmpDTO) {
    this.personelService.personelSil(personel).pipe(tap((res) => {
      if (res.success) {
        this.snackBar.open('Silme Başarılı', 'Kapat', {
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
        this.sorgula();
      }
    })).subscribe();
  }

  sorgula() {
    if (this.sorguForm.valid) {
      console.log('S', this.sorguForm.value);
      const personel = this.sorguForm.value as EmpDTO;
      this.personelService.personelListesiGetir(personel.dept.deptno).pipe(tap((res) => {
        this.personelListesi = new MatTableDataSource<EmpDTO>(res.data);
      })).subscribe();
    } else {
      this.snackBar.open('Gerekli Alanları Doldurunuz', 'Kapat', {
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
  }

  sec(personel: EmpDTO) {
    this.reset();
    this.seciliPersonel = personel;
    this.seciliPersonel.hiredate = new Date(personel.hiredate);
    this.seciliPersonel.dept = this.deptList.find( dept => dept.deptno === personel.dept.deptno );
    this.kayitForm.patchValue(this.seciliPersonel);
  }

  departmanListesiGetir() {
    this.personelService.departmanListesiGetir().pipe(tap((res) => {
      if (res.success) {
        this.deptList = res.data.map((combo) => ({ deptno: combo.id, dname: combo.value } as DeptDTO));
      } else {
        this.snackBar.open('Başarız', 'Kapat', {
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    })).subscribe();
  }

  reset() {
    this.kayitForm.reset();
    this.seciliPersonel = null;
    this.dosya = null;
  }

  dosyaKaydet() {
    this.dosyaService.dosyaKaydet(this.dosya).subscribe();
  }

  dosyaIndir() {
    this.dosyaService.dosyaIndir('denemeh2.txt');
  }

  createKayitForm() {
    this.kayitForm = this.formBuilder.group({
      empno: [null],
      dept: ['', Validators.required],
      ename: ['', Validators.required],
      hiredate: ['', Validators.required],
      sal: ['', Validators.required],
      comm: [''],
    });
  }

  createSorguForm() {
    this.sorguForm = this.formBuilder.group({
      dept: ['', Validators.required],
    });
  }

  get fK() {
    return this.kayitForm.controls;
  }

  get fS() {
    return this.sorguForm.controls;
  }

}
