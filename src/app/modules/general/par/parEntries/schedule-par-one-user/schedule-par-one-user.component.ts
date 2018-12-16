import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { ParconfigService } from '../../services/parconfig.service';
import { ParConfig } from '../../models/par-config.model';


import { ParAppraisorService } from '../../services/par-appraisor.service';
import { ParAppraisor } from '../../models/par-appraisor.model';
import { ScheduleParService } from '../../services/schedule-par.service';
import { ScheduleParContentPost } from '../../models/schedule-par-content-post.model';
import { ScheduleParAppraisorsPost } from '../../models/schedule-par-appraisors-post.model';
import { ScheduleParPost } from '../../models/schedule-par-post.model';

@Component({
  selector: 'app-schedule-par-one-user',
  templateUrl: './schedule-par-one-user.component.html',
  styleUrls: ['./schedule-par-one-user.component.css']
})
export class ScheduleParOneUserComponent implements OnInit {

  scheduleParObj: ScheduleParPost = new ScheduleParPost();
  parConfigArray: ParConfig[];
  parAppraisorArray: ParAppraisor[];

  empFormGroup: FormGroup = new FormGroup({
    parId: new FormControl(),
    empId: new FormControl(),
    parDate: new FormControl(),
    parTime: new FormControl(),

  });

  constructor(
    private parConfigService: ParconfigService,
    private parAppraisorService: ParAppraisorService,
    private scheduleParService: ScheduleParService
  ) { }

  getAppraisorsdata() {
    this.parAppraisorService.getParAppraisor().subscribe(data => {
      console.log(data);
      this.parAppraisorArray = data;
    })
  }

  getParConfigData() {
    this.parConfigService.getParConfig().subscribe(data => {
      this.parConfigArray = data;
    })
  }


  ngOnInit() {
    this.getAppraisorsdata();
    this.getParConfigData();
  }



  pushEmp() {
    this.scheduleParObj.parId = this.empFormGroup.value.parId;
    this.scheduleParObj.empId = this.empFormGroup.value.empId;
    this.scheduleParObj.scheduleDate = new Date(this.empFormGroup.value.parDate);
  }

  contentListPush() {
    this.scheduleParObj.scheduleParContentList = [];
    for (let parConfig of this.parConfigArray) {
      if (parConfig.isActive == true) {
        this.scheduleParObj.scheduleParContentList.push(new ScheduleParContentPost(parConfig.id))
      }
    }
  }

  appraisorsListPush() {
    this.scheduleParObj.scheduleParAppraisorsList = [];
    for (let parAppraisor of this.parAppraisorArray) {
      if (parAppraisor.isActive == true) {
        this.scheduleParObj.scheduleParAppraisorsList.push(new ScheduleParAppraisorsPost(parAppraisor.appraiserId))
      }
    }
  }

  schedulePar() {
    this.pushEmp();
    this.appraisorsListPush();
    this.contentListPush();
    console.log(this.scheduleParObj);
    this.scheduleParService.addSchedulePar(this.scheduleParObj).subscribe(
      data => {
      alert("Par Schedule Successdully")
    },
    err=>{
      alert("Some thing went wrong");
      console.log(err)
    })
  }
}
