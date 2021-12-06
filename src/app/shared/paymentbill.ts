export class PaymentBill {
    //data fields
    BillId:number=0;
    BillNumber:number=0;
    BillDate:Date=new Date;
    LabTestFee:number=0;
    DoctorConsulationFee:number=0;
    NursingFee:number=0;
    Amount:number=0;
    IsActive :boolean;
    PatientId:number=0;


}