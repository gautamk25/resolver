import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resolver-data',
  templateUrl: './resolver-data.component.html',
  styleUrls: ['./resolver-data.component.css']
})
export class ResolverDataComponent implements OnInit {

  userList:any

  constructor(private service:ServicesService, private route:ActivatedRoute) {
    this.userList = this.route.snapshot.data['userList'];
    console.log(this.userList);
  }

  ngOnInit(): void {
    this.service.printWord().subscribe((res:any) => {
      console.log(res);
    })
  }

}
