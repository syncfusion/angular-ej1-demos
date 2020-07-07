export class SunburstDataService{ 

getDefaultData():Array<any>{
	  return[
	  { Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup:"Executive",                         EmployeesCount : 50 },
{ Category : "Employees", Country : "USA", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "USA", JobDescription : "Marketing",                                                   EmployeesCount : 40 },
{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 55 },
{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 175},
{ Category : "Employees", Country : "USA", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 70 },
{ Category : "Employees", Country : "USA", JobDescription : "Management",                                                  EmployeesCount : 40 },
{ Category : "Employees", Country : "USA", JobDescription : "Accounts",                                                    EmployeesCount : 60 },

{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 43 },
{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 125},
{ Category : "Employees", Country : "India",   JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 60 },
{ Category : "Employees", Country : "India",   JobDescription : "HR Executives",                                               EmployeesCount : 70 },
{ Category : "Employees", Country : "India",   JobDescription : "Accounts",                                                    EmployeesCount : 45 },

{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Executive",                       EmployeesCount : 30 },
{ Category : "Employees", Country : "Germany", JobDescription : "Sales",         JobGroup : "Analyst",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "Germany", JobDescription : "Marketing",                                                   EmployeesCount : 50 },
{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
{ Category : "Employees", Country : "Germany", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
{ Category : "Employees", Country : "Germany", JobDescription : "Management",                                                  EmployeesCount : 33 },
{ Category : "Employees", Country : "Germany", JobDescription : "Accounts",                                                    EmployeesCount : 55 },

{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 45 },
{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 96 },
{ Category : "Employees", Country : "UK",      JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 55 },
{ Category : "Employees", Country : "UK",      JobDescription : "HR Executives",                                               EmployeesCount : 60 },
{ Category : "Employees", Country : "UK",      JobDescription: "Accounts",                                                     EmployeesCount: 30  },

{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Testers",                         EmployeesCount : 40 },
{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Windows", EmployeesCount : 65 },
{ Category : "Employees", Country : "France", JobDescription : "Technical",     JobGroup : "Developers", JobRole : "Web",     EmployeesCount : 27 },
{ Category : "Employees", Country : "France", JobDescription: "Marketing",                                                     EmployeesCount: 50  }
	    
	  ];
	}
	
	getAnimationData():Array<any>{
	  return[
	    { Continent: "North America", Country: "Canada",        State: "Ontario",                Population: 13210600 },
 { Continent: "North America", Country: "United States", State: "New York",               Population: 19378102 },
 { Continent: "North America", Country: "United States", State: "Pennsylvania",           Population: 12702379 },
 { Continent: "North America", Country: "United States", State: "Ohio",                   Population: 11536504 },
                                                                                          
{ Continent: "South America", Country: "Argentina",      State: "Buenos Aires",           Population: 15594428 },
{ Continent: "South America", Country: "Brazil",         State: "Minas Gerais",           Population: 20593366 },
{ Continent: "South America", Country: "Brazil",         State: "Rio de Janeiro",         Population: 16369178 },
{ Continent: "South America", Country: "Brazil",         State: "Bahia",                  Population: 15044127 },
{ Continent: "South America", Country: "Brazil",         State: "Rio Grande do Sul",      Population: 11164050 },
{ Continent: "South America", Country: "Brazil",         State: "Parana",                 Population: 10997462 },
                                                                                          
{ Continent: "Asia",          Country: "Bangladesh",     State: "Chittagong",             Population: 28079000 },
{ Continent: "Asia",          Country: "Bangladesh",     State: "Rajshahi",               Population: 18329000 },
{ Continent: "Asia",          Country: "Bangladesh",     State: "Khulna",                 Population: 15563000 },
{ Continent: "Asia",          Country: "China",          State: "Liaoning",               Population: 43746323 },
{ Continent: "Asia",          Country: "China",          State: "Shaanxi",                Population: 37327378 },
{ Continent: "Asia",          Country: "China",          State: "Fujian",                 Population: 36894216 },
{ Continent: "Asia",          Country: "China",          State: "Shanxi",                 Population: 35712111 },
{ Continent: "Asia",          Country: "India",          State: "Kerala",                 Population: 33387677 },
{ Continent: "Asia",          Country: "India",          State: "Punjab",                 Population: 27704236 },
{ Continent: "Asia",          Country: "India",          State: "Haryana",                Population: 25353081 },
{ Continent: "Asia",          Country: "India",          State: "Delhi",                  Population: 16753235 },
{ Continent: "Asia",          Country: "India",          State: "Jammu",                  Population: 12548926 },
{ Continent: "Asia",          Country: "Indonesia",      State: "West Java",              Population: 43021826 },
{ Continent: "Asia",          Country: "Indonesia",      State: "East Java",              Population: 37476011 },
{ Continent: "Asia",          Country: "Indonesia",      State: "Banten",                 Population: 10644030 },
{ Continent: "Asia",          Country: "Indonesia",      State: "Jakarta",                Population: 10187595 },
                                                                                          
                                                                                          
{ Continent: "Africa",        Country: "Ethiopia",       State: "Tianjin",                Population: 24000200 },
{ Continent: "Africa",        Country: "Ethiopia",       State: "Tianjin",                Population: 15042531 },
{ Continent: "Africa",        Country: "Kenya",          State: "Rift Valley",            Population: 10006805 },
{ Continent: "Africa",        Country: "Nigeria",        State: "Lagos",                  Population: 10006805 },
{ Continent: "Africa",        Country: "Nigeria",        State: "Kano",                   Population: 10006805 },
{ Continent: "Africa",        Country: "South Africa",   State: "Gauteng",                Population: 12728400 },
{ Continent: "Africa",        Country: "South Africa",   State: "KwaZulu-Natal",          Population: 10456900 },
                              
                              
{ Continent: "Europe",        Country: "France",         State: "Ile-de- France",         Population: 11694000 },
{ Continent: "Europe",        Country: "Germany",        State: "North Rhine-Westphalia", Population: 17872863 },
{ Continent: "Europe",        Country: "Germany",        State: "Bavaria",                Population: 12510331 },
{ Continent: "Europe",        Country: "Germany",        State: "NBaden-Wurttemberg",     Population: 10747479 },
{ Continent: "Europe",        Country: "United Kingdom", State: "England",                Population: 51446600 }
	  ];
	  
	  }
	  
  getZoomingData():Array<any>{
	  return[
            {
                 x: "Others",
                 y: 300,
                 text:"Others",

                 point: [
                     {
                         x: "Others1",
                         y: 100,
                         //fill: "#9cbb59",
                         text: "Others1",
                         point: [
                             {
                                 x: "Others4",
                                 y: 50,
                                 text:"Others4",
                                 //fill: "#9cbb59",
                                 point: [
                                     {
                                         x: 'others6',
                                         y: 50,
                                         text: "others6"
                                     }
                                 ]
                             },
                             {
                                 x: "Others5",
                                 y: 50,
                                 text:"Others5"
                                 //fill: "#9cbb59"
                             }
                         ]
                     },
                     {
                         x: "Others2",
                         y: 50,
                         text:"Others2"
                         //point: [
                         //    {
                         //        x: "Others6",
                         //        y: 100
                         //    }
                         //]
                         //fill: "#9cbb59",
                         //text: "Others Others Others Others",
                     },
                     {
                         x: "Others3",
                         y: 100,
                         text:"Others3"
                         //fill: "#9cbb59", //text: "Others Others Others Others",

                     }
                 ]
             },
             {
                 x: "Medical",
                 y: 500,
                 text:"Medical",
                 point: [
                     {
                         x: "Medical1",
                         y: 500,
                         text:"Medical1"
                         //fill: "#3083bd", //text: "Medical Medical Medical Medical",
                     },
                     {
                         x: "Medical2",
                         y: 1000,
                         text:"Medical2",
                         //fill: "#3083bd", //text: "Medical Medical Medical Medical",
                         point: [
                             {
                                 x: "Medical4",
                                 y: 100,
                                 text:"Medical4"
                             },
                             {
                                 x: "Medical5",
                                 y: 50,
                                 text:"Medical5"
                                 //fill: "#3083bd"
                             },
                             {
                                 x: "Medical6",
                                 y: 50,
                                 text:"Medical6"
                                 //fill: "#3083bd"
                             },
                         ]
                     },
                     {
                         x: "Medical3",
                         y: 100,
                         text:"Medical3"
                         //fill: "#3083bd", //text: "Medical Medical Medical Medical",
                     },
                 ]
             },
             {
                 x: "Hospital",
                 y: 200,
                 text:"Hospital",

                 point: [
                     {
                         x: "Hospital1",
                         y: 100,
                         text: "Hospital1",
                         //fill: "blue", //text: "Hospital Hospital Hospital Hospital",
                         point: [
                             {
                                 x: "Hospital4",
                                 y: 50,
                                 text: "Hospital4",
                                 //fill: "#e55725"
                             },
                             {
                                 x: "Hospital5",
                                 y: 50,
                                 text: "Hospital5",
                                 //fill: "#e55725",
                             }
                         ]
                     },
                     {
                         x: "Hospital2",
                         y: 50,
                         text: "Hospital2",
                         //fill: "#e55725", //text: "Hospital Hospital Hospital Hospital",
                     },
                     {
                         x: "Hospital3",
                         y: 50,
                         text: "Hospital3",
                         //fill: "#e55725", //text: "Hospital Hospital Hospital Hospital",


                     },
                 ]
             },
             {
                 x: 'Renting',
                 y: 100,
                 text:"Renting",
                 point: [
                    {
                        x: "Renting1",
                        y: 100,
                        text: "Renting1",
                        //fill: "#e55725", //text: "Hospital Hospital Hospital Hospital",
                        point: [
                            {
                                x: "Renting2",
                                y: 50,
                                text: "Renting2",
                                //fill: "#e55725"
                            },
                            {
                                x: "Renting3",
                                y: 50,
                                text: "Renting3",
                                //fill: "#e55725",
                            }
                        ]
                    },
                    {
                        x: "Renting4",
                        y: 100,
                        text: "Renting4",
                    }
                 ]

             }
     ];
  }
}