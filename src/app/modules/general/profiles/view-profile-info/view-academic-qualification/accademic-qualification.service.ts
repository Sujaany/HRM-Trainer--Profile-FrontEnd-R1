import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AcademicQualification } from './academic-qualification';
import { isThisISOWeek } from 'date-fns';

const httpOption = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AccademicQualificationService {
  academic:AcademicQualification[]
  constructor(private httpObj:HttpClient) { }
  private AcademicUrl = "http://localhost:8080/hrm_system/academicQualification";

  getAcademicQualification(){
    return this.httpObj.get<AcademicQualification[]>(this.AcademicUrl);
  }
  getAcademicQualificationByUserId(uid){
    return this.httpObj.get<AcademicQualification[]>(this.AcademicUrl+"/"+uid);
  }
  updateAcademicQualification(data){
    return this.httpObj.put<AcademicQualification>(this.AcademicUrl+"/edit/"+data.id,data);
  }
  deleteAcademicQualificationa(data){
    return this.httpObj.delete<AcademicQualification>(this.AcademicUrl+"/"+data.id)
  }
}
