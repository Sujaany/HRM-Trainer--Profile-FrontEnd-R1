import { ScoreParAppraiserPost } from "./score-par-appraiser-post";

export class ReportParAppraiserPost {
    reportId:string;
    parId: number;
    appraisedById: string;
    appraisedDate: Date;
    scoreParAppraiserList: ScoreParAppraiserPost[];
}
