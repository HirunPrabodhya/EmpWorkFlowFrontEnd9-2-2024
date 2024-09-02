import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IEmpWF, ISection } from './model/employeeData';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  
  title = 'Practical-2';
  activityRowSpan = 0;
  totalActivities:number = 0;
  sectionActivityCounts: number[] = [];
  activitySpan:number[] = [];
  employeesData:IEmpWF[] = [
    {
      Date:1,
      TotalEarning:1312.50,
      TotalPiecerate:1067.95,
      TotalDailypay:1312.50,
      Effiency:-244.56,
      Sections:[
          {
            InDate:1,
            InTime:"08:00:00",
            OutTime:"10:00:00",
            OutDate:1,
            Shift:'Normal',
            Section:'Assemble Dis Assemble & Packing',
            BasicSalary:425.00,
            Incentive:100.00,
            OT:0.00,
            activities:[
              {
                activity:'KSR 019 - 1.00',
                ophp:'0:2'
               
              },

              {
                activity:'KSR 018 - 1.00',
                ophp:'0:4'
                
              }
            ]
          },
          {
            InDate:1,
            InTime:"10:00:00",
            OutTime:"13:00:00",
            OutDate:1,
            Shift:'Normal',
            Section:'Cleaning & Bush Fixing',
            BasicSalary:425.00,
            Incentive:100.00,
            OT:0.00,
            activities:[
              {
                activity:'KSR 030 - 1.00',
                ophp:'0:2'
               
              },

              {
                activity:'KSR 031 - 1.00',
                ophp:'0:4'
                
              }
            ]
          }
      ]
    },
    {
      Date:3,
      TotalEarning:1881.61,
      TotalPiecerate:1823.28,
      TotalDailypay:1312.50,
      Effiency:510.78,
      Sections:[
          {
            InDate:3,
            InTime:"08:00:00",
            OutDate:3,
            OutTime:"09:30:00",
            Shift:'Normal',
            Section:'Assemble Dis Assemble & Packing',
            BasicSalary:199.22,
            Incentive:46.88,
            OT:0.00,
            activities:[
              {
                activity:'KSD 003 - 1.00',
                ophp:'0:2'
               
              }
            ]
          },
          {
            InDate:3,
            InTime:"09:30:00",
            OutDate:3,
            OutTime:"17:00:00",
            Shift:'Normal',
            Section:'Cleaning & Bush Fixing',
            BasicSalary:863.28,
            Incentive:203.13,
            OT:0.00,
            activities:[
              {
                activity:'KSR 010 - 1.00',
                ophp:'0:2'
               
              }
            ]
          }
      ]
    },
    {
      Date:4,
      TotalEarning:1530.00,
      TotalPiecerate:637.00,
      TotalDailypay:1530.00,
      Effiency:-893.00,
      Sections:[
        {
            InDate:4,
            InTime:"08:00:00",
            OutDate:4,
            OutTime:"18:00",
            Shift:'Normal',
            Section:'CLeaning & Bush Fixing',
            BasicSalary:1062.50,
            Incentive:250.00,
            OT:217.50,
            activities:[
              {
                activity:'KSD 001 - 5.00',
                ophp:'0:2'
               
              },
              {
                activity:'KSD 002 - 10.00',
                ophp:'0:2'
               
              },
              {
                activity:'KSD 003 - 15.00',
                ophp:'0:2'
               
              },
              {
                activity:'KSD 004 - 18.00',
                ophp:'0:2'
               
              }
            ]
        }
      ]
    }
   
  ]
  ngOnInit(): void {
    
      
  }
  getTotalActivities(sections: any[]): number {
    let value = sections.reduce((total, section) => total + section.activities.length, 0);
    return value;
  }
 
}
