import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { PersonelService } from '../../services/personel.service';
import { tap } from 'rxjs/operators';
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
      console.log('S', this.kayitForm.value);
    } else {
      this.snackBar.open('Gerekli Alanları Doldurunuz', 'Kapat', {
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
    }
  }

  sil(personel: EmpDTO){
    console.log('sil', personel);
  }

  sorgula() {
    if (this.sorguForm.valid) {
      console.log('S', this.sorguForm.value);
      this.personelListesi = new MatTableDataSource<EmpDTO>(dummyEmpList);
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
    this.kayitForm.patchValue(personel);
  }

  departmanListesiGetir() {
    this.deptList = dummyDeptList;
  }

  reset() {
    this.kayitForm.reset();
    this.seciliPersonel = null;
    this.dosya = null;
  }

  createKayitForm() {
    this.kayitForm = this.formBuilder.group({
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
