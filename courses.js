//courses.js
		// create the course object
		function Course(code, name, descr){
			this.__code = code;
			this.__name = name;
			this.__descr = descr;
		}
		var elect = new Course("elcetive 3 unit", "", "");
		//Computer Science courses
		//CS = new Course("COMP SCI ", "", "")
		var CS = "COMP SCI ";
		var CSelect = new Course("CS elcetive 3 unit", "", "3 units of electives in Levels III and IV Computer Science");
		//Level II
		var CS2C03 = new Course(CS + "2C03", "DATA STRUCTURES AND ALGORITHMS", "Searching, sorting, dynamic programming, greedy algorithms, abstract data structures, balanced trees, hashing, graphs, design principles, complexity, organization of libraries. Three lectures, one tutorial (one hour); second term");
		var CS2DM3 = new Course(CS + "2DM3", "", "");
		var CS2FA3 = new Course(CS + "2FA3", "", "");
		var CS2GA3 = new Course(CS + "2GA3", "    ", "    ");
		var CS2ME3 = new Course(CS + "2ME3", "", "");
		var CS2S03 = new Course(CS + "2S03", "", "");
		var CS2XA3 = new Course(CS + "2XA3", "", "");
		var CS2XB3 = new Course(CS + "2XB3", "", "");
		//Level III
		var CS3AC3 = new Course(CS + "3AC3", "", "");
		var CS3DB3 = new Course(CS + "3DB3", "", "");
		var CS3I03 = new Course(CS + "3I03", "", "");
		var CS3MI3 = new Course(CS + "3MI3", "", "");
		var CS3SD3 = new Course(CS + "3SD3", "", "");
		var CS3SH3 = new Course(CS + "3SH3", "", "");
		//Level IV
		var CS4C03 = new Course(CS + "4C03", "", "");
		var CS4TB3 = new Course(CS + "4TB3", "", "");
		var CS4ZP6 = new Course(CS + "4ZP6", "", "");
		//Putting the courses all together into a list:
		var CSCourses = [
			//level 1
			[],
			//level 2
			[CS2C03, CS2DM3, CS2FA3, CS2GA3, CS2ME3, CS2S03, CS2XA3, CS2XB3, elect, elect],
			//level 3
			[CS3AC3, CS3DB3, CS3I03, CS3MI3, CS3SD3, CS3SH3, CSelect, CSelect, elect, elect],
			//level 4
			[CS4C03, CS4TB3, CS4ZP6, CSelect, CSelect,CSelect, CSelect, elect, elect],
		]


		//Business Informatic courses
		//CM = new Course("", "", "")
		var CM = "COMMERCE ";
		//Level II
		var CM2AA3 = new Course(CM + "2AA3", "", "");
		var CM2AB3 = new Course(CM + "2AB3", "", "");
		var CM2FA3 = new Course(CM + "2FA3", "", "");
		//Level III
		var ST3Y03 = new Course(CM + "3Y03", "", "");
		var CM2BA3 = new Course(CM + "2BA3", "", "");
		var CM2MA3 = new Course(CM + "2MA3", "", "");
		var CM3FA3 = new Course(CM + "3FA3", "", "");
		var CM4QA3 = new Course(CM + "4QA3", "", "");
		//Level IV
		var CM2BC3 = new Course(CM + "2BC3", "", "");
		var CM4BK3 = new Course(CM + "4BK3", "", "");
		var CM4KF3 = new Course(CM + "4KF3", "", "");
		var CM4KH3 = new Course(CM + "4KH3", "", "");
		var CM4QB3 = new Course(CM + "4QB3", "", "");
		//Putting the courses all together into a list:
		var BICourses = [
			//level 1
			[],
			//level 2
			[CS2C03, CS2DM3, CS2FA3, CS2XA3, CS2XB3, CS2S03, CM2AA3, CM2AB3, CM2FA3, elect],
			//level 3
			[CS2ME3, CS3DB3, CS3I03, CS3MI3, CS3SH3, ST3Y03, CM2BA3, CM2MA3, CM3FA3, CM4QA3],
			//level 4
			[CS4C03, CS4TB3, CM2BC3, CM4BK3, CM4KF3, CM4KH3, CM4QB3, CSelect, CSelect, CSelect, CSelect, elect]
		]
		/* the conversion is not yet successfuly translated from python
		var conversion = [["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]]
		function aTor(arab){
			var roma = "";
			var left_over = 0;
			var count = 0;

			for(var i=conversion.length-1; i>=-1; i--){
				count = Math.floor(arab/conversion[i][1]);
				left_over = arab % conversion[i][1];
				arab = left_over;
				for(var i=0; i<count; i++){
					roma += conversion[i][0]
				}
			return roma
			}
		}
		*/
		// temproray arabic to roman from 1 - 4
		function roman(a){
			if(a == 4){
				return "IV"
			}else{
				var r = ""
				for(var i=0; i<a; i++){
					r += "I"
				}
				return r
			}
		}

		function returnCode(courseList, level){
			var newList = courseList[level-1]
			var str = ""
			var s = ""
			for(var i=0; i<newList.length; i++){
				if(i==newList.length-1){
					s = ""
				}else{
					s = "<br/ >"
				}
				str += "<span id=\"course\" class=\"" + newList[i].__code +"\">" + newList[i].__code + "</span>" + s
			}
			return str
		}

		function returnCourseObj(code){
			if(code.indexOf("COMMERCE") == -1){
				var newList = CSCourses
			}else{
				var newList = BICourses
			}
			for(var i=0; i<newList.length; i++){
				for(var j=0; j<newList[i].length;j++){
					if(newList[i][j].__code==code){
						return(newList[i][j]) 
					}
				}

			}

		}

		function showDescr(code, left, top){
			var course = returnCourseObj(code);
			//console.log(course);
			name = course.__name;
			descr = course.__descr;
			$(".desBox").text("")
			$(".desBox").css("top", top);
			$(".desBox").css("left", left);
			$(".desBox").fadeIn();
			$(".desBox").append(
				"<h3>" + name + "</h3>" +
				"<p>" + descr + "</p>"
			);
		}

		$(document).ready(function(){
			var courseCode = ""
			//output all the courses
			for(var i=1; i<5; i++){
				$(".courses").append(
					//output table row
					"<tr class=\"level" + i + "\"></tr>\
						<td class=\"level\">Level " + roman(i) + "</td>\
						<td class = \"CS\">" +
							returnCode(CSCourses, i) +
						"</td>\
						<td class = \"BI\">" +
							returnCode(BICourses,i) +
						"</td>\
						<td class=\"comment\">Comment</td>"
					)
			}
			// end of courses output
			//detect courses hover
			$( "span#course" ).hover(
				function() {
					//$(this).click(function(){
						courseCode = $(this).attr('class');
						$(this).mousemove(function(event){
							var __top = event.pageX + 5;
  							var __left = event.pageY + 5;
  							showDescr(courseCode, __top, __left);
						})
					//})
					
				}, function(){
					$(".desBox").fadeOut();
				});
		})
