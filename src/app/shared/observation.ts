export class Observation {
    ObservationId : number;
    Observation : string;
    DoctorNotes : string;   
    IsActive : boolean;
    DoctorId : number;    
    PatientId : number;
    ObservationDate : Date = new Date();
}