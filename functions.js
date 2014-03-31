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
				return "IV";
			}else{
				var r = "";
				for(var i=0; i<a; i++){
					r += "I";
				}
				return r;
			}
		}

		function returnCode(courseList, level){
			var newList = courseList[level-1];
			var str = "";
			var s = "";
			for(var i=0; i<newList.length; i++){
				if(i==newList.length-1){
					s = "";
				}else{
					s = "<br/ >";
				}
				str += "<span id=\"course\" class=\"" + newList[i].__code +"\">" + newList[i].__code + "</span>" + s;
			}
			return str;
		}

		function returnCourseObj(code){
            var newList;
			if(code.indexOf("COMMERCE") == -1 || code.indexOf("STAT") == -1){
				newList = CSCourses;
			}else{
				newList = BICourses;
				console.log("EI!")
			}
			for(var i=0; i<newList.length; i++){
				for(var j=0; j<newList[i].length;j++){
					if(newList[i][j].__code==code){
						return(newList[i][j]);
					}
				}

			}

		}

		function showDescr(code, left, top){
			var course = returnCourseObj(code);
			console.log(course);
			var name = course.__name;
			var descr = course.__descr;
			$(".desBox").text("");
			$(".desBox").css("top", top);
			$(".desBox").css("left", left);
			$(".desBox").show();
			$(".desBox").append(
				"<h4>" + name + "</h4>" +
				"<p>" + descr + "</p>"
			);
		}

		$(document).ready(function(){
			var courseCode = "";
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
					);
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
						});
					//})
					
				}, function(){
					$(".desBox").hide();
				});
		});
