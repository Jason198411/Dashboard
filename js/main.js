var btnchart = document.querySelector(".chart-option");
var btnarrays = document.querySelectorAll(".chart-option .btn");
var lcarrays = document.querySelectorAll(".lc");
var altercancle = document.querySelector(".alter img");
var alter = document.querySelector(".alter");
var sendbtn = document.querySelector(".message button");

// toggle line chartsendbtns and toggle buttons' color
btnchart.addEventListener("click", (e)=>{
	let clicked = e.target;	
	if(clicked.className != "chart-option"){
		for(var i = 0; i < btnarrays.length; i++){
			if(btnarrays[i].className === clicked.className){
				for(var j = 0; j < lcarrays.length; j++){
					lcarrays[j].style.display = "none"
				}
				lcarrays[i].style.display="block";
			}
			btnarrays[i].style.backgroundColor = "#fff";
		}
		clicked.style.backgroundColor = "#3b9b50";
	}
});

// alter box 
altercancle.addEventListener("click", (e)=>{
	alter.style.display = "none";
});
// send button click
sendbtn.addEventListener("click", (e)=>{	
	e.preventDefault();
    let textArea = document.querySelector('.message textarea');
    let inputUser = document.querySelector('.message input');

    if(textArea.value === "" & inputUser.value === ""){
    	alert("Please fill in the message and select a user!");
    }else if(textArea.value === ""){
    	alert("Please fill in the message!");	
    }else if(inputUser.value === ""){
    	alert("Please select a user!");
    }else {
    	alert("The message was sent!");
    }	  
});

// display line chart
var lch = document.getElementById("line-chart-hourly").getContext('2d');
var myChart = new Chart(lch, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6","7", "8", "9", "9", "11", "12","13", "14", "15", "16", "17", "18","19", "20", "21", "22", "23", "24"],
        datasets: [{
            label: '',
            data: [19, 13, 16, 21, 32, 33, 45, 50, 59, 54, 49, 40, 32, 35, 40, 38, 50, 59, 60, 50, 43, 33, 29, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: {
            display: false,

        }
    }
});


var lcd = document.getElementById("line-chart-daily").getContext('2d');
var myChart = new Chart(lcd, {
    type: 'line',
    data: {
        labels: ["Sun", "Mon", "Tus", "Wen", "Thu", "Fri", "Sat"],
        datasets: [{
            label: '',
            data: [532, 835, 785, 785, 789, 845, 624],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: {
            display: false,

        }
    }
});


var lcw = document.getElementById("line-chart-weekly").getContext('2d');
var myChart = new Chart(lcw, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: '',
            data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: {
            display: false,

        }
    }
});


var lcm = document.getElementById("line-chart-monthly").getContext('2d');
var myChart = new Chart(lcm, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5", "6","7", "8", "9", "9", "11", "12"],
        datasets: [{
            label: '',
            data: [3500, 4250, 5000, 6500, 7000, 8500, 4750, 6250, 4750, 6250, 3750, 8763],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255,99,132,1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
      legend: {
            display: false,

        }
    }
});


var bc = document.getElementById("bar-chart").getContext('2d');
var myChart = new Chart(bc, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '',
            data: [50, 180, 210, 160, 200, 100, 80],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    
    options: {
      legend: {
            display: false,
        }

    }
    
});


var pc = document.getElementById("pei-chart").getContext('2d');
var mobileUsers = new Chart(pc, {
    type: 'doughnut',
    data: {
      labels: ["Phone", "Tablet", "Desktop"],
      datasets: [{
          label: '# of Votes',
          data: [15, 15, 70],
          backgroundColor: [
              'rgba(145, 199, 148, 1)',
              'rgba(130, 175, 189, 1)',
              'rgba(116, 118, 186, 1)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1
      }]

    },
    options: {
      legend: {
            display: true,
        }
    }
});