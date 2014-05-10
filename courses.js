//courses.js
		// create the course object
		function Course(code, name, descr){
			this.__code = code;
			this.__name = name;
			this.__descr = descr;
		}
		var elect = new Course("Elcetive 3 unit", "", "3 units of electives in any program");
		//Computer Science courses
		//CS = new Course("COMP SCI ", "", "")
		var CS = "COMP SCI ";
		var CSelect = new Course("CS elcetive 3 unit", "", "3 units of electives in Levels III and IV Computer Science");
		//Level II
		var CS2C03 = new Course(CS + "2C03", "DATA STRUCTURES AND ALGORITHMS", "Searching, sorting, dynamic programming, greedy algorithms, abstract data structures, balanced trees, hashing, graphs, design principles, complexity, organization of libraries.<br />Three lectures, one tutorial (one hour); second term");
		var CS2DM3 = new Course(CS + "2DM3", "FOUNDATIONS I", "Syntax and semantics of formal languages; propositional logic; proof systems; sets, functions, relations, and algebras; graphs and trees; finite state machines; software engineering applications.<br />Three lectures, one tutorial (one hour); first term");
		var CS2FA3 = new Course(CS + "2FA3", "FOUNDATIONS II", "First-order logic; proof by induction; definition by recursion; models of computation; computational limits and complexity; higher-order logic; software engineering applications.<br />Three lectures, one tutorial (one hour); second term");
		var CS2GA3 = new Course(CS + "2GA3", "COMPUTER ARCHITECTURE", "Measures of performance, instruction set architecture, computer arithmetic, datapath and control, pipelining, the memory hierarchy, I/O systems, multiprocessor systems, multimedia extensions and graphic processors.<br />Three lectures, one tutorial (two hours every other week); first term");
		var CS2ME3 = new Course(CS + "2ME3", "SOFTWARE DESIGN FUNDAMENTALS", "Software development models; modularization; information hiding; specification and abstraction; software requirements; software maintenance; metrics; testing theory and strategies; documentation.<br />Three lectures one tutorial (two hours); second term ");
		var CS2S03 = new Course(CS + "2S03", "PRINCIPLES OF PROGRAMMING", "Fundamental concepts of imperative programming (procedures, statements, control structures, iteration, recursion, exceptions); basic data structures (references, records, arrays, dynamic structures); basic concepts of operating systems.<br />Three lectures, one tutorial (one hour); first term ");
		var CS2XA3 = new Course(CS + "2XA3", "COMPUTER SCIENCE PRACTICE AND EXPERIENCE: SOFTWARE DEVELOPMENT SKILLS", "Unix and shell programming, makefiles, version control; assembly basics, translating high-level language into assembly, parameter passing, arrays, recursion; compiling, debugging, profiling, and software optimizations.<br />One lecture, two labs (two hours each), first term ");
		var CS2XB3 = new Course(CS + "2XB3", "COMPUTER SCIENCE PRACTICE AND EXPERIENCE: BINDING THEORY TO PRACTICE", "Open-ended design of computational solutions to practical problems that involve both theoretical (algorithmic) analysis and implementation; solving computational problems through an experiential approach.<br />One lecture, two labs (two hours each), second term ");
		//Level III
		var CS3AC3 = new Course(CS + "3AC3", "ALGORITHMS AND COMPLEXITY", "Basic computability models; the Church-Turing thesis, complexity classes; P versus NP; NP-completeness, reduction techniques; algorithmic design strategies; flows, distributed algorithms, advanced techniques such as randomization.<br />Three lectures, one tutorial (one hour), second term ");
		var CS3DB3 = new Course(CS + "3DB3", "DATA BASES", "Data modelling, integrity constraints, principles and design of relational databases, relational algebra, SQL, query processing, transactions, concurrency control, recovery, security and data storage.<br />Three lectures, one tutorial (one hour); second term ");
		var CS3I03 = new Course(CS + "3I03", "COMMUNICATION SKILLS", "Oral and written presentation skills; types and structure of technical documents; software documentation for the user; formulating and presenting proposals.<br />Three hours (lectures, discussion, group project, seminars); first term");
		var CS3MI3 = new Course(CS + "3MI3", "PRINCIPLES OF PROGRAMMING LANGUAGES", "Design space of programming languages; abstraction and modularization concepts and mechanisms; programming in non-procedural (functional and logic) paradigms; introduction to programming language semantics.<br />Three lectures; second term ");
		var CS3SD3 = new Course(CS + "3SD3", "CONCURRENT SYSTEMS", "Processes, threads, concurrency; synchronization mechanisms, resource management and sharing; objects and concurrency; design, architecture and testing of concurrent systems.<br />Three lectures, one tutorial (two hours) ");
		var CS3SH3 = new Course(CS + "3SH3", "OPERATING SYSTEMS", "Processes and threads, synchronization and communication; scheduling, memory management; file systems; resource protection; structure of operating systems.<br />Three lectures, one lab (three hours every other week); second term");
		//Level IV
		var CS4C03 = new Course(CS + "4C03", "COMPUTER NETWORKS AND SECURITY", "Physical networks, TCP/IP protocols, switching methods, network layering and components, network services.  Information security, computer and network security threats, defense mechanisms, encryption.<br />Three lectures, one lab (three hours every other week); second term");
		var CS4TB3 = new Course(CS + "4TB3", "SYNTAX-BASED TOOLS AND COMPILERS", "Lexical analysis, syntax analysis, type checking; syntax-directed translation, attribute grammars; compiler structure; implications of computer architecture; mapping of programming language concepts; code generation and optimization.<br />Three lectures; second term ");
		var CS4ZP6 = new Course(CS + "4ZP6", "CAPSTONE PROJECT", "Students, in teams of two to four students, undertake a substantial project in an area of computer science by performing each step of the software life cycle. The lecture component presents an introduction to software management and project management.<br />Lecture component in term 1, weekly tutorials; two terms ");
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
		];


		//Business Informatic courses
		//CM = new Course("", "", "")
		var CM = "COMMERCE ";
		//Level II
		var CM2AA3 = new Course(CM + "2AA3", "FINANCIAL ACCOUNTING I", "This is an introduction to the basic principles and practices of financial accounting, which includes an examination of income measurement and asset and liability valuation, to provide an understanding of financial accounting information and the ethics of financial reporting.");
		var CM2AB3 = new Course(CM + "2AB3", "MANAGERIAL ACCOUNTING I", "An introduction to concepts underlying the use of cost accounting information for managerial planning and control and for inventory valuation. The nature and analysis of costs and the usefulness and limitations of accounting data for decision-making, including ethical considerations, will be discussed.");
		var CM2FA3 = new Course(CM + "2FA3", "INTRODUCTION TO FINANCE", "This course introduces the main instruments and institutions in the Canadian financial system. The basic concepts and models of modern financial theory are introduced through lectures and \"hands-on\" problem solving. Topics include: the time value of money, capital budgeting, the trade-off between risk and return and security valuation.");
		//Level III
		var ST3Y03 = new Course("STAT 3Y03", "PROBABILITY AND STATISTICS FOR ENGINEERING", "Introduction to probability, data analysis, statistical inference, regression, correlation and analysis of variance, applications to civil and environmental engineering. ");
		var CM2BA3 = new Course(CM + "2BA3", "ORGANIZATIONAL BEHAVIOUR", "The central objective of this course is to develop an understanding of human behaviour in organizations with a view toward effective management of such behaviour.");
		var CM2MA3 = new Course(CM + "2MA3", "INTRODUCTION TO MARKETING", "This course introduces the conceptual underpinnings and operational facets of marketing with a primarily consumer (as opposed to industrial) focus.");
		var CM3FA3 = new Course(CM + "3FA3", "MANAGERIAL FINANCE", "This course examines various aspects of the financial management of the firm including the sources and methods of financing, capital structure, dividend policy, leasing, mergers and acquisitions, working capital management, effects of taxation on financial decisions and international aspects of finance.");
		var CM4QA3 = new Course(CM + "4QA3", "OPERATIONS MODELLING AND ANALYSIS", "A course that looks at productions and operations management as practiced in engineering and manufacturing industries and the services sector.");
		//Level IV
		var CM2BC3 = new Course(CM + "2BC3", "HUMAN RESOURCE MANAGEMENT AND LABOUR RELATIONS", "This course builds on COMMERCE 2BA3, focusing on human resource management and labour relations issues and practices from a general management education perspective.");
		var CM4BK3 = new Course(CM + "4BK3", "THE MANAGEMENT OF TECHNOLOGY", "An introduction to the innovative management of technology including the integration of the firm and technology strategy, external sourcing of technology and the internationalization of technology management.");
		var CM4KF3 = new Course(CM + "4KF3", "PROJECT MANAGEMENT", "Topics include: project selection, project organization structures, life cycles, planning, estimation, budgeting, resource allocation, contracting, project management software, reporting and controlling issues and conflict management.");
		var CM4KH3 = new Course(CM + "4KH3", "MANAGEMENT ISSUES IN ELECTRONIC BUSINESS", "This course will cover the issues that the modern business manager must deal with in making strategic decisions concerning the choice, implementation and execution of electronic business solutions.");
		var CM4QB3 = new Course(CM + "4QB3", "ANALYSIS OF PRODUCTION/OPERATIONS PROBLEMS", "An examination of analytical approaches to problems in the field of production/operations. The course will provide in-depth coverage of a limited number of topics. Enterprise resource planning system SAP may be used to highlight some of the concepts covered in the course.");
		//Putting the courses all together into a list:
		var BICourses = [
			//level 1
			[],
			//level 2
			[CS2C03, CS2DM3, CS2FA3, CS2S03, CS2XA3, CS2XB3, CM2AA3, CM2AB3, CM2FA3, elect],
			//level 3
			[CS2ME3, CS3DB3, CS3I03, CS3MI3, CS3SH3, ST3Y03, CM2BA3, CM2MA3, CM3FA3, CM4QA3],
			//level 4
			[CS4C03, CS4TB3, CM2BC3, CM4BK3, CM4KF3, CM4KH3, CM4QB3, CSelect, CSelect, CSelect, CSelect, elect]
		];
