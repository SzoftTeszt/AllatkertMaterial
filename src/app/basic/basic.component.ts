import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Animal } from 'src/Animal';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent {
  dataSource?:MatTableDataSource<Animal>;
  displayedColumns=['id', 'nev', 'faj', 'gondozo'];

  @ViewChild('paginator') paginator!:MatPaginator;

  constructor(private base:BaseService){

      this.base.get().subscribe(
        (a)=>{
          this.dataSource= new MatTableDataSource(a as Animal[]);
          this.dataSource.paginator=this.paginator;
        }
      );
  }
}
