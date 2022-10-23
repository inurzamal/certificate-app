// import { Certification } from "./certification";

// export class Contact {
//     cid:number=0;
//     name:string='';
//     certifications: Certification = new Certification();

//     constructor(){ }
// }

// export class Certification {

//     idx: number=0;
//     cname:string='';
//     cstatus:string='';

//     constructor(){ }
// }


export interface Certification {
    idx: number
    cname:string
    cstatus:string
}

export interface Contact {
    cid:number
    name:string
    certifications: Certification[]
}
