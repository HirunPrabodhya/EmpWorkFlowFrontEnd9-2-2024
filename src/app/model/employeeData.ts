export interface IEmpWF {
    Date: number
    TotalEarning: number
    TotalPiecerate: number
    TotalDailypay: number
    Effiency: number
    Sections: ISection[]
  }
  
  export interface ISection {
    InDate: number
    InTime: string
    OutTime: string
    OutDate: number
    Shift: string
    Section: string
    BasicSalary: number
    Incentive: number
    OT: number
    activities: IActivity[]
  }
  
  export interface IActivity {
    activity: string
    ophp: string
  }
  