


function task4() {
	var salaries = {
		"Вася": 100,
		"Петя": 300,
		"Даша": 250
	};
	var sum = 0;
	for (var name in salaries) {
		sum += salaries[name];
	}
	alert( sum );
	document.write( sum );
}



function task5() {
	var salaries = {
		"Вася": 100,
		"Петя": 300,
		"Даша": 250
	};
	var max = 0;
	var maxName = "";
	for (var name in salaries) {
		if (max < salaries[name]) {
			max = salaries[name];
			maxName = name;
		}
	}
	alert( maxName || "нет сотрудников" );
	document.write( maxName || "нет сотрудников" );
}


function task6() {
	var user = prompt("Натуральное число для задания 6", "");

	function recurs(n) {
		if (n == 1) {
            return "1";
        }
        return recurs(n - 1) + " " + n;
    }
        document.write(recurs(user));
}

function task7a() {
	var user = +prompt("Любое число для задания 7.1", "");


	function sumTo(n) {
		var sum = 0;
		for (var i = 1; i <= n; i++) {
			sum += i;
		  	}
		return sum;
	}

	document.write( sumTo(user) );
}

function task7b() {
	var user = +prompt("Любое число для задания 7.2", "");

	function sumTo(n) {
		if (n == 1) return 1;
		return n + sumTo(n - 1);
	}
	
	document.write( sumTo(user) );
}


function task8a() {
	var i = 1;
	var timerId = setInterval(function() {
	console.log(i);
    	if (i == 20) clearInterval(timerId);
    	i++;
    }, 100);
}


function task8b() {
	var i = 1;
	var timerId = setTimeout(function go() {
		console.log(i);
    	if (i < 20) setTimeout(go, 100);
    	i++;
    }, 100);
}