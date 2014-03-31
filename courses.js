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
		var CS2DM3 = new Course(CS + "2DM3", "FOUNDATIONS I", "Syntax and semantics of formal languages; propositional logic; proof systems; sets, functions, relations, and algebras; graphs and trees; finite state machines; software engineering applications. Three lectures, one tutorial (one hour); first term");
		var CS2FA3 = new Course(CS + "2FA3", "FOUNDATIONS II", "First-order logic; proof by induction; definition by recursion; models of computation; computational limits and complexity; higher-order logic; software engineering applications. Three lectures, one tutorial (one hour); second term");
		var CS2GA3 = new Course(CS + "2GA3", "COMPUTER ARCHITECTURE", "Measures of performance, instruction set architecture, computer arithmetic, datapath and control, pipelining, the memory hierarchy, I/O systems, multiprocessor systems, multimedia extensions and graphic processors. Three lectures, one tutorial (two hours every other week); first term");
		var CS2ME3 = new Course(CS + "2ME3", "SOFTWARE DESIGN FUNDAMENTALS", "Software development models; modularization; information hiding; specification and abstraction; software requirements; software maintenance; metrics; testing theory and strategies; documentation. Three lectures one tutorial (two hours); second term ");
		var CS2S03 = new Course(CS + "2S03", "PRINCIPLES OF PROGRAMMING", "Fundamental concepts of imperative programming (procedures, statements, control structures, iteration, recursion, exceptions); basic data structures (references, records, arrays, dynamic structures); basic concepts of operating systems. Three lectures, one tutorial (one hour); first term ");
		var CS2XA3 = new Course(CS + "2XA3", "COMPUTER SCIENCE PRACTICE AND EXPERIENCE: SOFTWARE DEVELOPMENT SKILLS", "Unix and shell programming, makefiles, version control; assembly basics, translating high-level language into assembly, parameter passing, arrays, recursion; compiling, debugging, profiling, and software optimizations. One lecture, two labs (two hours each), first term ");
		var CS2XB3 = new Course(CS + "2XB3", "COMPUTER SCIENCE PRACTICE AND EXPERIENCE: BINDING THEORY TO PRACTICE", "Open-ended design of computational solutions to practical problems that involve both theoretical (algorithmic) analysis and implementation; solving computational problems through an experiential approach. One lecture, two labs (two hours each), second term ");
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
