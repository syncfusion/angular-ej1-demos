export class ChartDataService{ 
    getInformation(): Array<any>{
        return [
            {ShipCity:"STOCKHOLM",Freight:28},
            {ShipCity:"MOSCOW",Freight: 148},
            {ShipCity:"OTTAWA",Freight: 8},
            {ShipCity:"KIEV",Freight:43},
            {ShipCity:"COPENHAGEN",Freight:28},
            {ShipCity:"Juneau",Freight:35},
            {ShipCity:"Resende",Freight:13.97},
            {ShipCity:"San Cristobal",Freight:81.91},
            
        ];
    }
	
	getBoxData(): Array<any>{
	  return[{ x: "Development", y: [22,22,23,25,25,25,26,27,27,28,28,29,30,32,34,32,34,36,35,38] }, { x: "Testing", y: [22,33,23,25,26,28,29,30,34,33,32,31,50] }, 
							 { x: "HR", y: [22,24,25,30,32,34,36,38,39,41,35,36,40,56]  }, { x: "Finance", y: [26,27,28,30,32,34,35,37,35,37,45] },
							 { x: "R&D", y: [26,27,29,32,34,35,36,37,38,39,41,43,58] },
							 { x: "Sales", y: [27,26,28,29,29,29,32,35,32,38,53] },{ x: "Inventory", y: [21,23,24,25,26,27,28,30,34,36,38] },							 						
							 { x: "Graphics", y: [26,28,29,30,32,33,35,36, 52] },{ x: "Training", y: [28,29,30,31,32,34,35,36] }];
	  }
	
	getDragData(): Array<any>{
	  return[
	                        { x: new Date("2015/01/01"), y1: 950, y2: 700, size1:9.5 ,size2:7},
							{ x: new Date("2015/02/01"), y1: 1200,y2: 900, size1:12 ,size2:9},
							{ x: new Date("2015/03/01"), y1: 1000,y2: 800, size1:10 ,size2:8},
							{ x: new Date("2015/04/01"), y1: 1350,y2: 1050, size1:13.5 ,size2:10.5},							
							{ x: new Date("2015/05/01"), y1: 1150,y2: 950, size1:11.5 ,size2:9.5}
	  ];
	  }
	  
	  rowData(sender:any)
	  {
	    let data = this.getRowData(); 
		sender.model.series[0].dataSource = data;  
        sender.model.series[0].xName = "xDate";
		sender.model.series[0].yName = "High";
        sender.model.series[1].dataSource =data; 
		sender.model.series[1].xName = "xDate";
		sender.model.series[1].high = "High";
		sender.model.series[1].low = "Low";
		sender.model.series[1].open = "Open";
		sender.model.series[1].close = "Close";
	  }
	  
	  LabelData(sender:any){
	    let labelData1 = "series1";
		sender.model.series[0].dataSource = this.getLabelData(labelData1);  
        sender.model.series[0].xName = "x";
		sender.model.series[0].yName = "y";
		 let labelData2 = "series2";
        sender.model.series[1].dataSource =this.getLabelData(labelData2); 
		sender.model.series[1].xName = "x";
		sender.model.series[1].yName = "y"; 
	   let labelData3 = "series3";
	   sender.model.series[2].dataSource =this.getLabelData(labelData3); 
		sender.model.series[2].xName = "x";
		sender.model.series[2].yName = "y";    
	}
	
	
	  
	  
	getRowData():Array<any>{
	  return[
	     { "xDate": new Date("2013/03/27"), "Open": 85.97, "High": 86.37, "Low": 85.96, "Close": 86.33 },
	{ "xDate": new Date("2013/03/29"), "Open": 85.97, "High": 86.37, "Low": 85.96, "Close": 86.33 },
    { "xDate": new Date("2013/04/01"), "Open": 86.1, "High": 86.15, "Low": 85.9, "Close": 86.03 },
    { "xDate": new Date("2013/04/03"), "Open": 85.93, "High": 86.17, "Low": 85.84, "Close": 86.02 },
    { "xDate": new Date("2013/04/05"), "Open": 85.74, "High": 86, "Low": 85.66, "Close": 86 },
    { "xDate": new Date("2013/04/07"), "Open": 85.71, "High": 85.71, "Low": 85.36, "Close": 85.62 },
    { "xDate": new Date("2013/04/09"), "Open": 85.3, "High": 85.92, "Low": 85.16, "Close": 85.8 },
    { "xDate": new Date("2013/04/11"), "Open": 84.23, "High": 85.46, "Low": 84.23, "Close": 85.2 },
    { "xDate": new Date("2013/04/13"), "Open": 84.51, "High": 84.54, "Low": 84.19, "Close": 84.3 },
    { "xDate": new Date("2013/04/15"), "Open": 84.44, "High": 84.65, "Low": 84.2, "Close": 84.63 },
    { "xDate": new Date("2013/04/17"), "Open": 84.6, "High": 84.81, "Low": 84.59, "Close": 84.65 },
    { "xDate": new Date("2013/04/19"), "Open": 84.52, "High": 84.86, "Low": 84.4, "Close": 84.76 },
    { "xDate": new Date("2013/04/21"), "Open": 84.17, "High": 84.66, "Low": 84.16, "Close": 84.47 },
    { "xDate": new Date("2013/04/23"), "Open": 84.22, "High": 84.3, "Low": 83.98, "Close": 84.26 },
    { "xDate": new Date("2013/04/25"), "Open": 83.75, "High": 84.1, "Low": 83.65, "Close": 84 },
    { "xDate": new Date("2013/04/27"), "Open": 84, "High": 84.01, "Low": 83.67, "Close": 83.74 },
	 { "xDate": new Date("2013 04/29"), "Open": 84, "High": 84.01, "Low": 83.67, "Close": 83.74 },
    { "xDate": new Date("2013/05/01"), "Open": 84.3, "High": 84.45, "Low": 84.19, "Close": 84.22 },
    { "xDate": new Date("2013/05/03"), "Open": 83.79, "High": 84.19, "Low": 83.7, "Close": 84.04 },
    { "xDate": new Date("2013/05/05"), "Open": 84.02, "High": 84.02, "Low": 83.69, "Close": 83.71 },
    { "xDate": new Date("2013/05/07"), "Open": 84.01, "High": 84.04, "Low": 83.82, "Close": 83.96 },
    { "xDate": new Date("2013/05/09"), "Open": 83.9, "High": 84.02, "Low": 83.86, "Close": 83.94 },
    { "xDate": new Date("2013/05/11"), "Open": 84.09, "High": 84.17, "Low": 83.9, "Close": 84.06 },
    { "xDate": new Date("2013/05/13"), "Open": 83.89, "High": 84.25, "Low": 83.77, "Close": 84.01 },
    { "xDate": new Date("2013/05/15"), "Open": 84.05, "High": 84.14, "Low": 83.84, "Close": 83.91 },
    { "xDate": new Date("2013/05/17"), "Open": 84.49, "High": 84.65, "Low": 84.18, "Close": 84.22 },
    { "xDate": new Date("2013/05/19"), "Open": 84.99, "High": 85.1, "Low": 84.37, "Close": 84.43 },
    { "xDate": new Date("2013/05/21"), "Open": 84.96, "High": 85.06, "Low": 84.7, "Close": 85.01 },
    { "xDate": new Date("2013/05/23"), "Open": 84.68, "High": 84.9, "Low": 84.65, "Close": 84.76 },
    { "xDate": new Date("2013/05/25"), "Open": 84.35, "High": 85.03, "Low": 84.32, "Close": 84.67 },
    { "xDate": new Date("2013/05/27"), "Open": 84.19, "High": 84.31, "Low": 84.16, "Close": 84.19 },
	{ "xDate": new Date("2013/05/29"), "Open": 84.19, "High": 84.31, "Low": 84.16, "Close": 84.19 },
    { "xDate": new Date("2013/06/01"), "Open": 84.2, "High": 84.29, "Low": 84.04, "Close": 84.15 },
    { "xDate": new Date("2013/06/03"), "Open": 84.21, "High": 84.25, "Low": 84.03, "Close": 84.17 },
    { "xDate": new Date("2013/06/05"), "Open": 84.72, "High": 84.87, "Low": 84.44, "Close": 84.49 },
    { "xDate": new Date("2013/06/07"), "Open": 84.85, "High": 84.88, "Low": 84.5, "Close": 84.72 },
    { "xDate": new Date("2013/06/09"), "Open": 84.53, "High": 84.74, "Low": 84.25, "Close": 84.69 },
    { "xDate": new Date("2013/06/11"), "Open": 84.4, "High": 84.7, "Low": 84.27, "Close": 84.52 },
    { "xDate": new Date("2013/06/13"), "Open": 84.96, "High": 85.07, "Low": 84.5, "Close": 84.57 },
    { "xDate": new Date("2013/06/15"), "Open": 85.28, "High": 85.32, "Low": 84.95, "Close": 85.03 },
    { "xDate": new Date("2013/06/17"), "Open": 85.35, "High": 85.39, "Low": 85.1, "Close": 85.32 },
    { "xDate": new Date("2013/06/19"), "Open": 85.65, "High": 85.66, "Low": 85.21, "Close": 85.36 },
    { "xDate": new Date("2013/06/21"), "Open": 85.38, "High": 85.85, "Low": 85.25, "Close": 85.67 },
    { "xDate": new Date("2013/06/23"), "Open": 85.8, "High": 85.96, "Low": 85.67, "Close": 85.83 },
    { "xDate": new Date("2013/06/25"), "Open": 86.07, "High": 86.22, "Low": 85.75, "Close": 85.87 },
    { "xDate": new Date("2013/06/27"), "Open": 86.05, "High": 86.08, "Low": 85.68, "Close": 85.79 },
	 { "xDate": new Date("2013/06/29"), "Open": 86.05, "High": 86.08, "Low": 85.68, "Close": 85.79 },
    { "xDate": new Date("2013/07/01"), "Open": 85.85, "High": 86.25, "Low": 85.79, "Close": 86.06 },
    { "xDate": new Date("2013/07/03"), "Open": 85.6, "High": 85.85, "Low": 85.49, "Close": 85.81 },
    { "xDate": new Date("2013/07/05"), "Open": 85.94, "High": 86, "Low": 85.48, "Close": 85.66 },
    { "xDate": new Date("2013/07/07"), "Open": 86.55, "High": 86.64, "Low": 85.36, "Close": 85.92 },
    { "xDate": new Date("2013/07/09"), "Open": 86.46, "High": 86.87, "Low": 86.4, "Close": 86.71 },
    { "xDate": new Date("2013/07/11"), "Open": 86.3, "High": 86.39, "Low": 86.13, "Close": 86.38 },
    { "xDate": new Date("2013/07/13"), "Open": 85.74, "High": 86.44, "Low": 85.67, "Close": 86.19 },
    { "xDate": new Date("2013/07/15"), "Open": 85.56, "High": 85.62, "Low": 85.34, "Close": 85.61 },
    { "xDate": new Date("2013/07/17"), "Open": 85.79, "High": 85.89, "Low": 85.36, "Close": 85.52 },
    { "xDate": new Date("2013/07/19"), "Open": 85.54, "High": 86, "Low": 85.51, "Close": 85.76 },
    { "xDate": new Date("2013/07/21"), "Open": 85, "High": 85.17, "Low": 84.87, "Close": 85.15 },
    { "xDate": new Date("2013/07/23"), "Open": 85.1, "High": 85.28, "Low": 84.72, "Close": 85.08 },
    { "xDate": new Date("2013/07/25"), "Open": 85.46, "High": 85.56, "Low": 85.18, "Close": 85.37 },
    { "xDate": new Date("2013/07/27"), "Open": 85.42, "High": 85.44, "Low": 85.09, "Close": 85.42 },
    { "xDate": new Date("2013/07/29"), "Open": 85.42, "High": 85.44, "Low": 85.09, "Close": 85.42 },
    { "xDate": new Date("2013/08/01"), "Open": 85.79, "High": 85.89, "Low": 85.36, "Close": 85.54 },
    { "xDate": new Date("2013/08/03"), "Open": 85.83, "High": 85.85, "Low": 85.55, "Close": 85.64 },
    { "xDate": new Date("2013/08/05"), "Open": 86.19, "High": 86.25, "Low": 85.8, "Close": 85.98 },
    { "xDate": new Date("2013/08/07"), "Open": 86.17, "High": 86.28, "Low": 85.96, "Close": 86.07 },
    { "xDate": new Date("2013/08/09"), "Open": 86.19, "High": 86.26, "Low": 85.97, "Close": 86.2 },
    { "xDate": new Date("2013/08/11"), "Open": 85.98, "High": 86.31, "Low": 85.86, "Close": 86.15 },
    { "xDate": new Date("2013/08/13"), "Open": 85.82, "High": 86.18, "Low": 85.74, "Close": 85.78 },
    { "xDate": new Date("2013/08/15"), "Open": 85.45, "High": 85.66, "Low": 85.41, "Close": 85.55 },
    { "xDate": new Date("2013/08/17"), "Open": 85.53, "High": 85.53, "Low": 85.31, "Close": 85.48 },
    { "xDate": new Date("2013/08/19"), "Open": 85.6, "High": 85.68, "Low": 85.34, "Close": 85.39 },
    { "xDate": new Date("2013/08/21"), "Open": 85.6, "High": 85.72, "Low": 85.5, "Close": 85.61 },
    { "xDate": new Date("2013/08/23"), "Open": 85.34, "High": 85.52, "Low": 85.3, "Close": 85.49 },
    { "xDate": new Date("2013/08/25"), "Open": 85.66, "High": 85.72, "Low": 85.38, "Close": 85.41 },
    { "xDate": new Date("2013/08/27"), "Open": 85.93, "High": 85.95, "Low": 85.59, "Close": 85.62 },
    { "xDate": new Date("2013/08/29"), "Open": 85.91, "High": 85.93, "Low": 85.63, "Close": 85.58 },
    { "xDate": new Date("2013/09/01"), "Open": 85.6, "High": 85.87, "Low": 85.5, "Close": 85.81 }
	  ];
	}
	
    getRangeDateData():any{
        let series1 = [];
            let series2 = [];
            let value = 100;
            let value1 = 120;
            for (let i = 1; i < 730; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                let point1 = { XValue: new Date(2010, 0, i), YValue: value };
                let point2 = { XValue: new Date(2010, 0, i), YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            let data = { Open: series1, Close: series2 };
            return data;
    }
    getRangeNumericData():any{
        
     let series1 = [];
            let series2 = [];
            let value = 100;
            let value1 = 120;
            for (let i = 0; i < 351; i++) {

                if (Math.random() > .5) {
                    value += Math.random();
                    value1 += Math.random();
                } else {
                    value -= Math.random();
                    value1 -= Math.random();
                }
                let point1 = { XValue: i, YValue: value };
                let point2 = { XValue: i, YValue: value1 };
                series1.push(point1);
                series2.push(point2);
            }

            let data = { Open: series1, Close: series2 };
            return data;
    }
    getDefaultData():Array<any>{
        return[
        { 'Year': '2005', 'yName': 28, 'yName1': 31, 'yName2': 36, 'yName3': 39 },
        { 'Year': '2006', 'yName': 25, 'yName1': 28, 'yName2': 32, 'yName3': 36 },
        { 'Year': '2007', 'yName': 26, 'yName1': 30, 'yName2': 34, 'yName3': 40 },
        { 'Year': '2008', 'yName': 27, 'yName1': 36, 'yName2': 41, 'yName3': 44 },
        { 'Year': '2009', 'yName': 32, 'yName1': 36, 'yName2': 42, 'yName3': 45 },
        { 'Year': '2010', 'yName': 35, 'yName1': 39, 'yName2': 42, 'yName3': 48 },
        { 'Year': '2011', 'yName': 30, 'yName1': 37, 'yName2': 43, 'yName3': 46 }
     ];
    }

    get3dBarData(): Array<any> {
        return [
            { 'xValue': 'All plans', 'yValue1': 36, 'yValue2': 61  },
            { 'xValue': 'HMO', 'yValue1': 18, 'yValue2': 31  },
            { 'xValue': 'PPO', 'yValue1': 59, 'yValue2': 70  },
            { 'xValue': 'POS', 'yValue1': 40, 'yValue2': 31  },
            { 'xValue': 'HDHP', 'yValue1': 34, 'yValue2': 60  },
            { 'xValue': 'SO', 'yValue1': 44, 'yValue2': 62  }
        ];
    }
	
	getGridBandData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		      { x: 1970, y: 16500 }, { x: 1975, y: 16000 },{ x: 1980, y: 15400 }, 
									 { x: 1985, y: 15800 }, { x: 1990, y: 14000 }, { x: 1995, y: 10500 }, 
									 { x: 2000, y: 13300 }, { x: 2005, y: 12800 }
		   ];
		}
		else{
		  return[
		    { x: 1970, y: 8000 }, { x: 1975, y: 7600 }, { x: 1980, y: 6400 }, 
									 { x: 1985, y: 3700 }, { x: 1990, y: 7200 }, { x: 1995, y: 2300 }, 
									 { x: 2000, y: 4000 }, { x: 2005, y: 4800 }
		  ];
		  }
	  }
	
	getAnimationData(): Array<any> {
	return[{ x: "Australia", y: 480, size: 1.8 }, { x: "China", y: 507, size: 2 }, 
							 { x: "France", y: 464, size: 1.7 }, { x: "Germany", y: 539, size: 2.4 },
                             { x: "India", y: 346, size: 1 }, {x: "Indonesia", y: 663, size: 3}, { x: "Saudi Arabia", y: 214, size: 0.6 },
							 { x: "South Afirca", y: 566, size: 2.6 }, { x: "United Kingdom", y: 460, size: 1.7 },
							 {x: "Venezuela", y: 444, size: 1.6}
		 ];
	}
	
	getAnnotationData(): Array<any> {
	return[{ x: "Jan", y: 60 }, { x: "Feb", y: 50 }, { x: "Mar", y: 64 }, { x: "Apr", y: 63 },
                                { x: "May", y: 81 }, { x: "Jun", y: 64 }, { x: "Jul", y: 82 }, { x: "Aug", y: 96 }, { x: "Sep", y: 78 }, { x: "Oct", y: 60 },
								{ x: "Nov", y: 58 }, { x: "Dec", y: 56 }
          ];
	}
	
	getAreaData(): Array<any> {
	return[
        { xValue: 1900, yValue1: 4, yValue2: 2.6 ,yValue3:2.8 },
        { xValue: 1920, yValue1: 3.0, yValue2: 2.8,yValue3:2.5  },
        { xValue: 1940, yValue1: 3.8, yValue2: 2.6,yValue3:2.8   },
        { xValue: 1960, yValue1: 3.4, yValue2: 3 ,yValue3:3.2  },
        { xValue: 1980, yValue1: 3.2, yValue2: 3.6,yValue3:2.9  },
        { xValue: 2000, yValue1: 3.9, yValue2: 3 ,yValue3:2  },
        ];
	}
	
	 getSelectionData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		    { x: "China", y: 17 },
                             { x: "United States", y: 19},
							 { x: "India", y: 29},
                             { x: "Japan", y: 13},
							 { x: "Brazil", y: 24},
                             { x: "Russia", y: 16},
                             { x: "Germany", y: 13},
							 { x: "Nigeria", y: 44},
                             { x: "United Kingdom", y: 18},
							 { x: "France", y: 19}
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		    { x: "China", y: 74},
                             { x: "United States", y: 67},
							 { x: "India", y: 65 },
                             { x: "Japan", y: 61 },
							 { x: "Brazil", y: 68 },
                             { x: "Russia", y: 70},
                             { x: "Germany", y: 66},
							 { x: "Nigeria", y: 53},
                             { x: "United Kingdom", y: 65},
							 { x: "France", y: 63}
		  ];
		 
		}
		else{
		  return[
		     { x: "China", y: 9 },
                             { x: "United States", y: 14},
							 { x: "India", y: 6},
                             { x: "Japan", y: 26},
							 { x: "Brazil", y: 8},
                             { x: "Russia", y: 14},
                             { x: "Germany", y: 21},
							 { x: "Nigeria", y: 3},
                             { x: "United Kingdom", y: 17},
							 { x: "France", y: 18}
		  ];
		  }
	  }
	  
	getSemiPieData(): Array<any> {
	  return[
	  { x: 'Australia', y:53.3, text:"Australia" },
							{ x: 'China', y: 55.7, text:"China" },
							{ x: 'India', y: 60.5, text: "India" },
							{ x: 'Japan', y: 12.5, text:"Japan" },
							{ x: 'South Africa', y: 79.4, text:"South Africa" },
							{ x: 'United Kingdom', y: 70.9, text:"United Kingdom" },
							{ x: 'United States', y: 45.0, text:"United States" }
	  ];
	}
	getSmartAxisData(): Array<any> {
	   return[
	   { x: "South Korea", y: 39.4 }, { x: "India", y: 61.3 }, 
							 { x: "Pakistan", y: 20.4 }, { x: "Germany", y: 65.1 },
							 { x: "Australia", y: 15.8 }, { x: "Italy", y: 29.2 }, 
							 { x: "France", y: 44.6 }, { x: "Saudi Arabia", y: 9.7 },
							 { x: "Russia", y: 40.8 }, { x: "Mexico", y: 31 }, 
							 { x: "Brazil", y: 75.9 }, { x: "China", y: 51.4 }
	   ];
	}
	
	getSplineData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		    { x: 'Jan', y: -1 }, { x: 'Feb', y: -1 }, { x: 'Mar', y: 2 }, { x: 'Apr', y: 8 }, 
							 { x: 'May', y: 13 }, { x: 'Jun', y: 18 }, { x: 'Jul', y: 21 }, { x: 'Aug', y: 20 },
                             { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 0 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: 'Jan', y: 3 }, { x: 'Feb', y: 3.5 }, { x: 'Mar', y: 7 }, { x: 'Apr', y: 13.5 },
                             { x: 'May', y: 19 }, { x: 'Jun', y: 23.5 }, { x: 'Jul', y: 26 }, { x: 'Aug', y: 25 },
                             { x: 'Sep', y: 21 }, { x: 'Oct', y: 15 }, { x: 'Nov', y: 9 }, { x: 'Dec', y: 3.5 }
		  ];
		 
		}
		else{
		  return[
		  { x: 'Jan', y: 7 }, { x: 'Feb', y: 8 }, { x: 'Mar', y: 12 }, { x: 'Apr', y: 19 }, 
                              { x: 'May', y: 25 }, { x: 'Jun', y: 29 }, { x: 'Jul', y: 31 }, { x: 'Aug', y: 30 },
                              { x: 'Sep', y: 26 }, { x: 'Oct', y: 20 }, { x: 'Nov', y: 14 }, { x: 'Dec', y: 8 }
		  ];
		  }
	  }
	  
	  getStackingAreaData(sender:string):Array<any>{
	     if(sender == "series1"){
		   return[
		     { x: 2002, y: 6 }, { x: 2003, y: 7.5 }, { x: 2004, y: 6 }, { x: 2005, y: 6.5 }, 
							 { x: 2006, y: 7.4 }, { x: 2007, y: 7.9 }, { x: 2008, y: 7.5 }, { x: 2009, y: 8.5 }, 
							 { x: 2010, y: 4.8 }, { x: 2011, y: 9.3 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		    { x: 2002, y: 3.5 }, { x: 2003, y: 4.9 }, { x: 2004, y: 3.7 }, { x: 2005, y: 7.5 }, 
							 { x: 2006, y: 4.8 }, { x: 2007, y: 2.6 }, { x: 2008, y: 4.7 }, { x: 2009, y: 3.7 }, 
							 { x: 2010, y: 3.5 }, { x: 2011, y: 3.6 }
		  ];
		 
		}
		else if(sender == "series3")
		{
		  return[
		    { x: 2002, y: 8.1 }, { x: 2003, y: 8.8 }, { x: 2004, y: 6.7 }, { x: 2005, y: 6.4 }, 
							 { x: 2006, y: 4 }, { x: 2007, y: 4.8 }, { x: 2008, y: 7.4 }, { x: 2009, y: 3.5 }, 
							 { x: 2010, y: 8.3 }, { x: 2011, y: 4.7 }
		  ];
		 
		}
		else{
		  return[
		    { x: 2002, y: 2.5 }, { x: 2003, y: 6.1 }, { x: 2004, y: 6.2 }, { x: 2005, y: 1.8 }, 
							 { x: 2006, y: 4 }, { x: 2007, y: 6.5 }, { x: 2008, y: 6.7 }, { x: 2009, y: 7.2 },
							 { x: 2010, y: 8.4 }, { x: 2011, y: 6.9 }
		  ];
		  }
	  }
	  
	  getStackingBar100Data(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		     { x: 2007, y:453 }, { x: 2008, y: 354 }, { x: 2009, y: 282 }, { x: 2010, y: 321 }, 
							 { x: 2011, y: 333 }, { x: 2012, y:351 }, { x: 2013, y:403 }, { x: 2014,y:421 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: 2007, y:876 }, { x: 2008, y: 564 }, { x: 2009, y: 242 }, { x: 2010, y: 121 },
							 { x: 2011, y: 343 }, { x: 2012, y: 451 }, { x: 2013, y:203 },{ x: 2014,y:431 }
		  ];
		 
		}
		else if(sender == "series3"){
		  return[
		     { x: 2007, y:356 }, { x: 2008, y:876 }, { x: 2009, y: 898 }, { x: 2010, y: 567 }, 
							 { x: 2011, y: 456 }, { x: 2012, y: 345 }, { x: 2013, y: 543 }, { x: 2014, y:654 }
		  ];
		  }
		  else{
		    return[
			  { x: 2007, y: 122 }, { x: 2008, y: 444 }, { x: 2009, y: 222 }, { x: 2010, y: 231 },
							 { x: 2011, y: 122 }, { x: 2012, y: 333}, { x: 2013, y: 354}, { x: 2014,y:100 }
			];
		  }
	  }
	  
	 getStackingColumnData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		     { x: 'Jan', y: 900 }, { x: 'Feb', y: 820 }, { x: 'Mar', y: 880 }, { x: 'Apr', y: 725 },
							 { x: 'May', y: 765 }, { x: 'June', y: 679 }, { x: 'July', y: 770 }, { x: 'Aug', y: 825 }, 
							 { x: 'Sep', y: 704 }, { x: 'Oct', y: 781 }, { x: 'Nov', y: 799 }, { x: 'Dec', y: 882 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: 'Jan', y: 190 }, { x: 'Feb', y: 226 }, { x: 'Mar', y: 194 }, { x: 'Apr', y: 250 },
                             { x: 'May', y: 222 }, { x: 'June', y: 181 }, { x: 'July', y: 128 }, { x: 'Aug', y: 239 },
							 { x: 'Sep', y: 268 }, { x: 'Oct', y: 236 }, { x: 'Nov', y: 285 }, { x: 'Dec', y: 199 }
		  ];
		 
		}
		else if(sender == "series3"){
		  return[
		      { x: 'Jan', y: 250 }, { x: 'Feb', y: 145 },{ x: 'Mar', y: 190 }, { x: 'Apr', y: 220 },
                             { x: 'May', y: 225 }, { x: 'June', y: 135 }, { x: 'July', y: 152 },{ x: 'Aug', y: 216 },
							 { x: 'Sep', y: 137 }, { x: 'Oct', y: 147 }, { x: 'Nov', y: 242 }, { x: 'Dec', y: 230 }
		  ];
		  }
		  else{
		    return[
			   { x: 'Jan', y: 150 }, { x: 'Feb', y: 120 },{ x: 'Mar', y: 115 }, { x: 'Apr', y: 125 },
                             { x: 'May', y: 132 }, { x: 'June', y: 137 }, { x: 'July', y: 110 },{ x: 'Aug', y: 126 }, 
							 { x: 'Sep', y: 97 }, { x: 'Oct', y: 122 }, { x: 'Nov', y: 85 }, { x: 'Dec', y: 120 }
			];
		  }
	}
	
	getStepAreaData():Array<any>{
	  return[
	    { x: 2000, y: 416 }, { x: 2001, y: 490 }, { x: 2002, y: 470 }, { x: 2003, y: 500 }, 
							 { x: 2004, y: 449 }, { x: 2005, y: 470 },{ x: 2006, y: 437 }, { x: 2007, y: 458 }, 
							 { x: 2008, y: 500 }, { x: 2009, y: 473 }, { x: 2010, y: 520 }, { x: 2011, y: 509 }
	  ];
	}
	
	getStepLineData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		      { x: 2006, y: 378 }, { x: 2007, y: 416 }, { x: 2008, y: 404 }, { x: 2009, y: 390 }, 
						 { x: 2010, y: 376 }, { x: 2011, y: 365 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: 2006, y: 463 }, { x: 2007, y: 449 }, { x: 2008, y: 458 }, { x: 2009, y: 450 }, 
						 { x: 2010, y: 425 }, { x: 2011, y: 430 }
		  ];
		 
		}
		else if(sender == "series3")
		{
		  return[
		    { x: 2006, y: 519 }, { x: 2007, y: 508 }, { x: 2008, y: 502 }, { x: 2009, y: 495 }, 
						 { x: 2010, y: 485 }, { x: 2011, y: 470 }
		  ];
		 
		}
		else{
		  return[
		   { x: 2006, y: 570 }, { x: 2007, y: 579 }, { x: 2008, y: 563 }, { x: 2009, y: 550 }, 
						 { x: 2010, y: 545 }, { x: 2011, y: 525 }
		  ];
		  }
	  }
	  
	  getStriplineData():Array<any>{
	   return[
	     { x: "Jan", y: 28 }, { x: "Feb", y: 27 }, { x: "Mar", y: 33 }, { x: "Apr", y: 36 },
                                 { x: "May", y: 28 }, { x: "Jun", y: 30 }, { x: "Jul", y: 31 }, { x: "Aug", y: 27 },
                                 { x: "Sep", y: 30 }, { x: "Oct", y: 20 }, { x: "Nov", y: 15 }, { x: "Dec", y: 17 }
	    ];
	  }
	  
	  getSubtitleData(sender:string):Array<any>{
	     if(sender == "series1"){
		   return[
		      { x: "Monday", y: 70 }, { x: "Tuesday", y: 60 }, { x: "Wednesday", y: 40 }, { x: "Thursday", y: 40 },
                                 { x: "Friday", y: 70 }, { x: "Saturday", y: 50 }, { x: "Sunday", y: 45 }
		   ];
		}
		else{
		  return[
		     { x: "Monday", y: 80 }, { x: "Tuesday", y: 70 }, { x: "Wednesday", y: 50 }, { x: "Thursday", y: 60 },
                                 { x: "Friday", y: 60 }, { x: "Saturday", y: 80 }, { x: "Sunday", y: 65 }
		  ];
		  }
	  }
	  
	  getSymbolData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		       { x: 1950, y: 0.8 }, { x: 1955, y: 1.2 }, { x: 1960, y: 0.9 }, { x: 1965, y: 1 },
							  { x: 1970, y: 0.8 }, { x: 1975, y: 1 }, { x: 1980, y: 1 }, { x: 1985, y: 1.2 }, 
							  { x: 1990, y: 1.1 }, { x: 1995, y: 1.2 }, { x: 2000, y: 1.4 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: 1950, y: 1.4 }, { x: 1955, y: 1.7 }, { x: 1960, y: 1.5 }, { x: 1965, y: 1.6 }, 
							 { x: 1970, y: 1.4 }, { x: 1975, y: 1.8 }, { x: 1980, y: 1.7 }, { x: 1985, y: 1.9 }, 
							 { x: 1990, y: 1.7 }, { x: 1995, y: 1.8 }, { x: 2000, y: 2 }
		  ];
		 
		}
		else{
		  return[
		    { x: 1950, y: 2 }, { x: 1955, y: 2.4 }, { x: 1960, y: 2.2 }, { x: 1965, y: 2.5 }, 
							 { x: 1970, y: 2.2 }, { x: 1975, y: 2.4 }, { x: 1980, y: 2 }, { x: 1985, y: 2.3 },
							 { x: 1990, y: 2 }, { x: 1995, y: 2.2 }, { x: 2000, y: 2.4 }
		  ];
		  }
	  }
	  
	  getTooltipData():Array<any>{
	    return[
		   { x: 2002, y: 1.61 }, { x: 2003, y: 2.34 }, { x: 2004, y: 2.16 }, { x: 2005, y: 2.10 }, 
							 { x: 2006, y: 1.81 }, { x: 2007, y: 2.05 }, { x: 2008, y: 2.50 }, { x: 2009, y: 2.22 }, 
							 { x: 2010, y: 2.21 }, { x: 2011, y: 2.00 }, { x: 2012, y: 2.27 }
		 ];
		 }
		 
	 getTrackData(sender:any):Array<any>{
	 if(sender == "series1"){
		   return[
		                     { x: new Date("2000/02/11"), y: 30}, { x: new Date("2000/09/14"), y: 35 },
                             { x: new Date("2001/02/11"), y: 40 }, { x: new Date("2001/09/16"), y: 36 },
                             { x: new Date("2002/02/07"), y: 28 }, { x: new Date("2002/09/07"), y: 33 },
							 { x: new Date("2003/02/11"), y: 39 }, { x: new Date("2003/09/14"), y: 38 },
                             { x: new Date("2004/02/06"), y: 34 }, { x: new Date("2004/09/06"), y: 46 },
                             { x: new Date("2005/02/11"), y: 54 }, { x: new Date("2005/09/11"), y: 65 },
							 { x: new Date("2006/02/11"), y: 39 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		                     { x: new Date("2000/02/11"), y: 54 }, { x: new Date("2000/09/14"), y: 45 },
                             { x: new Date("2001/02/11"), y: 43 }, { x: new Date("2001/09/16"), y: 50 },
                             { x: new Date("2002/02/07"), y: 54 }, { x: new Date("2002/09/07"), y: 56 },
                             { x: new Date("2003/02/11"), y: 60 }, { x: new Date("2003/09/14"), y: 63 },
                             { x: new Date("2004/02/06"), y: 69 }, { x: new Date("2004/09/06"), y: 70 },
                             { x: new Date("2005/02/11"), y: 72 }, { x: new Date("2005/09/11"), y: 75 },
							 { x: new Date("2006/02/11"), y: 75 }
		  ];
		 
		}
		else if(sender == "series3")
		{
		  return[
		                     { x: new Date("2000/02/11"), y: 76}, { x: new Date("2000/09/14"), y: 70 },
                             { x: new Date("2001/02/11"), y: 63 }, { x: new Date("2001/09/16"), y: 72 },
                             { x: new Date("2002/02/07"), y: 77 }, { x: new Date("2002/09/07"), y: 79 },
                             { x: new Date("2003/02/11"), y: 72 }, { x: new Date("2003/09/14"), y: 68 },
                             { x: new Date("2004/02/06"), y: 78 }, { x: new Date("2004/09/06"), y: 65 },
                             { x: new Date("2005/02/11"), y: 81 }, { x: new Date("2005/09/11"), y: 80 },
							 { x: new Date("2006/02/11"), y: 94 }
		  ];
		 
		}
		else if(sender == "series4")
		{
		  return[
		                     { x: new Date("2000/02/11"), y: 98 }, { x: new Date("2000/09/14"), y: 90 },
                             { x: new Date("2001/02/11"), y: 83 }, { x: new Date("2001/09/16"), y: 90 },
                             { x: new Date("2002/02/07"), y: 86 }, { x: new Date("2002/09/07"), y: 84 },
                             { x: new Date("2003/02/11"), y: 106 }, { x: new Date("2003/09/14"), y: 99 },
                             { x: new Date("2004/02/06"), y: 110 }, { x: new Date("2004/09/06"), y: 102 },
                             { x: new Date("2005/02/11"), y: 90 }, { x: new Date("2005/09/11"), y: 85 },
							 { x: new Date("2006/02/11"), y: 110 }
		  ];
		 
		}
		else{
		  return[
		                     { x: new Date("2000/02/11"), y: 116 }, { x: new Date("2000/09/14"), y: 110 },
                             { x: new Date("2001/02/11"), y: 100 }, { x: new Date("2001/09/16"), y: 102 },
                             { x: new Date("2002/02/07"), y: 97 }, { x: new Date("2002/09/07"), y: 89 },
                             { x: new Date("2003/02/11"), y: 88 }, { x: new Date("2003/09/14"), y: 90 },
                             { x: new Date("2004/02/06"), y: 88 }, { x: new Date("2004/09/06"), y: 75 },
                             { x: new Date("2005/02/11"), y: 63 }, { x: new Date("2005/09/11"), y: 70 },
							 { x: new Date("2006/02/11"), y: 55 }
		  ];
		  }
	  }
	  
	  virtualData(sender:any){
	    let data = this.GetDateTimeData(new Date("1/1/2009"), new Date("10/1/2009"));
            sender.model.series[0].dataSource = data.Open;
            sender.model.series[0].xName = "XValue";
            sender.model.series[0].yName = "YValue";
	  }
	  
	  GetDateTimeData(start, end) {
            let series1 = [], date, data1;
            let value = 30;

            for (let i = 0; start <= end; i++) {
                date = Date.parse(start);
                if (Math.random() > .5) {
                    value += (Math.random() * 10 - 5);
                } else {
                    value -= (Math.random() * 10 - 5)
                }
                if (value < 0) {
                    value = this.getRandomInt(20, 40);
                }
                let point1 = { XValue: new Date(date), YValue: Math.round(value) };
                new Date(start.setDate(start.getDate() + 1));
                series1.push(point1);
            }

            data1 = { Open: series1 };
            return data1;
        }
		
		getRandomInt(min:any, max:any) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
	 
	  
	  trendData(sender:any){
	     let data = this.getTrendlineData();
		sender.model.series[0].dataSource=data.Open;
		sender.model.series[0].xName="XValue";
		sender.model.series[0].yName= "YValue";
	  }
	  
	  powerTrendData(){
	    var data = [
		       { XValue: 1, YValue: 10 },
		       { XValue: 2, YValue: 50 },
		       { XValue: 3, YValue: 80 },
		       { XValue: 4, YValue: 110 },
		       { XValue: 5, YValue: 180 },
		       { XValue: 6, YValue: 220 },
		       { XValue: 7, YValue: 300 },
		       { XValue: 8, YValue: 370 },
		       { XValue: 9, YValue: 490 },
		       { XValue: 10, YValue: 500 }
		       ];
		 return data;
	  }
	  
	  verticalData(sender:any){
		window["count"]=0;
		window["intervalId"];
		window["main"] = this;
		for(let i=11;i<50;i=i+1)
		{
	     this.AddPoint(sender.model.series[0],window["count"]);
	     this.AddPoint(sender.model.series[1],window["count"]);
		 window["count"]++;
		}
        window["chartobj"] = sender;

       window["intervalId"] = window.setInterval(this.OnRefresh, 10);
	  }
	  
	  getWindData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		    { x: 'N', y: 0.1 }, { x: 'NNE', y: 0.1 }, { x: 'NE', y: 0.1 }, { x: 'ENE', y: 0.1 }, 
							  { x: 'E', y: 0.1 }, { x: 'ESE', y: 0.1 }, { x: 'SE', y: 0.1 }, { x: 'SSE', y: 0.1 },
                              { x: 'S', y: 0.1 }, { x: 'SSW', y: 0.1 }, { x: 'SW', y: 0.1 }, { x: 'WSW', y:0.1 }, 
							  { x: 'W', y: 0.1 }, { x: 'WNW', y: 0.1 }, { x: 'NW', y: 0.1 }, { x: 'NNW', y: 0.1 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: 'N', y: 0.8 }, { x: 'NNE', y: 0.7 }, { x: 'NE', y: 0.8 }, { x: 'ENE', y: 0.6 }, 
							 { x: 'E', y: 0.7 }, { x: 'ESE', y: 0.6 }, { x: 'SE', y: 0.5 }, { x: 'SSE', y: 0.7 },
                             { x: 'S', y: 0.9 }, { x: 'SSW', y: 1.9 }, { x: 'SW', y: 1.9 }, { x: 'WSW', y: 0.9 }, 
							 { x: 'W', y: 1.8 }, { x: 'WNW', y: 1.9 }, { x: 'NW', y: 1.4 }, { x: 'NNW', y: 0.9 }
		  ];
		 
		}
		else if(sender == "series3")
		{
		  return[
		   { x: 'N', y: 1 }, { x: 'NNE', y: 0.9 }, { x: 'NE', y: 0.7 }, { x: 'ENE', y: 0.9 }, 
							 { x: 'E', y: 0.9 }, { x: 'ESE', y: 0.8 }, { x: 'SE', y: 0.7 }, { x: 'SSE', y: 1.4 },
                             { x: 'S', y: 2 }, { x: 'SSW', y: 2 }, { x: 'SW', y: 2.2 }, { x: 'WSW', y: 1.8 }, 
							 { x: 'W', y: 1.6}, { x: 'WNW', y:1.2 }, { x: 'NW', y: 2}, { x: 'NNW', y: 1.8 }
		  ];
		 
		}
		else if(sender == "series4")
		{
		  return[
		     { x: 'N', y: 0.8 }, { x: 'NNE', y: 0.7 }, { x: 'NE', y: 0.8 }, { x: 'ENE', y: 1 },
							 { x: 'E', y: 0.6 }, { x: 'ESE', y: 0.5 }, { x: 'SE', y:0.4 }, { x: 'SSE', y: 0.4 },
                             { x: 'S', y: 1.2 }, { x: 'SSW', y: 2.5 }, { x: 'SW', y: 2 }, { x: 'WSW', y: 1.1 }, 
							 { x: 'W', y: 1.8 }, { x: 'WNW', y: 1.2 }, { x: 'NW', y: 2.5 }, { x: 'NNW', y: 1.1 }
		  ];
		 
		}
		else if(sender == "series5")
		{
		  return[
		   { x: 'N', y: 0.8 }, { x: 'NNE', y: 0.7 }, { x: 'NE', y: 0.5}, { x: 'ENE', y: 0.4 }, 
							 { x: 'E', y: 0.9 }, { x: 'ESE', y: 0.7 }, { x: 'SE', y: 0.6 }, { x: 'SSE', y: 0.5 },
							 { x: 'S', y: 0.6 }, { x: 'SSW', y: 2 }, { x: 'SW', y: 1.8 }, { x: 'WSW', y: 0.8 }, 
							 { x: 'W', y: 2.1 }, { x: 'WNW', y: 1.5 }, { x: 'NW', y:2 }, { x: 'NNW', y:0.8}
		  ];
		 
		}
		else if(sender == "series6")
		{
		  return[
		    { x: 'N', y: 0.3 }, { x: 'NNE', y:0.3 }, { x: 'NE', y: 1.1 }, { x: 'ENE', y: 0.9 }, 
							  { x: 'E', y: 0.5 }, { x: 'ESE', y: 0.3 }, { x: 'SE', y: 0.5 }, { x: 'SSE', y: 0.4 },
                              { x: 'S', y: 0.6 }, { x: 'SSW', y: 1}, { x: 'SW', y: 1 }, { x: 'WSW', y: 0.1 },
							  { x: 'W', y: 1 }, { x: 'WNW', y: 1.3 }, { x: 'NW', y: 1 }, { x: 'NNW', y: 0.1 }
		  ];
		 
		}
		else if(sender == "series7")
		{
		  return[
		     { x: 'N', y: 0.2 }, { x: 'NNE', y: 0.2 }, { x: 'NE', y: 1.2 }, { x: 'ENE', y: 1 },
							 { x: 'E', y: 0.7 }, { x: 'ESE', y: 0.8 }, { x: 'SE', y: 0.5 }, { x: 'SSE', y: 0.6 },
                             { x: 'S', y: 0.4 }, { x: 'SSW', y: 0.5 }, { x: 'SW', y: 0.4 }, { x: 'WSW', y: 0.4 },
							 { x: 'W', y: 0.4 }, { x: 'WNW', y: 1.1}, { x: 'NW', y: 0.3 }, { x: 'NNW', y: 0.4 }
		  ];
		 
		}
		else{
		  return[
		    { x: 'N', y: 0.2 }, { x: 'NNE', y: 0.2 },{ x: 'NE', y: 0.5 }, { x: 'ENE', y: 0.4 },
							 { x: 'E', y: 0.4 },{ x: 'ESE', y: 0.3 }, { x: 'SE', y: 0.3 }, { x: 'SSE', y: 0.2 },
							 { x: 'S', y: 0.4 }, { x: 'SSW', y: 0.3 }, { x: 'SW', y: 0.2 },{ x: 'WSW', y: 0.2 },
							 { x: 'W', y: 0.4 }, { x: 'WNW', y: 1.2 },{ x: 'NW', y: 0.7 }, { x: 'NNW', y: 0.2 }
		  ];
		  }
	  }
	  
	  OnRefresh():any{	
       if(window["chartobj"].model){
	    window["count"]+= 2;
        window["main"].AddPoint(window["chartobj"].model.series[0], window["count"]);
		window["main"].AddPoint(window["chartobj"].model.series[1], window["count"]);
        let chart = jQuery('#vertical').data("ejChart");
		if(chart != undefined){
		chart.model.series = window["chartobj"].model.series;
		chart.redraw();
		}
		} else { clearInterval(window["intervalId"]);}
     }
	
	AddPoint(series:any, count:any) 
	{
        if (series.points == undefined)
            series.points = [];	
         var date = new Date();
         date.setFullYear(2015);
         date.setMonth(8);
		 date.setDate(26);
		 date.setHours(8);
		 date.setMinutes(39);
		 date.setSeconds(count);
        series.points[series.points.length] = { x: date, y: this.getRandomNum(series) };
    }
	 
	  getTrendlineData():any{
	       let series1 = [];
		let yValue = [7.66, 8.03, 8.41,8.97,8.77,8.20,8.16,7.89,8.68,9.48,10.11,11.36,12.34,12.60,12.95,13.91,16.21,17.50,22.72,28.14,31.26,31.39,32.43,35.52,36.36,
                     41.33,43.12,45.00,47.23,48.62,46.60,45.28,44.01,45.17,41.20,43.41,48.32,45.65,46.61,53.34,58.53];
	    let j= 0;
        for(let i=1973; i<=2013; i++)	{
		   let point1 = { XValue: i, YValue: yValue[j] };
            series1.push(point1);
			j = j+1;
        }
		let data = { Open: series1 };
        return data;
	  }
	  
	  getRandomNum(series:any)
	{	    
        let value;
        if (window["count"] <= 50) {
           if(series.name=="Indonesia")
               value = Math.floor((Math.random() * (3 - (-3) + 1)) - 3);
           else
               value = Math.floor((Math.random() * (2 - (-2) + 1)) - 2);
        }
        else if (window["count"] <= 100)
        {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (9 - (-9) + 1)) - 9);
            else
                value = Math.floor((Math.random() * (9 - (-9) + 1)) - 9);

        }
        else if (window["count"] <= 150) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (6 - (-7) + 1)) - 7);
            else
                value = Math.floor((Math.random() * (7 - (-6) + 1)) - 6);
        }
        else if (window["count"] <= 220) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (2 - (-3) + 1)) - 3);
            else
                value = Math.floor((Math.random() * (3 - (-2) + 1)) - 2);
        }
        else if (window["count"] <= 270) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (1 - (-2) + 1)) - 2);
            else
                value = Math.floor((Math.random() * (2 - (-2) + 1)) - 2);
        }
        else if (window["count"] <= 320) {
            if (series.name == "Indonesia")
                value = Math.floor((Math.random() * (0 - (0) + 1)) - 0);
            else
                value = Math.floor((Math.random() * (0 - (0) + 1)) - 0);
        }
        else {

            clearInterval(window["intervalId"]);

        }
       
       return value;
    }
	  getTitleData():Array<any>{
	    return[
		  {x:'Germany',y:35.5}, {x:'China',y:18.3}, {x:'Italy',y:17.6}, {x:'Japan',y:13.6},
							{x:'US',y:12}, {x:'Spain',y:5.6}, {x:'France',y:4.6}, {x:'Australia',y:3.3},
							{x:'Belgium',y:3}, {x:'UK',y:2.9}
		];
	  }
	  
	 getStackingColumn100Data(sender:string):Array<any>{
	     if(sender == "series1"){
		   return[
		      { x: 2006, y:900 }, { x: 2007, y: 544}, { x: 2008, y: 880}, { x: 2009, y: 675 }, 
							 { x: 2010, y: 765}, { x: 2011, y:679}, { x: 2012, y: 770}
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		    { x: 2006, y:190 }, { x: 2007, y:226}, { x: 2008, y:194}, { x: 2009, y:250},
							 { x: 2010, y: 222}, { x: 2011, y:181}, { x: 2012, y:128}
		  ];
		 
		}
		else if(sender == "series3")
		{
		  return[
		      { x: 2006, y:250}, { x: 2007, y:145}, { x: 2008, y:190}, { x: 2009, y:220},
						     { x: 2010, y:225}, { x: 2011, y:135}, { x: 2012, y:152}
		  ];
		 
		}
		else{
		  return[
		       { x: 2006, y:150}, { x: 2007, y:120}, { x: 2008, y:115}, { x: 2009, y:125}, 
							  { x: 2010, y:132}, { x: 2011, y:137}, { x: 2012, y:110}
		  ];
		  }
	  }
	  
	  getStackingBarData(sender:string):Array<any>{
	    if(sender == "series1"){
		   return[
		     { x: "Jan", y: 6 }, { x: "Feb", y: 8 }, { x: "Mar", y: 12}, { x: "Apr", y: 15.5},
							 { x: "May", y: 20 }, { x: "Jun", y: 24 }, { x: "Jul", y: 28 }, { x: "Aug", y: 32},
                             { x: "Sep", y: 33}, { x: "Oct", y: 35}, { x: "Nov", y: 40}, { x: "Dec", y: 42 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		    { x: "Jan", y: 6 }, { x: "Feb", y: 8 }, { x: "Mar", y: 11}, { x: "Apr", y: 16},
							 { x: "May", y: 21 }, { x: "Jun", y: 25}, { x: "Jul", y: 27 }, { x: "Aug", y: 31},
                             { x: "Sep", y: 34},{ x: "Oct", y: 34}, { x: "Nov", y: 41 } , { x: "Dec", y: 42 }
		  ];
		 
		}
		else{
		  return[
		   { x: "Jan", y: -1 },{ x: "Feb", y: -1.5}, { x: "Mar", y: -2}, { x: "Apr", y: -2.5},
							 { x: "May", y: -3 },{ x: "Jun", y: -3.5 }, { x: "Jul", y: -4 },{ x: "Aug", y: -4.5 },
                             { x: "Sep", y: -5},{ x: "Oct", y: -5.5}, { x: "Nov", y: -6 } , { x: "Dec", y: -6.5 }
		  ];
		  }
	  }
	   
	  
	  getStackingArea100Data(sender:string):Array<any>{
	     if(sender == "series1"){
		   return[
		     { x: 2006, y: 34 }, { x: 2007, y: 20 }, { x: 2008, y: 40 }, { x: 2009, y: 51 }, { x: 2010, y: 26 }, 
							 { x: 2011, y: 37 }, { x: 2012, y: 54 }, { x: 2013, y: 44 }, { x: 2014, y: 48 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: 2006, y: 51 }, { x: 2007, y: 26 }, { x: 2008, y: 37 }, { x: 2009, y: 51 }, { x: 2010, y: 26 },
							  { x: 2011, y: 37 },{ x: 2012, y: 43 }, { x: 2013, y: 23 }, { x: 2014, y: 55 }
		  ];
		 
		}
		else if(sender == "series3")
		{
		  return[
		     { x: 2006, y: 14 }, { x: 2007, y: 34 }, { x: 2008, y: 73 }, { x: 2009, y: 51 }, { x: 2010, y: 26 }, 
							  { x: 2011, y: 37 },{ x: 2012, y: 12 }, { x: 2013, y: 16 }, { x: 2014, y: 34 }
		  ];
		 
		}
		else{
		  return[
		      { x: 2006, y: 37 }, { x: 2007, y: 16 }, { x: 2008, y: 53 }, { x: 2009, y: 51 }, { x: 2010, y: 26 }, 
							 { x: 2011, y: 37 },{ x: 2012, y: 54 }, { x: 2013, y: 44 }, { x: 2014, y: 23}
		  ];
		  }
	  }
	  
	  
	  getSplineAreaData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		     { x: 2002, y: 2.2 }, { x: 2003, y: 3.4 }, { x: 2004, y: 2.8 }, { x: 2005, y: 1.6 }, 
							 { x: 2006, y: 2.3 }, { x: 2007, y: 2.5 }, { x: 2008, y: 2.9 }, { x: 2009, y: 3.8 }, 
							 { x: 2010, y: 1.4 }, { x: 2011, y: 3.1 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: 2002, y: 2 }, { x: 2003, y: 1.7 }, { x: 2004, y: 1.8 }, { x: 2005, y: 2.1 }, 
						     { x: 2006, y: 2.3 },{ x: 2007, y: 1.7 }, { x: 2008, y: 1.5 }, { x: 2009, y: 2.8 }, 
							 { x: 2010, y: 1.5 }, { x: 2011, y: 2.3 }
		  ];
		 
		}
		else{
		  return[
		   { x: 2002, y: 0.8 }, { x: 2003, y: 1.3 }, { x: 2004, y: 1.1 }, { x: 2005, y: 1.6 }, 
							 { x: 2006, y: 2 }, { x: 2007, y: 1.7 }, { x: 2008, y: 2.3 }, { x: 2009, y: 2.7 }, 
							 { x: 2010, y: 1.1 }, { x: 2011, y: 2.3 }
		  ];
		  }
	  }
	
	getSmartLabelData(): Array<any> {
	  return[
	     { x: 2005, y: 28 }, { x: 2006, y: 24 }, { x: 2006, y: 24}, { x: 2006, y: 24 },
				         { x: 2007, y: 26 }, { x: 2008, y: 27 }, { x: 2008, y: 27 }, 
						 { x: 2009, y: 32 }, { x: 2010, y: 34 }, { x: 2010, y: 34 },
						 { x: 2010, y: 34 }, { x: 2010, y: 34 },
						 { x: 2011, y: 29 }, { x: 2012, y: 31 }
	  ];
	}
	ScatterData(sender):any{
	    let data:any = this.getScatterData();
        sender.model.series[0].dataSource = data[0].Series1;
		sender.model.series[0].xName= "XValue";
		sender.model.series[0].yName= "YValue";
        sender.model.series[1].dataSource = data[0].Series2;
		sender.model.series[1].xName= "XValue";
		sender.model.series[1].yName= "YValue";
	}
	
	getScatterData():any{
	    let series1:Array<Object>=[];
        let series2:Array<Object>=[];
		let data:Array<Object>=[];
        let value = 100;
        let value1 = 100;
        for (let i = 1; i < 100; i++)
		{
			if (Math.random() > .5)
			{
                value += Math.random();
            } 
			else 
			{
                value -= Math.random();
            }
            let point = { XValue: i, YValue: value };
            series1.push(point);
            }
            for (let j = 1; j < 100; j = j + 2)
			{
				if (Math.random() > .5)
				{
                    value1 += Math.random();
                }
				else 
				{
                    value1 -= Math.random();
                }
            let point1 = { XValue: j, YValue: value1 };
            series2.push(point1);
            }
			data.push({Series1:series1,Series2:series2});
			return data;
	}
	
	accData(sender:any)
	{
	   let data = this.getOnlineData();
        sender.model.series[0].dataSource = data;
		sender.model.series[0].xName= "xDate";
		sender.model.series[0].high= "High";
		sender.model.series[0].low= "Low";
		sender.model.series[0].open= "Open";
		sender.model.series[0].close= "Close";
		sender.model.series[0].volume= "Volume";
	}
	
	getOnlineData(): Array<any> {
	 return [{ "xDate": new Date("2007/01/03"), "High": 67.27, "Low": 65.75, "Close": 65.98, "Open": 65.75,"Volume": 7938200},
{ "xDate": new Date("2007/01/04"), "High": 65.70, "Low": 65.04, "Close": 65.11, "Open": 65.98, "Volume":10185300},
{ "xDate": new Date("2007/01/05"), "High": 65.05, "Low": 64.26, "Close": 64.97, "Open": 65.11, "Volume":10835800},
{ "xDate": new Date("2007/01/08"), "High": 65.16, "Low": 64.09, "Close": 64.29, "Open": 64.97, "Volume":9613400},
{ "xDate": new Date("2007/01/09"), "High": 62.73, "Low": 61.85, "Close": 62.44, "Open": 64.29, "Volume":17175000},
{ "xDate": new Date("2007/01/10"), "High": 62.02, "Low": 61.29, "Close": 61.47, "Open": 62.44, "Volume":18040600},
{ "xDate": new Date("2007/01/11"), "High": 62.75, "Low": 61.55, "Close": 61.59, "Open": 61.47, "Volume":13456300},
{ "xDate": new Date("2007/01/12"), "High": 64.78, "Low": 62.22, "Close": 64.64, "Open": 61.59, "Volume":8045100},
{ "xDate": new Date("2007/01/16"), "High": 64.50, "Low": 63.03, "Close": 63.28, "Open": 64.64, "Volume":8608900},
{ "xDate": new Date("2007/01/17"), "High": 63.70, "Low": 62.70, "Close": 63.59, "Open": 63.28, "Volume":15025500},
{ "xDate": new Date("2007/01/18"), "High": 64.45, "Low": 63.26, "Close": 63.61, "Open": 63.59, "Volume":10065800},
{ "xDate": new Date("2007/01/19"), "High": 64.56, "Low": 63.81, "Close": 64.52, "Open": 63.61, "Volume":6178200},
{ "xDate": new Date("2007/01/22"), "High": 64.84, "Low": 63.66, "Close": 63.91, "Open": 64.52, "Volume":5478500},
{ "xDate": new Date("2007/01/23"), "High": 65.30, "Low": 64.50, "Close": 65.22, "Open": 63.91, "Volume":7964300},
{ "xDate": new Date("2007/01/24"), "High": 65.36, "Low": 64.46, "Close": 65.06, "Open": 65.22, "Volume":5679300},
{ "xDate": new Date("2007/01/25"), "High": 64.54, "Low": 63.56, "Close": 63.65, "Open": 65.06, "Volume":10758300},
{ "xDate": new Date("2007/01/26"), "High": 64.03, "Low": 63.33, "Close": 63.73, "Open": 63.65, "Volume":5665900},
{ "xDate": new Date("2007/01/29"), "High": 63.40, "Low": 62.80, "Close": 62.83, "Open": 63.73, "Volume":5833000},
{ "xDate": new Date("2007/01/30"), "High": 63.75, "Low": 62.96, "Close": 63.60, "Open": 62.83, "Volume":3500800},
{ "xDate": new Date("2007/01/31"), "High": 63.64, "Low": 62.51, "Close": 63.51, "Open": 63.6 ,"Volume": 5044700},
{ "xDate": new Date("2007/02/01"), "High": 64.03, "Low": 63.53, "Close": 63.76, "Open": 63.51, "Volume":4871300},
{ "xDate": new Date("2007/02/02"), "High": 63.77, "Low": 63.01, "Close": 63.65, "Open": 63.76, "Volume":7040400},
{ "xDate": new Date("2007/02/05"), "High": 63.95, "Low": 63.58, "Close": 63.79, "Open": 63.65, "Volume":4727800},
{ "xDate": new Date("2007/02/06"), "High": 63.47, "Low": 62.92, "Close": 63.25, "Open": 63.79, "Volume":6334900},
{ "xDate": new Date("2007/02/07"), "High": 63.96, "Low": 63.21, "Close": 63.48, "Open": 63.25, "Volume":6823200},
{ "xDate": new Date("2007/02/08"), "High": 63.63, "Low": 62.55, "Close": 63.50, "Open": 63.48, "Volume":9718400},
{ "xDate": new Date("2007/02/09"), "High": 63.25, "Low": 62.82, "Close": 62.90, "Open": 63.5 ,"Volume":2827000},
{ "xDate": new Date("2007/02/12"), "High": 62.34, "Low": 62.05, "Close": 62.18, "Open": 62.9 ,"Volume": 4942700},
{ "xDate": new Date("2007/02/13"), "High": 62.86, "Low": 61.94, "Close": 62.81, "Open": 62.18, "Volume":4582800},
{ "xDate": new Date("2007/02/14"), "High": 63.06, "Low": 62.44, "Close": 62.83, "Open": 62.81, "Volume":12423900},
{ "xDate": new Date("2007/02/15"), "High": 63.16, "Low": 62.66, "Close": 63.09, "Open": 62.83, "Volume":4940500},
{ "xDate": new Date("2007/02/16"), "High": 62.89, "Low": 62.43, "Close": 62.66, "Open": 63.09, "Volume":6132300},
{ "xDate": new Date("2007/02/20"), "High": 62.39, "Low": 61.90, "Close": 62.25, "Open": 62.66, "Volume":6263800},
{ "xDate": new Date("2007/02/21"), "High": 61.69, "Low": 60.97, "Close": 61.50, "Open": 62.25, "Volume":5008300},
{ "xDate": new Date("2007/02/22"), "High": 61.87, "Low": 61.18, "Close": 61.79, "Open": 61.5 ,"Volume": 6662500},
{ "xDate": new Date("2007/02/23"), "High": 63.41, "Low": 62.72, "Close": 63.16, "Open": 61.79, "Volume":5254000},
{ "xDate": new Date("2007/02/26"), "High": 64.40, "Low": 63.65, "Close": 63.89, "Open": 63.16, "Volume":5356600},
{ "xDate": new Date("2007/02/27"), "High": 63.45, "Low": 61.60, "Close": 61.87, "Open": 63.89, "Volume":5052600},
{ "xDate": new Date("2007/02/28"), "High": 62.35, "Low": 61.30, "Close": 61.54, "Open": 61.87, "Volume":6266700},
{ "xDate": new Date("2007/03/01"), "High": 61.49, "Low": 60.33, "Close": 61.06, "Open": 61.54, "Volume":6190800},
{ "xDate": new Date("2007/03/02"), "High": 60.78, "Low": 59.84, "Close": 60.09, "Open": 61.06, "Volume":6452300},
{ "xDate": new Date("2007/03/05"), "High": 59.62, "Low": 58.62, "Close": 58.80, "Open": 60.09, "Volume":5954000},
{ "xDate": new Date("2007/03/06"), "High": 59.60, "Low": 58.89, "Close": 59.53, "Open": 58.8 ,"Volume": 6250000},
{ "xDate": new Date("2007/03/07"), "High": 60.96, "Low": 59.42, "Close": 60.68, "Open": 59.53, "Volume": 5307300},
{ "xDate": new Date("2007/03/08"), "High": 61.12, "Low": 60.65, "Close": 60.73, "Open": 60.68, "Volume": 6192900},
{ "xDate": new Date("2007/03/09"), "High": 61.19, "Low": 60.62, "Close": 61.19, "Open": 60.73, "Volume": 6355600},
{ "xDate": new Date("2007/03/12"), "High": 61.07, "Low": 60.54, "Close": 60.97, "Open": 61.19, "Volume": 2946300},
{ "xDate": new Date("2007/03/13"), "High": 61.05, "Low": 59.65, "Close": 59.75, "Open": 60.97, "Volume": 2257600},
{ "xDate": new Date("2007/03/14"), "High": 60.58, "Low": 55.99, "Close": 59.93, "Open": 59.75, "Volume": 2872000},
{ "xDate": new Date("2007/03/15"), "High": 60.12, "Low": 59.26, "Close": 59.73, "Open": 59.93, "Volume": 2737500},
{ "xDate": new Date("2007/03/16"), "High": 60.11, "Low": 59.35, "Close": 59.57, "Open": 59.73, "Volume": 2589700},
{ "xDate": new Date("2007/03/19"), "High": 60.40, "Low": 59.60, "Close": 60.10, "Open": 59.57, "Volume": 7315800},
{ "xDate": new Date("2007/03/20"), "High": 60.31, "Low": 59.76, "Close": 60.28, "Open": 60.1 ,"Volume": 6883900},
{ "xDate": new Date("2007/03/21"), "High": 61.68, "Low": 60.50, "Close": 61.50, "Open": 60.28, "Volume":5570700},
{ "xDate": new Date("2007/03/22"), "High": 62.72, "Low": 61.64, "Close": 62.26, "Open": 61.5 ,"Volume": 5976000},
{ "xDate": new Date("2007/03/23"), "High": 64.08, "Low": 63.10, "Close": 63.70, "Open": 62.26, "Volume":3641400},
{ "xDate": new Date("2007/03/26"), "High": 64.60, "Low": 63.99, "Close": 64.39, "Open": 63.7 ,"Volume": 6711600},
{ "xDate": new Date("2007/03/27"), "High": 64.45, "Low": 63.92, "Close": 64.25, "Open": 64.39, "Volume":6427000},
{ "xDate": new Date("2007/03/28"), "High": 65.40, "Low": 64.66, "Close": 64.70, "Open": 64.25, "Volume":5863200},
{ "xDate": new Date("2007/03/29"), "High": 65.86, "Low": 65.32, "Close": 65.75, "Open": 64.7 ,"Volume": 4711400},
{ "xDate": new Date("2007/03/30"), "High": 65.22, "Low": 64.63, "Close": 64.75, "Open": 65.75, "Volume":5930600},
{ "xDate": new Date("2007/04/02"), "High": 65.39, "Low": 64.76, "Close": 65.04, "Open": 64.75, "Volume":5602700},
{ "xDate": new Date("2007/04/03"), "High": 65.30, "Low": 64.78, "Close": 65.18, "Open": 65.04, "Volume":7487300},
{ "xDate": new Date("2007/04/04"), "High": 65.09, "Low": 64.42, "Close": 65.09, "Open": 65.18, "Volume":9085400},
{ "xDate": new Date("2007/04/05"), "High": 65.64, "Low": 65.20, "Close": 65.25, "Open": 65.09, "Volume":6455300},
{ "xDate": new Date("2007/04/09"), "High": 65.59, "Low": 64.74, "Close": 64.84, "Open": 65.25, "Volume":6135500},
{ "xDate": new Date("2007/04/10"), "High": 65.84, "Low": 65.42, "Close": 65.82, "Open": 64.84, "Volume":5846400},
{ "xDate": new Date("2007/04/11"), "High": 66.75, "Low": 65.85, "Close": 66.00, "Open": 65.82, "Volume":6681200},
{ "xDate": new Date("2007/04/12"), "High": 67.41, "Low": 66.17, "Close": 67.41, "Open": 66,    "Volume":8780000},
{ "xDate": new Date("2007/04/13"), "High": 68.61, "Low": 68.06, "Close": 68.41, "Open": 67.41, "Volume":10780900},
{ "xDate": new Date("2007/04/16"), "High": 68.91, "Low": 68.42, "Close": 68.76, "Open": 68.41, "Volume":2336450},
{ "xDate": new Date("2007/04/17"), "High": 69.58, "Low": 68.86, "Close": 69.01, "Open": 68.76, "Volume":11902000},
{ "xDate": new Date("2007/04/18"), "High": 69.14, "Low": 68.74, "Close": 68.94, "Open": 69.01, "Volume":7513300},
{ "xDate": new Date("2007/04/19"), "High": 68.73, "Low": 68.06, "Close": 68.65, "Open": 68.94, "Volume":12074800},
{ "xDate": new Date("2007/04/20"), "High": 68.79, "Low": 68.19, "Close": 68.67, "Open": 68.65, "Volume":8785400},
{ "xDate": new Date("2007/04/23"), "High": 69.75, "Low": 68.68, "Close": 68.74, "Open": 68.67, "Volume":11373200},
{ "xDate": new Date("2007/04/24"), "High": 68.82, "Low": 67.71, "Close": 67.76, "Open": 68.74, "Volume":12378300},
{ "xDate": new Date("2007/04/25"), "High": 69.05, "Low": 68.43, "Close": 69.00, "Open": 67.76, "Volume":8458700},
{ "xDate": new Date("2007/04/26"), "High": 68.39, "Low": 67.77, "Close": 68.02, "Open": 69, "Volume":   10779200},
{ "xDate": new Date("2007/04/27"), "High": 67.94, "Low": 67.22, "Close": 67.72, "Open": 68.02, "Volume":9665400},
{ "xDate": new Date("2007/04/30"), "High": 68.15, "Low": 67.32, "Close": 67.32, "Open": 67.72, "Volume":12258400},
{ "xDate": new Date("2007/05/01"), "High": 67.95, "Low": 67.13, "Close": 67.32, "Open": 67.32, "Volume":7563600},
{ "xDate": new Date("2007/05/02"), "High": 68.00, "Low": 67.16, "Close": 67.96, "Open": 67.32, "Volume":5509900},
{ "xDate": new Date("2007/05/03"), "High": 68.89, "Low": 68.34, "Close": 68.61, "Open": 67.96, "Volume":12135500},
{ "xDate": new Date("2007/05/04"), "High": 69.47, "Low": 68.30, "Close": 68.51, "Open": 68.61, "Volume":8462000},
{ "xDate": new Date("2007/05/07"), "High": 68.69, "Low": 68.21, "Close": 68.62, "Open": 68.51, "Volume":2011950},
{ "xDate": new Date("2007/05/08"), "High": 68.39, "Low": 65.80, "Close": 68.37, "Open": 68.62, "Volume":8536800},
{ "xDate": new Date("2007/05/09"), "High": 67.75, "Low": 65.00, "Close": 62.00, "Open": 68.37, "Volume":7624900},
{ "xDate": new Date("2007/05/10"), "High": 67.04, "Low": 65.04, "Close": 67.00, "Open": 67.62, "Volume":13694600},
{ "xDate": new Date("2007/05/11"), "High": 66.83, "Low": 65.02, "Close": 67.60, "Open": 66,    "Volume":8911200},
{ "xDate": new Date("2007/05/14"), "High": 66.98, "Low": 65.44, "Close": 66.73, "Open": 66.6 , "Volume":6679600},
{ "xDate": new Date("2007/05/15"), "High": 66.84, "Low": 65.10, "Close": 66.11, "Open": 66.73, "Volume":6451900},
{ "xDate": new Date("2007/05/16"), "High": 66.59, "Low": 65.69, "Close": 66.38, "Open": 66.11, "Volume":6739100},
{ "xDate": new Date("2007/05/17"), "High": 67.98, "Low": 66.51, "Close": 67.67, "Open": 66.38, "Volume":2103260},
{ "xDate": new Date("2007/05/18"), "High": 69.21, "Low": 68.59, "Close": 68.90, "Open": 67.67, "Volume":10551800},
{ "xDate": new Date("2007/05/21"), "High": 69.96, "Low": 69.27, "Close": 69.44, "Open": 68.9 , "Volume":5261100},
{ "xDate": new Date("2007/05/22"), "High": 69.01, "Low": 68.14, "Close": 68.18, "Open": 69.44, "Volume":5905400},
{ "xDate": new Date("2007/05/23"), "High": 68.93, "Low": 68.08, "Close": 68.14, "Open": 68.18, "Volume":10283600},
{ "xDate": new Date("2007/05/24"), "High": 68.60, "Low": 66.92, "Close": 67.25, "Open": 68.14, "Volume":5006800},
{ "xDate": new Date("2007/05/25"), "High": 67.77, "Low": 67.23, "Close": 67.77, "Open": 67.25, "Volume":4110000}
];
}   

  getAxisCrossingData():Array<any> {
   return[{ x: 2000, y: -.33, size: 5, fill: '#E94649' }, 
							 { x: 2000.5, y: .81, size: 4, fill: '#F6B53F' },
							 { x: 2001.5, y: .40, size: 9, fill: '#6FAAB0'}, 
							 { x: 2002, y: -.48, size: 2, fill: '#C4C24A' },
                             { x: 2002.5, y: -.19, size: 8, fill: '#FB954F' }, 
							 { x: 2003, y: .70, size: 11, fill: '#D9CEB2' },
							 { x: 2006, y: .62, size: 1, fill: '#FF8D8D' }, 
							 { x: 2007, y: .39, size: 9, fill: '#69D2E7' }, 
							 { x: 2008, y: .70, size: 6, fill: '#E27F2D' }, 
							 { x: 2009, y: .22, size: 7, fill: '#6A4B82' },
							 { x: 2010, y: .48, size: 7, fill: '#4B4B82' },
							 { x: 2006.5, y: -.62, size: 1, fill: '#CF8D8D' }, 
							 { x: 2007.5, y: -.39, size: 9, fill: '#B9D2E7' }, 
							 { x: 2008.5, y: -.70, size: 6, fill: '#A27F2D' }, 
							 { x: 2009.5, y: -.22, size: 7, fill: '#CA4D82' },
							 { x: 2010.5, y: -.48, size: 7, fill: '#B64A82' }];
   }  
   
   
   
	
	getStackingColumn3dData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		    { x: 2006, y: 8 }, { x: 2007, y: 5 }, { x: 2008, y: 4 }, { x: 2009, y: 12 },
							  { x: 2010, y: 16 }, { x: 2011, y: 6 }, { x: 2012, y: 13 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: 2006, y: 5 }, { x: 2007, y: 6 }, { x: 2008, y: 7 },  { x: 2009, y: 10 },
							  { x: 2010, y: 14 }, { x: 2011, y: 14 }, { x: 2012, y: 15 }
		  ];
		 
		}
		else if(sender == "series4")
		{
		  return[
		   { x: 2006, y: 14 }, { x: 2007, y: 14 }, { x: 2008, y: 13 }, { x: 2009, y: 13 }, 
							  { x: 2010, y: 13 }, { x: 2011, y: 13 }, { x: 2012, y: 12 }
		  ];
		 
		}
		else{
		  return[
		    { x: 2006, y: 17 }, { x: 2007, y: 16 }, { x: 2008, y: 13 }, { x: 2009, y: 10 },
							  { x: 2010, y: 12 }, { x: 2011, y: 13 }, { x: 2012, y: 14 }
		  ];
		  }
	  }
	
	getDateTimeData():Array<any> {
      return[
	      { "x": new Date("2000/06/11"), y: 10 }, { "x": new Date("2002/03/07"), y: 30 }, 
		  { "x": new Date("2004/03/06"), y: 15 }, { "x": new Date("2006/03/30"), y: 65 }, 
		  { "x": new Date("2008/03/08"), y: 90 }, { "x": new Date("2010/03/08"), y: 85 }
		  ];
   }
   
   getDateTimeCategoryData():Array<any> {
      return[
	       { x: new Date("2015/02/02"), y: 30 }, { x: new Date("2015/02/03"), y: 50 }, 
						   { x: new Date("2015/02/04"), y: 45 }, { x: new Date("2015/02/05"), y: 65 }, 
						   { x: new Date("2015/02/06"), y: 90 }, { x: new Date("2015/02/09"), y: 85 },
						   { x: new Date("2015/02/10"), y: 30 }, { x: new Date("2015/02/11"), y: 55 }, 
						   { x: new Date("2015/02/12"), y: 25 }, { x: new Date("2015/02/13"), y: 40 }, 
						   { x: new Date("2015/02/16"), y: 75 }, { x: new Date("2015/02/17"), y: 70 },
					       { x: new Date("2015/02/18"), y: 60 }, { x: new Date("2015/02/19"), y: 30 }, 
						   { x: new Date("2015/02/20"), y: 15 }
	  ];
  }  

  getDoughnutData1():Array<any> {
      return[
	  
	   { x: 'Labour', y: 28, text: '28%' }, { x: 'Legal', y: 10, text: '10%' },
							 { x: 'Production', y: 20, text: '20%' }, { x: 'License', y: 15, text: '15%' },
                             { x: 'Facilities', y: 23, text: '23%' }, { x: 'Taxes', y: 17, text: '17%' },
							 { x: 'Insurance', y: 12, text: '12%' }
];
}
 
  	getDrillData():Array<any>{
	    return[
		  { x: "SUV", y: 25, text: '25%' }, { x: "Car", y: 37, text: '37%' },
          { x: "Pickup", y: 15, text: '15%' }, { x: "Minivan", y: 23, text: '23%' }
		];
	}  
	
	getStackingColumn3d100Data(): Array<any> {
	return[
        { xName: '2006', yName: 8000, yName1: 5000, yName2: 1400  , yName3:1700},
        { xName: '2007', yName: 12000, yName1: 15000, yName2: 1350 , yName3:1600},
        { xName: '2008', yName: 20000, yName1: 19000, yName2: 12000 , yName3:9000 },
        { xName: '2009', yName: 21000, yName1: 25000, yName2: 14000 , yName3:12000 },
        { xName: '2010', yName: 28000, yName1: 26000, yName2: 11000 , yName3:14000 },
        { xName: '2011', yName: 29000, yName1: 30000, yName2: 20000 , yName3:19000}
        ];
    }
	
	getErrorData(): Array<any> {
	return[
	{ x:"Jan", y:7.0 }, { x:"Feb", y: 6.9  }, { x: "Mar", y:9.5 },{ x: "Apr", y: 14.5 }, { x: "May", y: 18.2  }, { x: "Jun", y:21.5 },
						{ x:"Jul", y:25.2 }, { x:"Aug", y: 26.5  }, { x: "Sep", y:23.3 },{ x: "Oct", y: 18.3 }, { x: "Nov", y: 13.9  }, { x: "Dec", y:9.6 }
	];
	}
	
	getExportData(): Array<any> {
	return[{ x: "John", y: 10000}, { x: "Jake", y: 12000 }, { x: "Peter", y: 18000 },
							 { x: "James", y: 11000}, { x: "Mary", y: 9700 }];
	}
	
	getEventsData():Array<any>{
	 return[{ x: "China", y: 1268 }, { x: "India", y: 1004 }, { x: "United States", y: 282 },
							 { x: "Indonesia", y: 213 }, { x: "Brazil", y: 176 }];
	}
	
	
	getEmptyData(): Array<any> {
	  return[
	     {
                            x: 0,
							y: 210, 
							fill: '#81B518',
                            marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border: {color: '#81B518', width: 1.5 }, 
								fill: 'white' ,
                                visible: true
							}
                        },						
						{
							x: 1,
							y: null,
							marker:
							{
							    shape: 'circle',
							    size:
                                {
                                    height: 12, width: 12
                                },
							    border: { color: '#afafaf', width: 1.5 },
							    fill: 'white',
							    visible: true
							}
						},						
                    	{
                            x: 2,
							y: 150,
							fill: '#ccdc00',
                            marker:
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                            border : {color: '#ccdc00', width: 1.5 },
							fill: 'white' ,
                            visible: true
							}
                        },						   
                        { 
							x: 3, 
							y: 200, 
							isEmpty: true,
							marker:
							{
							    shape: 'circle',
							    size:
                                {
                                    height: 12, width: 12
                                },
							    border: { color: '#afafaf', width: 1.5 },
							    fill: 'white',
							    visible: true
							} 
						},                           
						{
							x: 4, 
							y: 170, 
							fill: '#a6405a',
                            marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border :{color: '#a6405a', width: 1.5},
								fill: 'white' ,
                                visible: true
                            }
                        },                          
						{
                            x: 5, 
							y: 200, 
							fill: '#60056d', 
							marker:
                            {
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border :{color: '#60056d', width: 1.5 },
								fill: 'white',
                                visible: true
                            }
                        },						
                        {
							x: 6, 
							y: 140,
							isEmpty: true,
							marker:
							{
							    shape: 'circle',
							    size:
                                {
                                    height: 12, width: 12
                                },
							    border: { color: '#afafaf', width: 1.5 },
							    fill: 'white',
							    visible: true
							} 
						},						
                        {
                            x: 7,
							y: 120,
							fill: '#01599c',
                            marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border : {color: '#01599c', width: 1.5},
								fill: 'white' ,
                                visible: true
                            }
                        }, 						   
						{
                            x: 8, 
							y: 140, 
							fill: '#385815',
							marker: 
							{
                                shape: 'circle',
                                size:
                                {
                                    height: 12, width: 12
                                },
                                border:{color: '#385815',width: 1.5},
								fill: 'white' ,
                                visible: true
                            }
                        }				    
	  ];
	}
	
   crosshairData(sender):any{
        let data = this.GetCrossData();
        sender.model.series[1].dataSource =data.Open;
	    sender.model.series[1].xName= "XValue",
		sender.model.series[1].yName= "YValue";
        sender.model.series[0].dataSource =  data.Close;
		sender.model.series[0].xName= "XValue",
		sender.model.series[0].yName= "YValue";
   }
   
   getLocalizationData(): Array<any> {
   return[
      { x: new Date("2000/03/10"), y1: 33.85, y2:18.52  }, { x: new Date("2000/03/11"), y1: 32.77,y2:18.96  }, 
	  { x: new Date("2000/03/12"), y1: 33.97,y2:19.85 }, { x: new Date("2000/03/13"), y1: 32.96,y2:19.72 },
	  { x: new Date("2000/03/14"), y1: 35.19,y2:19.24  }
   ];
   }
   
   getLogData(): Array<any> {
   return[
      { x: 1990, y: 80 }, { x: 1991, y: 200 }, { x: 1992, y: 400 }, { x: 1993, y: 600 }, 
							 { x: 1994, y: 900 }, { x: 1995, y: 1400 }, { x: 1996, y: 2000 }, { x: 1997, y: 4000 }, 
							 { x: 1998, y: 6000 }, { x: 1999, y: 8000 }, { x: 2000, y: 9000 }
    ];
   } 
   
   mulitiColor(sender):any{    
        let data = this.getMuliColorData();
        sender.model.series[0].dataSource = data.Open;
        sender.model.series[0].xName = "XValue";
        sender.model.series[0].yName = "YValue";
        sender.model.series[0].pointColorMappingName = "color";
    }
	
	getMultiData():Array<any> {
	return[
	   { x: 'Jan', y: 1 }, { x: 'Feb', y: 5 }, { x: 'Mar', y: 2 }, { x: 'Apr', y: 8 }, 
							 { x: 'May', y: 30 }, { x: 'Jun', y: 18 }, { x: 'Jul', y: 32 }, { x: 'Aug', y: 20 },
                             { x: 'Sep', y: 16 }, { x: 'Oct', y: 10 }, { x: 'Nov', y: 4 }, { x: 'Dec', y: 5 }
	];
	  
	 }

    getMuliColorData():any{
	    let series1 = [];
        let value = 0;
		let color = ["red", "green", "fuchsia", "crimson", "blue", "darkorange", "deepskyblue", "mediumvioletred", "violet", "peru","gray","deeppink","navy"];
        for (let i = 0	; i < 201; i++)
		{
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            let point = { XValue: new Date(1998,i+10,i), YValue: value,color: color[Math.floor(i / 16)] };
            series1.push(point);
        }
        let data = { Open: series1 };
        return data;	    
    }   
   
   localData(sender):any{
     let data = this.GetLocalData();
		sender.model.series[0].dataSource=data.Open;
		sender.model.series[0].xName="XValue";
		sender.model.series[0].yName= "YValue";
		sender.model.series[1].dataSource = data.Close;
		sender.model.series[1].xName="XValue";
		sender.model.series[1].yName= "YValue";
   }
   GetLocalData():any{
   let series1 = [];
        let series2 = [];
        let value = 100;
        let value1 = 120;
        for (let i = 1; i < 1000; i++)
		{
			if (Math.random() > .5) 
			{
                value += Math.random();
                value1 += Math.random();
            } 
			else 
			{
                value -= Math.random();
                value1 -= Math.random();
            }
            let point1 = { XValue: new Date(1930, i+2, i), YValue: value };
            let point2 = { XValue: new Date(1930, i+2, i), YValue: value1 };
            series1.push(point1);
            series2.push(point2);
        }
		let data = { Open: series1, Close: series2 };
        return data;
	}
   
  
   GetCrossData():any{
     let series1 = [];
        let series2 = [];
        let value = 100;
        let value1 = 50;
        for (let i = 1; i < 2000; i++)
		{
            if (Math.random() > .5)
			{
                value += Math.random();
            }
			else 
			{
                value -= Math.random();
            }
            let point = { XValue: new Date(1900, i, 1), YValue: value };
            series1.push(point);
        }
        for (var j = 1; j < 2000; j++) 
		{
            if (Math.random() > .5) 
			{
                value1 += Math.random();
            } 
			else 
			{
                value1 -= Math.random();
            }
            let point1 = { XValue: new Date(2000, 1, j), YValue: value1 };
            series2.push(point1);
        }
        let data = { Open: series1, Close:series2 };
        return data;
   }
	
	 getDoughnutData():Array<any>{
        return [
		       { 'xValue': 'Watching TV', 'yValue1': 56 ,text:"Watching TV" },
               { 'xValue': 'Socializing', 'yValue1': 26 , text: "Socializing" },
               { 'xValue': 'Reading', 'yValue1': 3 ,text: "Reading" },
               { 'xValue': 'Sports', 'yValue1': 7 , text: "Sports" },
               { 'xValue': 'Others', 'yValue1': 8 ,text: "Others"   },
               ];
   }
   
    getPie3D():Array<any>{
        return[
          { xName: 'Housing', data: 'Housing', yName: 31 },
          { xName: 'Food', data: 'Food', yName: 16 },
          { xName: 'Transportation', data: 'Transportation', yName: 14 },
          { xName: 'Clothing', data: 'Clothing', yName: 6 },
          { xName: 'Health care', data: 'Health care', yName: 8 },
          { xName: 'Education', data: 'Education', yName: 17 },
          { xName: 'Miscellaneous', data: 'Miscellaneous', yName: 8 }
          ];
    }
	
	getFunnelData():Array<any>{
        return[
		  { x: 'Renewed', y: 18.2, text: '18.20%' }, { x: 'Subscribe', y: 27.3, text: '27.3%' },
                             { x: 'Support', y: 55.9, text: '55.9%' }, { x: 'Downloaded', y: 76.8, text: '76.8%' },
                             { x: 'Visited', y: 100, text: '100%' }
		];
		}
    getPolarData():Array<any>{
        return[
        { xName: 'N', yName: 42, yName1: 63, yName2: 80 },
        { xName: 'NE', yName: 28, yName1: 73, yName2: 88 },
        { xName: 'E', yName: 40, yName1: 58, yName2: 79 },
        { xName: 'SE', yName: 45, yName1: 65, yName2: 83 },
        { xName: 'S', yName: 20, yName1: 47, yName2: 78 },
        { xName: 'SW', yName: 40, yName1: 70, yName2: 90 },
        { xName: 'W', yName: 25, yName1: 45, yName2: 78 },
        { xName: 'NW', yName: 40, yName1: 70, yName2: 85 }
        ];
    }
	
	getIndexedData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		    { x: "Monday", y: 50 }, { x: "Tuesday", y: 40 }, { x: "Wednesday", y: 70 },
                           { x: "Thursday", y: 60 }, { x: "Friday", y: 50 },
                           { x: "Monday", y: 40 }, { x: "Tuesday", y: 50 }, { x: "Wednesday", y: 30 },
                           { x: "Thursday", y: 40 }, { x: "Friday", y: 70 },
                           { x: "Monday", y: 60 }, { x: "Tuesday", y: 30 }, { x: "Wednesday", y: 50 },
                           { x: "Thursday", y: 50 }, { x: "Friday", y: 40 },
                           { x: "Monday", y: 30 }, { x: "Tuesday", y: 55 }, { x: "Wednesday", y: 60 },
                           { x: "Thursday", y: 30 }, { x: "Friday", y: 60 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: "Monday", y: 60 }, { x: "Tuesday", y: 30 }, { x: "Wednesday", y: 40 },
                          { x: "Thursday", y: 80 }, { x: "Friday", y: 70 },
                          { x: "Monday", y: 50 }, { x: "Tuesday", y: 40 }, { x: "Wednesday", y: 50 },
                          { x: "Thursday", y: 50 }, { x: "Friday", y: 50 },
                          { x: "Monday", y: 70 }, { x: "Tuesday", y: 50 }, { x: "Wednesday", y: 60 },
                          { x: "Thursday", y: 30 }, { x: "Friday", y: 60 },
                          { x: "Monday", y: 40 }, { x: "Tuesday", y: 65 }, { x: "Wednesday", y: 70 },
                          { x: "Thursday", y: 40 }, { x: "Friday", y: 40 }
		   ];
		 
		}
		else{
		  return[
		    { x: "Monday", y: 40 }, { x: "Tuesday", y: 60 }, { x: "Wednesday", y: 40 },
                           { x: "Thursday", y: 30 }, { x: "Friday", y: 80 },
                           { x: "Monday", y: 30 }, { x: "Tuesday", y: 30 }, { x: "Wednesday", y: 60 },
                           { x: "Thursday", y: 40 }, { x: "Friday", y: 40 },
                           { x: "Monday", y: 50 }, { x: "Tuesday", y: 20 }, { x: "Wednesday", y: 30 },
                           { x: "Thursday", y: 70 }, { x: "Friday", y: 60 },
                           { x: "Monday", y: 20 }, { x: "Tuesday", y: 35 }, { x: "Wednesday", y: 50 },
                           { x: "Thursday", y: 20 }, { x: "Friday", y: 30 }
		   ];
		}
	  }
	  
	getMultiPieData(sender:string):Array<any>{
	  if(sender == "series1"){
		   return[
		         { x: 'Asia', y: 35.94, text: 'Asia 35.94%', fill: "#E94649" }, { x: 'America', y: 8.91, text: 'America 8.91%', fill: "#0FB954" },
                  { x: 'Europe', y: 2.88, fill: "#005277", text: 'Europe 2.88%' }, { x: 'Africa', y: 6.06, fill: "#F6B53F", text: 'Africa 6.06%' }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		    
                      { x: 'China', y: 16.8, text: 'China 16.8%', fill: "#E94649" },
                      { x: 'India', y: 15.6, text: 'India 15.6%', fill: "#E94649" },
                      { x: 'Indonesia', y: 3.54, text: 'Indonesia 3.54%', fill: "#E94649" },
                      { x: 'US', y: 4.42, text: 'US 2.5%', fill: "#0FB954" },
                      { x: 'Brazil', y: 2.82, text: 'Canada 2.5%', fill: "#0FB954" },
                      { x: 'Mexico', y: 1.67, text: 'Mexico 2%', fill: "#0FB954" },
                      { x: 'Germany', y: 1.11, text: 'Germany 1.11%', fill: "#005277" },
                      { x: 'France', y: 0.88, text: 'France 0.88%', fill: "#005277" },
                      { x: 'UK', y: 0.89, text: 'UK 0.89%', fill: "#005277" },
                      { x: 'Nigeria', y: 2.56, text: 'Nigeria 2.56%', fill: "#F6B53F" },
                      { x: 'Ethopia', y: 1.26, text: 'Ethopia 1.24%', fill: "#F6B53F" },
                      { x: 'Egypt', y: 2.24, text: 'Egypt 2.24%', fill: "#F6B53F" },
		  ];
		 
		}
	  }
	  
	 getRangeCoumnData(sender:string):Array<any>{
	    if(sender == "series1"){
		   return[
		     { x: 'Jan', low: 0.7, high: 6.1 }, { x: 'Feb', low: 1.3, high: 6.3 }, 
							 { x: 'Mar', low: 1.9, high: 8.5 }, { x: 'Apr', low: 3.1, high: 10.8 }, 
							 { x: 'May', low: 5.7, high: 14.4 },{ x: 'June', low: 8.4, high: 16.9 }, 
							 { x: 'July', low: 10.6, high: 19.2 }, { x: 'Aug', low: 10.5, high: 18.9 }, 
							 { x: 'Sep', low: 8.5, high: 16.1 }, { x: 'Oct', low: 6.0, high: 12.5 }, 
							 { x: 'Nov', low: 1.5, high: 6.9 }, { x: 'Dec', low: 5.1, high: 12.1 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: 'Jan', low: 1.7, high: 7.1 }, { x: 'Feb', low: 1.9, high: 7.7 },
							 { x: 'Mar', low: 1.2, high: 7.5 }, { x: 'Apr', low: 2.5, high: 9.8 }, 
							 { x: 'May', low: 4.7, high: 11.4 },{ x: 'June', low: 6.4, high: 14.4 },
                             { x: 'July', low: 9.6, high: 17.2 }, { x: 'Aug', low: 10.7, high: 17.9 },
							 { x: 'Sep', low: 7.5, high: 15.1 }, { x: 'Oct', low: 3.0, high: 10.5 }, 
							 { x: 'Nov', low: 1.2, high: 7.9 }, { x: 'Dec', low: 4.1, high: 9.1 }
		  ];
		 
		}
	  }
	  
	  
	  RangeArea(sender):any{
	    let data = this.getRangeAreaData();
				sender.model.series[0].dataSource = data.Open;
				sender.model.series[0].xName = "XValue";
				sender.model.series[0].high = "high";
				sender.model.series[0].low = "low";  
	  }
	  
	  getRangeAreaData():any{
	     let series1 = [];
				let series2 = [];
				let value = 70;
				let value1 = 50;
				for (let i = 1; i < 1000; i++) 
				{
					if (Math.random() > .5) 
						{
							value += Math.random();                        
						} 
					else 
						{
							value -= Math.random();                      
						}
				let point1 = { XValue: new Date(1930, i + 2, i), high: value,low:value+20 };                    
				series1.push(point1);                    
				}
				let data = { Open: series1 };
				return data;
	  }
	  
	  getRadarData(sender:string):Array<any>{
	   if(sender == "series1"){
		   return[
		    { x: "North", y: 42 }, { x: "NorthEast", y: 28 },
							 { x: "East", y: 40 }, { x: "SouthEast", y: 45 },
							 { x: "South", y: 20 }, { x: "SouthWest", y: 40},
							 { x: "West", y: 25 }, { x: "NorthWest", y: 40  }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: "North", y: 63 }, { x: "NorthEast", y: 73 },
							 { x: "East", y: 58 }, { x: "SouthEast", y: 65 },
							 { x: "South", y: 47 }, { x: "SouthWest", y: 70},
							 { x: "West", y: 45 }, { x: "NorthWest", y: 70}
		  ];
		 
		}
		else{
		  return[
		  { x: "North", y: 80 }, { x: "NorthEast", y: 88 },
							 { x: "East", y: 79 }, { x: "SouthEast", y: 83 },
                             { x: "South", y: 78 }, { x: "SouthWest", y: 90},
							 { x: "West", y: 78 }, { x: "NorthWest", y: 85 }
		  ];
		  }
	  }
	  
	  getMultiSelectionData(sender:string):Array<any>{
	  if(sender == "series1"){
		   return[
		    { x: 1971, y: 50 }, { x: 1972, y: 20 }, { x: 1973, y: 63 },{ x: 1974, y: 81 },{ x: 1975, y: 64 },
                                { x: 1976, y: 36 }, { x: 1977, y: 22 }, { x: 1978, y: 78 }, { x: 1979, y: 60 },{ x: 1980, y: 41 },
                                { x: 1981, y: 62 }, { x: 1982, y: 56 }, { x: 1983, y: 96 }, { x: 1984, y: 48 },{ x: 1985, y: 23 },
                                { x: 1986, y: 54 }, { x: 1987, y: 73 }, { x: 1988, y: 56 }, { x: 1989, y: 67 }, { x: 1990, y: 79 },
                                { x: 1991, y: 18 }, { x: 1992, y: 78 }, { x: 1993, y: 92 }, { x: 1994, y: 43 }, { x: 1995, y: 29 },
                                { x: 1996, y: 14 }, { x: 1997, y: 85 }, { x: 1998, y: 24 }, { x: 1999, y: 61 }, { x: 2000, y: 80 },
                                { x: 2001, y: 14 }, { x: 2002, y: 34 }, { x: 2003, y: 81 }, { x: 2004, y: 70 }, { x: 2005, y: 21 },
                                { x: 2006, y: 70 }, { x: 2007, y: 32 }, { x: 2008, y: 43 }, { x: 2009, y: 21 }, { x: 2010, y: 63 },
                                { x: 2011, y: 9 }, { x: 2012, y: 51 }, { x: 2013, y: 25 }, { x: 2014, y: 96 }, { x: 2015, y: 32 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		   { x: 1971, y: 23 }, { x: 1972, y: 67 }, { x: 1973, y: 83 }, { x: 1974, y: 43 }, { x: 1975, y: 8 },
                                { x: 1976, y: 41 }, { x: 1977, y: 56 }, { x: 1978, y: 31 }, { x: 1979, y: 29 }, { x: 1980, y: 87 },
                                { x: 1981, y: 43 }, { x: 1982, y: 12 }, { x: 1983, y: 38 }, { x: 1984, y: 67 }, { x: 1985, y: 49 },
                                { x: 1986, y: 67 }, { x: 1987, y: 83 }, { x: 1988, y: 16 }, { x: 1989, y: 89 }, { x: 1990, y: 18 },
                                { x: 1991, y: 46 }, { x: 1992, y: 39 }, { x: 1993, y: 68 }, { x: 1994, y: 87 }, { x: 1995, y: 45 },
                                { x: 1996, y: 42 }, { x: 1997, y: 28 }, { x: 1998, y: 82 }, { x: 1999, y: 13 }, { x: 2000, y: 83 },
                                { x: 2001, y: 26 }, { x: 2002, y: 57 }, { x: 2003, y: 48 }, { x: 2004, y: 84 }, { x: 2005, y: 64 },
                                { x: 2006, y: 24 }, { x: 2007, y: 82 }, { x: 2008, y: 37 }, { x: 2009, y: 68 }, { x: 2010, y: 37 },
                                { x: 2011, y: 35 }, { x: 2012, y: 81 }, { x: 2013, y: 38 }, { x: 2014, y: 51 }, { x: 2015, y: 58 }
		  ];
		 
		}
	  }
	  
	  getAxesData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		     { x: "Jan", y: 15 }, { x: "Feb", y: 20 }, { x: "Mar", y: 35 }, { x: "Apr", y: 40 }, 
							 { x: "May", y: 80 }, { x: "Jun", y: 70 }, { x: "Jul", y: 65 }, { x: "Aug", y: 55 }, 
							 { x: "Sep", y: 50 }, { x: "Oct", y: 30 }, { x: "Nov", y: 35 }, { x: "Dec", y: 35 }
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: "Jan", y: 33 }, { x: "Feb", y: 31 }, { x: "Mar", y: 30 }, { x: "Apr", y: 28 },
                             { x: "May", y: 29 }, { x: "Jun", y: 30 }, { x: "Jul", y: 33 }, { x: "Aug", y: 32 },
                             { x: "Sep", y: 34 }, { x: "Oct", y: 32 },  { x: "Nov", y: 32 }, { x: "Dec", y: 31 }
		  ];
		 
		}
		else{
		  return[
		    { x: "Jan", y: 28 }, { x: "Feb", y: 28.3 }, { x: "Mar", y: 28.7 }, { x: "Apr", y: 29 },
                             { x: "May", y: 29.5 }, { x: "Jun", y: 29 }, { x: "Jul", y: 28.9 }, { x: "Aug", y: 28.4 },
                             { x: "Sep", y: 28.6 }, { x: "Oct", y: 28 }, { x: "Nov", y: 28.2 }, { x: "Dec", y: 28 }
		  ];
		  }
	  }
	  
	  getLegendData():Array<any>{
	    return[
		  { x: 'United States', y: 84, fill: "#FF0066" },{ x: 'United Kingdom', y: 89, fill: "#CC3399" }, 
						{ x: 'United Arab Emirates', y: 88, fill: "#6699FF" }, { x: 'New Caledonia', y: 66, fill: "#005277" },
                        { x: 'French Polynesia', y: 56, fill: "#CC99FF" },{ x: 'Switzerland', y: 86, fill: "#C4C24A" }, 
                        { x: 'Singapore', y: 73, fill: "#E27F2D" },{x: 'New Zealand', y: 82, fill: "#F6B53F" },
                        { x: 'Saudi Arabia', y: 60, fill: "#6A4B82" }, { x: 'Sweden', y: 94, fill: "#69D2E7" }, 
                        { x: 'Indonesia', y: 60, fill: "#E94649" },  { x: 'Philippines', y: 37, fill: "#FB954F" },
                        { x: 'South Africa', y: 48, fill: "#FF9900" },  { x: 'South Korea', y: 84, fill: "#009933" },
                        { x: 'Hong Kong', y: 74, fill:"#6FAAB0" },{ x: 'Netherlands', y: 93, fill: "#8BC652" }
		];
		}
	  
	  getLabelData(sender:string):Array<any>{
        if(sender == "series1"){
		   return[
		    { x: 2005, y: 28.1},
							 { x: 2006, y: 29.2 }, { x: 2007, y: 33.9 }, { x: 2008, y: 36 }, { x: 2009, y: 32.4 }, 
							 { x: 2010, y: 32 },{ x: 2011, y: 32.8}
		   ];
		}
		else if(sender == "series2")
		{
		  return[
		     { x: 2005, y: 21.8}, 
							 { x: 2006, y: 21.8 }, { x: 2007, y: 24.9 }, { x: 2008, y: 28.5 }, { x: 2009, y: 27.2 }, 
							 { x: 2010, y: 23.4 }, { x: 2011, y: 23.4}
		   ];
		 
		}
		else{
		  return[
		    { x: 2005, y: 18.1 },
							 { x: 2006, y: 18.2 }, { x: 2007, y: 21 }, { x: 2008, y: 22.1 }, { x: 2009, y: 21.5 }, 
							 { x: 2010, y: 18.9 }, { x: 2011, y: 21.3}
		   ];
		}
	  }
	
	getInversedData():Array<any>{
	   return[
	     { x: new Date("2005/02/01"), y: 43.47  }, { x: new Date("2006/02/01"), y:  45.19 },
                             { x: new Date("2007/02/01"), y: 39.42 }, { x: new Date("2008/11/01"), y: 48.88 }, 
							 { x: new Date("2009/11/01"), y: 46.37 }, { x: new Date("2010/02/22"), y: 44.17 }, 
							 { x: new Date("2011/02/22"), y: 57.15 }, { x: new Date("2012/02/22"), y: 54.73 }
	   ];
	  }
	
	getOpenCloseData():Array<any>{
	 return[{ x: new Date("1950/1/12"), high: 125.45, low: 70.23, open: 125.22, close: 90.44 }, 
							 { x: new Date("1953/1/12"), high: 150.99, low: 60.23, open: 120.55, close: 70.90 },
							 { x: new Date("1956/1/12"), high: 200.19, low: 130.37, open: 160.13, close: 190.78 }, 
							 { x: new Date("1959/1/12"), high: 160.23, low: 90.16, open: 140.38, close: 110.24 },
							 { x: new Date("1962/1/12"), high: 200.89, low: 100.23, open: 180.90, close: 120.29 },
							 { x: new Date("1965/1/12"), high: 100, low: 45, open: 70, close: 50 }, 
							 { x: new Date("1968/1/12"), high: 150, low: 70, open: 140, close: 130 }, 
							 { x: new Date("1971/1/12"), high: 90, low: 60, open: 65, close: 80 },
							 { x: new Date("1974/1/12"), high: 225, low: 170, open: 175, close: 220 },
							 { x: new Date("1977/1/12"), high: 250, low: 180, open: 223, close: 190 },
							 { x: new Date("1980/1/12"), high: 200.12, low: 140.69, open: 160.74, close: 190.28 },
							 { x: new Date("1983/1/1"), high: 160.17, low: 90.67, open: 140.26, close: 110.34 },
							 { x: new Date("1986/1/12"), high: 200, low: 100, open: 180, close: 120 },
							 { x: new Date("1989/1/12"), high: 130.12, low: 95.78, open: 120.38, close: 100.23 }, 
							 { x: new Date("1991/1/12"), high: 100.49, low: 70.19, open: 92.79, close: 75.23 },
							 { x: new Date("1994/1/12"), high: 50.90, low: 85.23, open: 65.89, close: 80.45 },
							 { x: new Date("1997/1/12"), high: 185.45, low: 110.90, open: 130.23, close: 170.56 },
							 { x: new Date("2000/1/12"), high: 90.89, low: 30.23, open: 80.15, close: 50.57 },
							 { x: new Date("2003/1/12"), high: 200, low: 140, open: 160, close: 190 }, 
							 { x: new Date("2006/1/12"), high: 170, low: 90, open: 140, close: 110 },
							 { x: new Date("2008/1/12"), high: 200, low: 100, open: 180, close: 120 }];
	}
	
   getHiloData():Array<any>{
	 return[{ x: 'India', high: 100, low: 70 }, { x: 'Japan', high: 170, low: 90 }, 
							 { x: 'Argentina', high: 240, low: 170 }, { x: 'Australia', high: 200, low: 290 },
							 { x: 'Canada', high: 200, low: 110 }, { x: 'Poland', high: 160, low: 70 }, 
							 { x: 'Russia', high: 200, low: 100 }, { x: 'Mexico', high: 190, low: 80 }, 
							 { x: 'Turkey', high: 150, low: 90 }, { x: 'Indonesia', high: 180, low: 120 },
                             { x: 'Spain', high: 220, low: 150 }, { x: 'France', high: 210, low: 130 }, 
							 { x: 'Germany', high: 110, low: 75}
			];
	}
	
    getPyramidData():Array<any>{
        return[
            { xName: 'Renewed', yName: 18.2 },
            { xName: 'Subscribe', yName: 27.3 },
            { xName: 'Downloaded', yName: 76.8 },
            { xName: 'Visited', yName: 100 }
        ];
    }
	getColumnData():Array<any>{
		return[
		    { xName: 'USA', yName: 50, yName1: 70, yName2: 45 },
		    { xName: 'China', yName: 40, yName1: 60, yName2: 55 },
		    { xName: 'Japan', yName: 70, yName1: 60, yName2: 50 }
		
		];
	}
    getColumn3D():Array<any>{
        return[
            { xName: 'Calcium sulfate(Gypsum hydrated)', yName: 11, yName1: 6 },
            { xName: 'Phosphorus Pentachloride', yName: 20, yName1: 26 },
            { xName: 'Sodium permanganate monohydrate', yName: 8, yName1: 7 },
            { xName: 'Magnesium permanganate', yName: 9, yName1: 32 },
            { xName: 'Pottasium permanganate', yName: 8.5, yName1: 9.6 },
            { xName: 'Sodium bicarbonate', yName: 6.3, yName1: 8.1 }
        ];
    }
    getCombinationData():Array<any>{
        return[
        { xName: 'Jan', yName: 45, yName1: 10 },
        { xName: 'Feb', yName: 100, yName1: 30 },
        { xName: 'March', yName: 25, yName1: 10 },
        { xName: 'April', yName: 100, yName1: 70 },
        { xName: 'May', yName: 85, yName1: 50 },
        { xName: 'June', yName: 140, yName1: 140 }
     ];
    }
    getBarData():Array<any>{
        return[
        { xName: 2006, yName: 7.8, yName1: 4.8 },
        { xName: 2007, yName: 7.2, yName1: 4.6 },
        { xName: 2008, yName: 6.8, yName1: 7.2 },
        { xName: 2009, yName: 10.7, yName1: 9.3 },
        { xName: 2010, yName: 10.8, yName1: 9.7 },
        { xName: 2011, yName: 9.8, yName1: 9 }
    ];
    }
    GetData():any {
        let series1 = [];
        let value = 100;
        for (let i = 1; i < 250; i++) {
            if (Math.random() > .5) {
                value += Math.random();
            } else {
                value -= Math.random();
            }
            let point = { XValue: new Date(1996, i + 2, i), YValue: value };
            series1.push(point);
        }
        let data = { Open: series1 };
        return data;
    }
    datalabel():any{
        return{
                visible: true, shape: 'none', textMappingName: 'text',
                connectorLine: { type: 'bezier', color: 'black' },
                font: { size: '20px', color: 'white' }
        };
    }
    liveData(sender):any{
        let num = 100, data = [], data1 = [];
        let i;
        let value = 10;
        let chartData = null;
        let chartData1 = null;
        let value1 = 15;
        for (i = 0; i < num; i++) {
            if (Math.random() > .5) {
                if (value < 45) {
                    value += Math.random() * 2.0;
                } else {
                    value -= 2.0;
                }

                if (value1 < 40) {
                    value1 += Math.random() * 1.8;
                } else {
                    value1 -= 2.0;
                }
            } else {
                if (value > 5) {
                    value -= Math.random() * 2.0;
                } else {
                    value += 2.0;
                }
                if (value1 > 5) {
                    value1 -= Math.random() * 1.8;
                } else {
                    value1 += 2.0;
                }
            }
            data[i] = {
                x: i.toString(), y: value
            };
            data1[i] = {
                x: i.toString(), y: value1 + 10
            };
        }
        chartData = data;
        chartData1 = data1;
        sender.model.series[0].points = chartData;
        sender.model.series[1].points = chartData1;


        setInterval((count) => {
        let chartobj = jQuery('#default_chart_sample_12').data('ejChart');
        if (Math.random() > .5) {
                if (value < 45) {
                    value += Math.random() * 2.0;
                } else {
                    value -= 2.0;
                }

                if (value1 < 40) {
                    value1 += Math.random() * 1.8;
                } else {
                    value1 -= 2.0;
                }
            } else {
                if (value > 5) {
                    value -= Math.random() * 2.0;
                } else {
                    value += 2.0;
                }
                if (value1 > 5) {
                    value1 -= Math.random() * 1.8;
                } else {
                    value1 += 2.0;
                }
            }
            chartData.push({ x: i.toString(), y: value });
            chartData1.push({ x: i.toString(), y: value1 + 10 });
            i++;
            chartData.shift();
            chartData1.shift();
            if (chartobj && chartobj.model) {
                     chartobj.model.series[0].points = chartData;
                     chartobj.model.series[1].points = chartData1;
             }
			 if(chartobj != undefined)
               chartobj.redraw();

      }, 200);
    }
	getBubbleData():Array<any>{
		return[
                { x: 92.2, y: 7.8, size: 1.347, fill: '#E94649', text: 'China' },
                { x: 74, y: 6.5, size: 1.241, fill: '#F6B53F', text: 'India' },
                { x: 90.4, y: 6.0, size: 0.238, fill: '#6FAAB0', text: 'Indonesia' },
                { x: 99.4, y: 2.2, size: 0.312, fill: '#C4C24A', text: 'US' },
                { x: 88.6, y: 1.3, size: 0.197, fill: '#FB954F', text: 'Brazil' },
                { x: 54.9, y: 3.7, size: 0.177, fill: '#D9CEB2', text: 'Pakistan' },
                { x: 99, y: 0.7, size: 0.0818, fill: '#FF8D8D', text: 'Germany' },
                { x: 72, y: 2.0, size: 0.0826, fill: '#69D2E7', text: 'Egypt' },
                { x: 99.6, y: 3.4, size: 0.143, fill: '#E27F2D', text: 'Russia' },
                { x: 99, y: 0.2, size: 0.128, fill: '#6A4B82', text: 'Japan' },
                { x: 86.1, y: 4.0, size: 0.115, fill: '#F6B53F', text: 'Mexico' },
                { x: 92.6, y: 6.6, size: 0.096, fill: '#C4C24A', text: 'Philippines' },
                { x: 61.3, y: 14.5, size: 0.162, fill: '#FF8D8D', text: 'Nigeria' },
                { x: 56.8, y: 6.1, size: 0.151, fill: '#69D2E7', text: 'Bangladesh' }

         ];
	}
	getCandleData():Array<any>{
		return[
            { xName: new Date(1950, 1, 12), high: 125, low: 70, open: 115, close: 90 },
            { xName: new Date(1953, 1, 12), high: 150, low: 60, open: 120, close: 70 },
            { xName: new Date(1956, 1, 12), high: 200, low: 140, open: 160, close: 190 },
            { xName: new Date(1959, 1, 12), high: 160, low: 90, open: 140, close: 110 },
            { xName: new Date(1962, 1, 12), high: 200, low: 100, open: 180, close: 120 },
            { xName: new Date(1965, 1, 12), high: 100, low: 45, open: 70, close: 50 },
            { xName: new Date(1968, 1, 12), high: 150, low: 70, open: 140, close: 130 },
            { xName: new Date(1971, 1, 12), high: 90, low: 60, open: 65, close: 80 },
            { xName: new Date(1974, 1, 12), high: 225, low: 170, open: 175, close: 220 },
            { xName: new Date(1977, 1, 12), high: 250, low: 180, open: 223, close: 190 },
            { xName: new Date(1980, 1, 12), high: 200, low: 140, open: 160, close: 190 },
            { xName: new Date(1983, 1, 12), high: 160, low: 90, open: 140, close: 110 },
            { xName: new Date(1986, 1, 12), high: 200, low: 100, open: 180, close: 120 },
            { xName: new Date(1989, 1, 1), high: 130, low: 95, open: 120, close: 100 },
            { xName: new Date(1991, 1, 12), high: 100, low: 70, open: 92, close: 75 },
            { xName: new Date(1994, 1, 12), high: 50, low: 85, open: 65, close: 80 },
            { xName: new Date(1997, 1, 12), high: 185, low: 110, open: 130, close: 170 },
            { xName: new Date(2000, 1, 12), high: 90, low: 30, open: 80, close: 50 },
            { xName: new Date(2003, 1, 12), high: 200, low: 140, open: 160, close: 190 },
            { xName: new Date(2006, 1, 12), high: 170, low: 90, open: 140, close: 110 },
            { xName: new Date(2008, 1, 12), high: 200, low: 100, open: 180, close: 120 }
        ];
	}
	getPieData():Array<any>{
		return[
			{ xName: 'Walmart', yName: 13, text: '13%' },
			{ xName: 'Apple', yName: 25, text: '25%' },
			{ xName: 'Best Buy', yName: 12, text: '12%' },
			{ xName: 'Target', yName: 7, text: '7%' },
			{ xName: 'Amazon', yName: 10, text: '10%' },
			{ xName: 'Wenger', yName: 13, text: '13%' },
			{ xName: 'Others', yName: 20, text: '20%' }
		];
	}
	
	getPieofPieData():Array<any>{
		return[
		 { x: 'Saudi Arabia', y: 58, text: '58%' },
		 { x: 'Persian Gulf', y: 15, text: '15%' },
         { x: 'Canada', y: 13, text: '13%' },
		 { x: 'Venezuela', y: 8, text: '8%' },
         { x: 'Mexico', y: 3, text: '3%' },
         { x: 'Russia', y: 2, text: '2%' },                             							 
		 { x: 'Miscellaneous', y: 1, text: '1%' }
		];
	}
    getDataSource1(): Array<any> {
        return [12, 14, 11, 12, 11, 15, 12, 10, 11, 12, 15, 13, 12, 11, 10, 13, 15, 12, 14, 16, 14, 12, 11];
    }
    getDataSource2(): Array<any> {
        return [2, 6, -1, 1, 12, 5, -2, 7, -3, 5, 8, 10, ];
    }
    getDataSource3(): Array<any> {
        return [12, -10, 11, 8, 17, 6, 2, -17, 13, -6, 8, 10, ];
    }
    getDataSource4(): Array<any> {
        return [12, 15, -11, 13, 17, 0, -12, 17, 13, -15, 8, 10, ];
    }
    getDataSource5(): Array<any> {
        return [4, 6, 7];
    }
    getDataSource6(): Array<any> {
        return [8, 9, 1, ];
    }
    getDataSource7(): Array<any> {
        return [2, 3, 5];
    }
    getDataSource8(): Array<any> {
        return [10, 12, 11];
    }
    
    getRangeData(): Array<any>{
        return[
            {XValue: new Date(2010, 0, 1), YValue: 5, YValue1:5},
            {XValue: new Date(2010, 0, 20), YValue: 5, YValue1:15},
            {XValue: new Date(2010, 0, 40), YValue: 20, YValue1:20 },
                {XValue: new Date(2010, 0, 80), YValue: 15, YValue1:25   },
                {XValue: new Date(2010, 0, 80), YValue: 15, YValue1:20  },
                {XValue: new Date(2010, 0, 80), YValue: 15, YValue1:35   },
			    {XValue: new Date(2010, 0, 100), YValue: 20, YValue1:15  },
			    {XValue: new Date(2010, 0, 120), YValue: 15, YValue1:30  },
				{XValue: new Date(2010, 0, 140), YValue: 15, YValue1:10  },
				{XValue: new Date(2010, 0, 160), YValue: 30, YValue1:35 },
				{XValue: new Date(2010, 0, 180), YValue: 20, YValue1:25  },
				{XValue: new Date(2010, 0, 200), YValue: 25, YValue1:10  },
				{XValue: new Date(2010, 0, 220), YValue: 15, YValue1:25  },
				{XValue: new Date(2010, 0, 240), YValue: 20, YValue1:35 },
				{XValue: new Date(2010, 0, 260), YValue: 15, YValue1:15   },
				{XValue: new Date(2010, 0, 280), YValue: 25, YValue1:25   },
				{XValue: new Date(2010, 0, 300), YValue: 5, YValue1:35   },
				{XValue: new Date(2010, 0, 320), YValue: 35, YValue1:35   },
				{XValue: new Date(2010, 0, 340), YValue: 25, YValue1:15  },
				{XValue: new Date(2010, 0, 363), YValue: 15, YValue1:20  },
				{XValue: new Date(2011, 0, 1), YValue: 5, YValue1:25   },
                {XValue: new Date(2011, 0, 20), YValue: 5, YValue1:20    },
				{XValue: new Date(2011, 0, 40), YValue: 20, YValue1:35   },
				{XValue: new Date(2011, 0, 80), YValue: 15, YValue1:15   },
				{XValue: new Date(2011, 0, 100), YValue: 20, YValue1:30  },
				{XValue: new Date(2011, 0, 120), YValue: 15, YValue1:10  },
				{XValue: new Date(2011, 0, 140), YValue: 15, YValue1:35   },
				{XValue: new Date(2011, 0, 160), YValue: 30, YValue1:25  },
				{XValue: new Date(2011, 0, 180), YValue: 20, YValue1:10  },
				{XValue: new Date(2011, 0, 200), YValue: 25,  YValue1:25 },
				{XValue: new Date(2011, 0, 220), YValue: 15, YValue1:35 },
				{XValue: new Date(2011, 0, 240), YValue: 20, YValue1:15  },
				{XValue: new Date(2011, 0, 260), YValue: 15, YValue1:25   },
				{XValue: new Date(2011, 0, 280), YValue: 25, YValue1:35   },
				{XValue: new Date(2011, 0, 300), YValue: 5, YValue1:25 },
				{XValue: new Date(2011, 0, 320), YValue: 35, YValue1:15   },
				{XValue: new Date(2011, 0, 340), YValue: 25, YValue1:20   },
				{XValue: new Date(2012, 0, 60), YValue: 15, YValue1: 30  }       
        ];
    }
    
}