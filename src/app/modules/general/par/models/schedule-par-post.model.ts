import { ScheduleParContentPost } from "./schedule-par-content-post.model";
import { ScheduleParAppraisorsPost } from "./schedule-par-appraisors-post.model";

export class ScheduleParPost{
    parId: number;
    empId: string;
    scheduleDate: Date=new Date();
    scheduleParAppraisorsList:ScheduleParAppraisorsPost[]=[];
    scheduleParContentList:ScheduleParContentPost[]=[];
}
