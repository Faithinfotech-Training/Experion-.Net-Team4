export class Prescription {
    PrescriptionId : number=0;
    PrescriptionNumber : number=0;
    PrescriptionDate : Date = new Date();
    PatientId : number;
    PatientName : string;
    DoctorId : number;
    DoctorName : string='';
}