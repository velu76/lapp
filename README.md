# lapp
![GLA][logo]  
Leave Application in Meteor.

[logo]: https://github.com/velu76/lapp/tree/master/public/imgs/logo.png


## About Leave Application
>This is my attempt in using Meteor to create a leave application.
>The vision is to complete to a level this could be used as a mobile app.


## To-do(s)
1. Create the layout. **[DONE]**
2. Git integration with github **[DONE]**
3. Authentication
4. Calendar integration
5. Email agent
6. Supervisor Approvals
7. Web Administration



### File Structure Layout (_Beta_)
**_`client`_**

**_`server`_**

**_`both`_**  
  =>  **_`collections`_**  
  =>  **_`controllers`_**  
  =>  **_`permissions`_**  


## Design Details

The following section details out the design details of the application.

### Mongo Collections

Leave Application uses the following Mongo Collections.  

### Leaves  
This is the leave collection of the all the leaves taken by a particular employee.  

| **Row  Name** | **Describition**                                                                                       |
|---------------|--------------------------------------------------------------------------------------------------------|
| lnum          | Leave Number - Needed  for referencing.                                                                |
| dapp          | Date Applied - Date of this leave application was submitted.                                           |
| dfrom         | Date From - Start date of leave.                                                                       |
| dto           | Date To - End date of leave.                                                                           |
| type          | Type - Type of leave (Annual Leave, Medical Leave, Child Care Leave, etc).                             |
| fhd           | Full Half Day - Determines if full day or half day leave.                                              |
| days          | Days - Total days leave taken. This is saved in database instead of calculations for faster rendering. |
| status        | Status - Leave status as updated by Supervisors (Pending, Approved, Rejected, Appealing).              |
| reason        | Reason - Employee's reason for leave application.                                                      |
| remarks       | Remarks - Supervisor's  or HR's remarks.                                                               |
| appdate       | Approval Date - Supervisor's date of processing leave application.                                     |
| docs          | Documents - Employee's documents (Medical Certificate, Examination Slip, etc).                         |  
| empid         | Employee ID - For referencing requirements                                                             |  


### Employees  
This is the employee collection, details of the employees are stored in this.  

| **Row  Name** | **Describition**                           |
|---------------|--------------------------------------------|
| empnum        | Employee Number - Needed  for referencing. |
| fname         | First Name                                 |
| lname         | Last Name                                  |
| doe           | Date of Employment                         |
| position      | Position - Employee's position             |
| department    | Department - Employee's department         |
| uid           | User ID - Referencing to user collection   |


### LEntitles
This collection stores all the leave entitlements of each employee.  

| **Row Name** 	| **Description**                                                       	|
|--------------	|-----------------------------------------------------------------------	|
| empnum       	| Employee Number - For reference to Employee collection.               	|
| al           	| Annual Leave - Entitled as per employment contract.                   	|
| ml           	| Medical Leave - Entitled as per employment contract.                  	|
| ccl          	| Child Care Leave - Entitled as per employment contract.               	|
| sl           	| Study Leave / Exam Leave - Entitled as per employment contract.       	|
| oil          	| Off-In-Lieu - Entitled as per employment contract.                    	|
| mal          	| Maternity Leave (Females only) - Entitled as per employment contract. 	|
| others       	| Others - Entitled as per employment contract.                         	|
| ual          	| Utilised Annual Leave                                                 	|
| uml          	| Utilised Medical Leave                                                	|
| uccl         	| Utilised Child Care Leave                                             	|
| usl          	| Utilised Sick Leave                                                   	|
| uoil         	| Utilised Off-In-Leave                                                 	|
| mal          	| Utilised Maternity Leave                                              	|
| uothers      	| Utilised Other leaves                                                 	|
