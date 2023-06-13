import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // const options = {
    //     method: 'GET',
    //     url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    //     headers: {
    //         'X-RapidAPI-Key': '25101e1d63mshd5994b99f9a110ap16e6aejsn02cb8ff77249',
    //         'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //     },
    //     params: { ...query },
    // };

    const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'Python developer in Texas, USA',
          page: '1',
          num_pages: '1'
        },
        headers: {
          'X-RapidAPI-Key': '25101e1d63mshd5994b99f9a110ap16e6aejsn02cb8ff77249',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            // const response = await axios.request(options);

            const response = RESPONSE;
            // console.log(response.data)

            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log("fetchData error: " + error)
            alert('There is an error')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
};

const RESPONSE = 
{
    "status": "OK",
    "request_id": "e3b89a9d-f110-40be-8418-5c389c1372b0",
    "parameters": {
      "query": "react developer",
      "page": 1,
      "num_pages": 1
    },
    "data": [
      {
        "employer_name": "Dice",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
        "employer_website": null,
        "employer_company_type": "Information",
        "job_publisher": "LinkedIn",
        "job_id": "ig4EYbxS7NIAAAAAAAAAAA==",
        "job_employment_type": "FULLTIME",
        "job_title": "React developer",
        "job_apply_link": "https://www.linkedin.com/jobs/view/react-developer-at-dice-3634229135",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5631,
        "job_description": "Dice is the leading career destination for tech experts at every stage of their careers. Our client, WB Solutions LLC, is seeking the following. Apply via Dice today!\n\nGreetings from WB SOLUTIONS !!!!\n\nWe had a urgent requirement for REACT DEVELOPER at BENTONVILLE, AR (NEED TO BE LOCAL AND HYBRID BASIS DAY ONE ONSITE)\n\nROLE: REACT DEVELOPER\n\nLOCATION: BENTONVILLE, AR (NEED TO BE LOCAL AND HYBRID BASIS DAY ONE ONSITE)\n\nSkills: React.Js, React Native, REDUX, JavaScript, RETAIL DOMAIN EXP",
        "job_is_remote": false,
        "job_posted_at_timestamp": 1686582022,
        "job_posted_at_datetime_utc": "2023-06-12T15:00:22.000Z",
        "job_city": "Bentonville",
        "job_state": "AR",
        "job_country": "US",
        "job_latitude": 36.372356,
        "job_longitude": -94.21021,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=ig4EYbxS7NIAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2023-07-12T15:00:22.000Z",
        "job_offer_expiration_timestamp": 1689174022,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {},
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_naics_code": "519130",
        "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
      },
      {
        "employer_name": "developrec",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFyp3Xr4mYCk_UvvfkLGDbt9nXJJ_mX4T5VSG&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_id": "JpXK4bmjIUIAAAAAAAAAAA==",
        "job_employment_type": "FULLTIME",
        "job_title": "Full-Stack React Developer, React TypeScript Python $160k",
        "job_apply_link": "https://www.linkedin.com/jobs/view/full-stack-react-developer-react-typescript-python-%24160k-at-developrec-3633061806",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5741,
        "job_description": "Full-Stack React Developer, React TypeScript Python $160k\n\nFully Remote, USA\n\nSummary: My client is a rapidly expanding AI/ML business for the Insurance space who have many deliverables for 2023 which means growth across x3 squads building customer features, developer products, data visualisation services and more.\n\nMy client has specialized in optimising efficiency for underwriters and insurance technology through their Enterprise SaaS Platform.\n\nResponsibilities:\n• Designing, developing and deploying complex data visualisation services using React, TypeScript & Python\n• Building fully scalable products and applications within big-tech entreprise and start-up environments\n• Working with end customers to manage project and development lifecycle\n• Conducting reviews of existing products or applications to evaluate their potential value for the business\n\nQualifications and Skills:\n• React, JavaScript, TypeScript, Python\n• Full-Stack experience, with a majority frontend focus using React and TypeScript\n• Data visualisation experience is ideal, but not necessary\n• Strong Computer Science educational background\n• Able to communicate technical and non-technical goals\n\nSalary and Benefits:\n• Salary: $140k - $170k+\n• Bonus - personal and company performance based\n• Executive level equity options\n• Family plan for health care and insurances\n\nFull-Stack React Developer, React TypeScript Python $160k\n\nFully Remote, USA",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1686657420,
        "job_posted_at_datetime_utc": "2023-06-13T11:57:00.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": [
          "retirement_savings",
          "health_insurance"
        ],
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=JpXK4bmjIUIAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2023-07-13T11:57:00.000Z",
        "job_offer_expiration_timestamp": 1689249420,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": true,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
          "Qualifications": [
            "React, JavaScript, TypeScript, Python",
            "Full-Stack experience, with a majority frontend focus using React and TypeScript",
            "Data visualisation experience is ideal, but not necessary",
            "Strong Computer Science educational background",
            "Able to communicate technical and non-technical goals"
          ],
          "Responsibilities": [
            "Designing, developing and deploying complex data visualisation services using React, TypeScript & Python",
            "Building fully scalable products and applications within big-tech entreprise and start-up environments",
            "Working with end customers to manage project and development lifecycle",
            "Conducting reviews of existing products or applications to evaluate their potential value for the business"
          ],
          "Benefits": [
            "Salary: $140k - $170k+",
            "Bonus - personal and company performance based",
            "Executive level equity options",
            "Family plan for health care and insurances",
            "Full-Stack React Developer, React TypeScript Python $160k"
          ]
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "Curbio",
        "employer_logo": null,
        "employer_website": "http://curbio.com",
        "employer_company_type": null,
        "job_publisher": "Jobvite",
        "job_id": "QwuiV6NotOkAAAAAAAAAAA==",
        "job_employment_type": "FULLTIME",
        "job_title": "React Developer",
        "job_apply_link": "https://jobs.jobvite.com/curbio/job/o9kynfw8",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.7571,
        "job_description": "Looking to join an innovative and high growth company run by a recognized and successful team of co-founders and executives? Well, it’s an exciting time to join Curbio, a Real Estate Tech company founded in 2017 to transform the multi-billion dollar home improvement and residential real estate market. We help real estate agents and their clients get listings ready for market with smart home improvements and a fix now, pay later model. We are using technology to completely re-invent the archaic home improvement experience and make it work for real estate.\n\nCurbio fosters a creative and supportive work environment that encourages our staff to reach and surpass their full potential. We believe that unity of goals and diversity of people is a powerful combination. We believe that personal responsibility almost always outperforms corporate policies. Our team is focused, driven and inventive.\n\nCurbio has been recognized for exemplary leadership and company culture many times over. In 2022, Curbio made both Inc.’s Top 5000 fastest growing companies in America as well as Deloitte’s Technology Fast 500. We are certified as a Great Place to Work® and our CEO, Rick Rudman, was named a 2021 & 2022 Best CEO by Comparably, where we also received distinctions for Happiest Employees and Best Compensation. Curbio has also been recognized for its success as a tech-powered home improvement solution, receiving nods in the Qualified Remodeler Top 500 list, PropTech Breakthrough awards, Best in Biz awards and NTVC Tech 100 awards, to name a few.\n\nWe won’t bore you with our amazing benefits (they are, we got an award on those too). But if you want to work with an experienced management team that wants to create a great workplace environment, present new opportunities and challenges, provide a clear path for career growth, and work in a collaborative environment with dedicated people - this is the place for you.\n\nJoin Curbio today and help us make real estate move!\n\nAt Curbio you will:\n• Serve as a frontend software developer specializing primarily in React Native, but with React web experience as well.\n• Report directly to the CTO.\n• Communicate – understand when it’s a technical decision vs. a product decision and socialize uncertainties.\n• Pay attention to detail and refactor as you go.\n• Meet with the development team to discuss user interface ideas and applications.\n• Review application requirements and interface designs.\n• Refine the CI/CD pipeline and Cloud Ops processes.\n\nWhat we’re looking for:\n• 5+ years of experience working with React and React Native.\n• Experience working in .Net Framework or .Net Core is a plus.\n• Front End: React & Material Design.\n• Back End: C# .Net Core, SQL Server.\n• Infrastructure: Azure & Azure Functions.\n• A firm commitment to quality code.\n• Experience working as a developer in an agile process with a regular sprint schedule, user stories prioritized from a backlog and sprint reviews, preferred.\n• Native development experience in Swift or Objective-C for iOS, or Java for Android, a plus.\n\nCurbio is proud to be an Equal Opportunity Employer. As such, we are committed to equal employment opportunity regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, gender identity, Veteran status or any other characteristic protected under federal, state, or applicable local law",
        "job_is_remote": false,
        "job_posted_at_timestamp": 1686182400,
        "job_posted_at_datetime_utc": "2023-06-08T00:00:00.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=QwuiV6NotOkAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": 60,
          "experience_mentioned": true,
          "experience_preferred": true
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": true
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
          "Qualifications": [
            "5+ years of experience working with React and React Native",
            "Front End: React & Material Design",
            "Back End: C# .Net Core, SQL Server",
            "Infrastructure: Azure & Azure Functions",
            "A firm commitment to quality code"
          ],
          "Responsibilities": [
            "Report directly to the CTO",
            "Communicate – understand when it’s a technical decision vs. a product decision and socialize uncertainties",
            "Pay attention to detail and refactor as you go",
            "Meet with the development team to discuss user interface ideas and applications",
            "Review application requirements and interface designs",
            "Refine the CI/CD pipeline and Cloud Ops processes"
          ]
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "Mobomo",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnyiUSadBRlx11LXARvrGOe_Yzn-Ye1qi6SQA&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_id": "mQFjjsIER5gAAAAAAAAAAA==",
        "job_employment_type": "FULLTIME",
        "job_title": "Senior React Developer",
        "job_apply_link": "https://www.linkedin.com/jobs/view/senior-react-developer-at-mobomo-3634891130",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5741,
        "job_description": "Responsibilities\n\n• Work with project team members to deliver technical solutions that meet the needs of our customers.\n\n• Architect, build and maintain React Native apps and React-based dashboards.\n\n• Connect data sources, analyze data, build business logic, and configure visualizations.\n\n• Apply Agile principles to gather business requirements and translate them into functional/technical specifications.\n\n• Build reusable code and libraries for future use.\n\n• Develop and optimize applications for maximum speed and scalability.\n\n• Create and maintain technical and knowledge base documentation.\n\n• Diagnose problems, troubleshoot, and develop technical solutions.\n\nQualifications\n\n• Must be a US citizen and eligible to obtain a government clearance\n\n• Must be on EST or CST\n\n• Bachelor’s degree in Computer Science or equivalent combination of education and experience.\n\n• 4+ years of experience with developing enterprise-quality solutions in an iterative or Agile environment.\n\n• Strong Java programming experience building end-to-end solutions with front-end JavaScript frameworks and integration with backend data services.\n\n• 2+ years of demonstrated technical expertise in web UI development using React.\n\n• Experience developing cloud-based applications using open source technology, containers, and microservices.\n\n• Experience with configuration management frameworks.\n\n• Experience with code management using Git.\n\n• Experience with Jira and/or Confluence.\n\n• Excellent communication skills with a strong customer service commitment.\n\nKeywords: React, React Native, CSS, AWS",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1686639604,
        "job_posted_at_datetime_utc": "2023-06-13T07:00:04.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=mQFjjsIER5gAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2023-07-13T07:00:04.000Z",
        "job_offer_expiration_timestamp": 1689231604,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": 48,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": true,
          "degree_preferred": true,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
          "Qualifications": [
            "Must be a US citizen and eligible to obtain a government clearance",
            "Must be on EST or CST",
            "Bachelor’s degree in Computer Science or equivalent combination of education and experience",
            "4+ years of experience with developing enterprise-quality solutions in an iterative or Agile environment",
            "Strong Java programming experience building end-to-end solutions with front-end JavaScript frameworks and integration with backend data services",
            "2+ years of demonstrated technical expertise in web UI development using React",
            "Experience developing cloud-based applications using open source technology, containers, and microservices",
            "Experience with configuration management frameworks",
            "Experience with code management using Git",
            "Experience with Jira and/or Confluence",
            "Excellent communication skills with a strong customer service commitment",
            "Keywords: React, React Native, CSS, AWS"
          ],
          "Responsibilities": [
            "Work with project team members to deliver technical solutions that meet the needs of our customers",
            "Architect, build and maintain React Native apps and React-based dashboards",
            "Connect data sources, analyze data, build business logic, and configure visualizations",
            "Apply Agile principles to gather business requirements and translate them into functional/technical specifications",
            "Build reusable code and libraries for future use",
            "Develop and optimize applications for maximum speed and scalability",
            "Create and maintain technical and knowledge base documentation",
            "Diagnose problems, troubleshoot, and develop technical solutions"
          ]
        },
        "job_job_title": "Senior",
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "TEK NINJAS",
        "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvutVS7h7YKyxIGOTSsR7-tcdw2AvMyqe-c5sr&s=0",
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "LinkedIn",
        "job_id": "KabHwVjnBKcAAAAAAAAAAA==",
        "job_employment_type": "FULLTIME",
        "job_title": "React Developer",
        "job_apply_link": "https://www.linkedin.com/jobs/view/react-developer-at-tek-ninjas-3633067779",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.5895,
        "job_description": "looking for a mid-level React Developer that has experience with React, NextJS, Typescript, Cloud (any), at an enterprise level.\n\nHigh-Level Individual Duties: 30-60-90-day plans for this?\n• Moving to Next.JS migration (first 6 months)\n• Building move features\n• Mid-Level: Need to just be able to write the code\n\nMust-Haves (Concepts & Tools)\n• React\n• Typescript\n• Javascript\n• Next.JS\n• Writing test cases\n• They have a DevOps team, but they need to have an understanding of a pipeline and how to deploy the code\n• Cloud",
        "job_is_remote": false,
        "job_posted_at_timestamp": 1686614544,
        "job_posted_at_datetime_utc": "2023-06-13T00:02:24.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=KabHwVjnBKcAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2023-07-13T00:02:25.000Z",
        "job_offer_expiration_timestamp": 1689206545,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": true,
          "degree_mentioned": true,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
          "Qualifications": [
            "looking for a mid-level React Developer that has experience with React, NextJS, Typescript, Cloud (any), at an enterprise level",
            "Mid-Level: Need to just be able to write the code",
            "They have a DevOps team, but they need to have an understanding of a pipeline and how to deploy the code"
          ],
          "Responsibilities": [
            "Moving to Next.JS migration (first 6 months)",
            "Building move features"
          ]
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "Upwork",
        "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
        "employer_website": "http://www.elance.com",
        "employer_company_type": "Computer Services",
        "job_publisher": "Upwork",
        "job_id": "qzHdCi1sOqkAAAAAAAAAAA==",
        "job_employment_type": "CONTRACTOR",
        "job_title": "React Developer - Contract to Hire",
        "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/React-Developer_~01eeb2f9b8b8aaee8c/",
        "job_apply_is_direct": true,
        "job_apply_quality_score": 0.7848,
        "job_description": "I need a web app that allows user to scan their cards",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1686535186,
        "job_posted_at_datetime_utc": "2023-06-12T01:59:46.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=qzHdCi1sOqkAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": [
          "React",
          "JavaScript",
          "CSS",
          "HTML",
          "HTML5",
          "Node.js",
          "Web Application"
        ],
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {},
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_naics_code": "541511",
        "job_naics_name": "Custom Computer Programming Services"
      },
      {
        "employer_name": "confidential",
        "employer_logo": null,
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "Apex Systems",
        "job_id": "txphdIGdkVYAAAAAAAAAAA==",
        "job_employment_type": "CONTRACTOR",
        "job_title": "React Developer",
        "job_apply_link": "https://www.apexsystems.com/job/1346691_usa/react-developer",
        "job_apply_is_direct": false,
        "job_apply_quality_score": 0.7717,
        "job_description": "Apex Systems is looking for a React Developer to join a Fortune 100 team. Please submit your resume if you are interested in applying.\n\nRequired Experience:\n\n- 6+ years as a React Developer\n\n- Have experience with React JS, CSS, HTML and Cloud\n\n- Be able to go onsite as needed in Bentonville, AR or relocate to Bentonville\n\n- Experience working from scratch\n\nEEO EmployerApex Systems is an equal opportunity employer. We do not discriminate or allow discrimination on the basis of race, color, religion, creed, sex (including pregnancy, childbirth, breastfeeding, or related medical conditions), age, sexual orientation, gender identity, national origin, ancestry, citizenship, genetic information, registered domestic partner status, marital status, disability, status as a crime victim, protected veteran status, political affiliation, union membership, or any other characteristic protected by law. Apex will consider qualified applicants with criminal histories in a manner consistent with the requirements of applicable law. If you have visited our website in search of information on employment opportunities or to apply for a position, and you require an accommodation in using our website for a search or application, please contact our Employee Services Department at employeeservices@apexsystems.com or 844-463-6178.",
        "job_is_remote": false,
        "job_posted_at_timestamp": 1683590400,
        "job_posted_at_datetime_utc": "2023-05-09T00:00:00.000Z",
        "job_city": "Bentonville",
        "job_state": "AR",
        "job_country": "US",
        "job_latitude": 36.372356,
        "job_longitude": -94.21021,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=txphdIGdkVYAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
          "Qualifications": [
            "6+ years as a React Developer",
            "Have experience with React JS, CSS, HTML and Cloud",
            "Be able to go onsite as needed in Bentonville, AR or relocate to Bentonville",
            "Experience working from scratch"
          ]
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "WB Solutions LLC",
        "employer_logo": null,
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "Dice",
        "job_id": "8KYV3VjATxYAAAAAAAAAAA==",
        "job_employment_type": "CONTRACTOR",
        "job_title": "React developer with 10+ YRS exp",
        "job_apply_link": "https://www.dice.com/job-detail/6facb5bb-118f-4d68-8cb6-0b5df0eb0e28",
        "job_apply_is_direct": true,
        "job_apply_quality_score": 0.6614,
        "job_description": "Greetings from WB SOLUTIONS !!!!\n\nWe had a urgent requirement for REACT DEVELOPER at BENTONVILLE, AR (NEED TO BE LOCAL AND HYBRID BASIS DAY ONE ONSITE)\n\nROLE: REACT DEVELOPER\n\nLOCATION: BENTONVILLE, AR (NEED TO BE LOCAL AND HYBRID BASIS DAY ONE ONSITE)\n\nSkills: React.Js, React Native, REDUX, JavaScript, RETAIL DOMAIN EXP",
        "job_is_remote": false,
        "job_posted_at_timestamp": 1686408623,
        "job_posted_at_datetime_utc": "2023-06-10T14:50:23.000Z",
        "job_city": "Bentonville",
        "job_state": "AR",
        "job_country": "US",
        "job_latitude": 36.372356,
        "job_longitude": -94.21021,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=8KYV3VjATxYAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": "2023-07-13T22:14:24.000Z",
        "job_offer_expiration_timestamp": 1689286464,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": false,
          "experience_preferred": false
        },
        "job_required_skills": [
          "React.Js",
          "React Native",
          "REDUX",
          "JavaScript",
          "RETAIL DOMAIN EXP"
        ],
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {},
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "Overture Law",
        "employer_logo": null,
        "employer_website": null,
        "employer_company_type": null,
        "job_publisher": "Glassdoor",
        "job_id": "63ZjC9rP-fIAAAAAAAAAAA==",
        "job_employment_type": "PARTTIME",
        "job_title": "Front-end React Developer (Part-Time)",
        "job_apply_link": "https://www.glassdoor.com/job-listing/front-end-react-developer-part-time-overture-law-JV_KO0,35_KE36,48.htm?jl=1008698710289",
        "job_apply_is_direct": true,
        "job_apply_quality_score": 0.5518,
        "job_description": "About Overture\n\nOverture is an invite-only referral platform dedicated to the best independent attorneys in America. By allowing attorneys to ethically share in referral fees for matters they can’t service, Overture allows independent attorneys to expand the reach of their practice and open up new revenue streams.\n\nOverture is the newest venture from the founders of BizCounsel, a legal services company changing the way small business owners get legal protection. BizCounsel’s founders were the same team behind LegalZoom.\n\nThe Role\n\nWe are looking for a part-time or freelance developer to work on our public-facing website and our React-based web platform. Our main need is front-end development (HTML, CSS, React and Redux), however, this could also become a full stack role if you have back-end or AWS skills. All levels of experience are welcome to apply, as long as you can hit the ground running and meaningfully contribute as part of a small team.\n\nWe value people who are good communicators, quick learners, scrappy about finding creative solutions to problems, conscious of their code quality and thorough testers.\n\nWhat Skills / Qualifications Should I Have?\n• HTML\n• CSS\n• React\n• Redux\n\nNice to have:\n• Python\n• Django\n• Source control (we use GitHub)\n• AWS\n• PostgreSQL\n\nJob Type: Part-time\n\nPay: From $40.00 per hour\n\nCompensation package:\n• 1099 contract\n\nSchedule:\n• Monday to Friday\n\nExperience:\n• HTML: 1 year (Required)\n• CSS: 1 year (Required)\n• React: 1 year (Preferred)\n• Redux: 1 year (Preferred)\n\nWork Location: Remote",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1686528000,
        "job_posted_at_datetime_utc": "2023-06-12T00:00:00.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=63ZjC9rP-fIAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": null,
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": true,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": null,
        "job_max_salary": null,
        "job_salary_currency": null,
        "job_salary_period": null,
        "job_highlights": {
          "Qualifications": [
            "Our main need is front-end development (HTML, CSS, React and Redux), however, this could also become a full stack role if you have back-end or AWS skills",
            "All levels of experience are welcome to apply, as long as you can hit the ground running and meaningfully contribute as part of a small team",
            "We value people who are good communicators, quick learners, scrappy about finding creative solutions to problems, conscious of their code quality and thorough testers",
            "Python",
            "Django",
            "HTML: 1 year (Required)",
            "CSS: 1 year (Required)"
          ],
          "Benefits": [
            "Pay: From $40.00 per hour",
            "Compensation package:",
            "1099 contract"
          ]
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3"
      },
      {
        "employer_name": "Upwork",
        "employer_logo": "https://image.status.io/z6aeO6kAGsAG.png",
        "employer_website": "http://www.elance.com",
        "employer_company_type": "Computer Services",
        "job_publisher": "Upwork",
        "job_id": "1qFQguAZtloAAAAAAAAAAA==",
        "job_employment_type": "CONTRACTOR",
        "job_title": "React Developer",
        "job_apply_link": "https://www.upwork.com/freelance-jobs/apply/React-Developer_~01b07b4ca2fce33310/",
        "job_apply_is_direct": true,
        "job_apply_quality_score": 0.6827,
        "job_description": "We are looking for a skilled React Developer to work with our team on a project that will last for more than 6 months. The ideal candidate should possess a strong background in CSS, HTML, HTML5, JavaScript, Node.js, React, Redux, TypeScript, and Web Application development.\n\nAs a React Developer, you will be responsible for designing, developing, and maintaining high-quality web applications. You will work closely with our team of designers and developers to ensure that the applications meet the desired functionality and user experience.\n\nTo be considered for this role, you should have a strong understanding of React and its ecosystem, along with experience in building scalable and maintainable web applications.\n\nWe invite interested candidates to submit a proposal that outlines their experience and expertise in React development. Please include links to past completed projects that showcase your skills and achievements in this field. We look forward to hearing from you!",
        "job_is_remote": true,
        "job_posted_at_timestamp": 1686592275,
        "job_posted_at_datetime_utc": "2023-06-12T17:51:15.000Z",
        "job_city": null,
        "job_state": null,
        "job_country": "US",
        "job_latitude": 37.09024,
        "job_longitude": -95.71289,
        "job_benefits": null,
        "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+developer&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=react+developer&htidocid=1qFQguAZtloAAAAAAAAAAA%3D%3D",
        "job_offer_expiration_datetime_utc": null,
        "job_offer_expiration_timestamp": null,
        "job_required_experience": {
          "no_experience_required": false,
          "required_experience_in_months": null,
          "experience_mentioned": true,
          "experience_preferred": false
        },
        "job_required_skills": [
          "React",
          "JavaScript",
          "CSS",
          "HTML",
          "HTML5",
          "Redux",
          "Node.js",
          "TypeScript",
          "Web Application"
        ],
        "job_required_education": {
          "postgraduate_degree": false,
          "professional_certification": false,
          "high_school": false,
          "associates_degree": false,
          "bachelors_degree": false,
          "degree_mentioned": false,
          "degree_preferred": false,
          "professional_certification_mentioned": false
        },
        "job_experience_in_place_of_education": false,
        "job_min_salary": 40,
        "job_max_salary": 60,
        "job_salary_currency": "USD",
        "job_salary_period": "HOUR",
        "job_highlights": {
          "Qualifications": [
            "We are looking for a skilled React Developer to work with our team on a project that will last for more than 6 months",
            "The ideal candidate should possess a strong background in CSS, HTML, HTML5, JavaScript, Node.js, React, Redux, TypeScript, and Web Application development",
            "To be considered for this role, you should have a strong understanding of React and its ecosystem, along with experience in building scalable and maintainable web applications",
            "We invite interested candidates to submit a proposal that outlines their experience and expertise in React development"
          ],
          "Responsibilities": [
            "As a React Developer, you will be responsible for designing, developing, and maintaining high-quality web applications",
            "You will work closely with our team of designers and developers to ensure that the applications meet the desired functionality and user experience"
          ]
        },
        "job_job_title": null,
        "job_posting_language": "en",
        "job_onet_soc": "15113400",
        "job_onet_job_zone": "3",
        "job_naics_code": "541511",
        "job_naics_name": "Custom Computer Programming Services"
      }
    ]
  }

export default useFetch;