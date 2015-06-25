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
| appd          | Approval Date - Supervisor's date of processing leave application.                                     |
| docs          | Documents - Employee's documents (Medical Certificate, Examination Slip, etc).                         |  
  
  
  
### Employees

| **Row  Name** | **Describition**                           |
|---------------|--------------------------------------------|
| empnum        | Employee Number - Needed  for referencing. |
| fname         | First Name                                 |
| lname         | Last Name                                  |
| doe           | Date of Employment                         |
| position      | Position - Employee's position             |
| department    | Department - Employee's department         |
