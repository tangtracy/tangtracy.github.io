document.getElementById('chat-form').addEventListener('submit', async () => {
    
    event.preventDefault();

    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    
    let message = chatInput.value;
    chatInput.value = '';

    // Add user message to chat output
    chatOutput.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

    message = `Tracy Tang
    tracy-tang.com 
    tracytanggg@gmail.com | 630-729-4928 
    
    SKILLS
    Programming - JavaScript(TypeScript), HTML/CSS, C++, Python, Java 
    Technologies - Angular, NodeJS, NestJS, AWS, DynamoDB (noSQL), Bash, Git, Jira
    
    EDUCATION
    University of Illinois at Urbana-Champaign
    B.S. Computer Engineering, May 2022
    
    EXPERIENCE
    Application Developer - Technology Leadership Program - Vanguard 
    Malvern, PA: August 2022-Present 
    Application Development:
    Worked to re-architect a web service which calculates all Vanguard advisory fees. Contributed to building the modernized web serviceー a completely serverless, lambda based, AWS hosted monorepo capable of reading, creating, updating, and deleting client information 
    Improved the development experience of five developers for an internal UI  tool used by Vanguard advisors by upgrading Angular versions, integrating a modernized internal UI component library, and improving logging structures 
    Leadership: 
    Mentored students, recruited students, and  judged hacks, for a grand prize of interviews for best financial literacy, at HackHersー a female, femme, and non-binary hackathon for Rutgers University students 
    Developed engagement activities and a mindfulness session for the Technology Leadership Program participants, encouraging a positive and energetic work environment 
    
    Software Engineering Intern - Collins Aerospace 
    Cedar Rapids, IA: June 2021-August 2021 
    Used Python to query for employees’ names and display them on a disk usage site 
    Wrote a Bash script to automate the process of gathering legal information on a large set of board support packages 
    Worked on an F-22 Raptor radio communication team to automate testing on lab equipment 
    
    Software Engineer Intern, Cybersecurity - Forcepoint (powered by Raytheon)
    Champaign, IL: June 2020-August 2020 
    Operated in an Agile Scrum framework to efficiently accomplish tasks with collaboration and input from other software engineers
    Developed a Bash script to automatically pull the most up-to-date XML datastream from the Red Hat Enterprise Linux Repository in order to perform an OpenSCAP scan on local systems
    Developed a Bash script to perform any number of OpenSCAP scans on a local system simultaneously 
    Used Python scripting to manipulate and merge two XML datastreams 
    Researched and tested a third-party security vulnerability scanner plug-in for its effectiveness as an integrated component of the team’s CI/CD pipeline 
    
    ECE 391 (Operating Systems course) - Final Project
    Champaign, IL: March 2021-May 2021
    Collaborated in a team of four students to create an operating system over the course of three months 
    Implemented a real time clock device, physical to virtual memory paging, interrupt descriptor table, terminal functionality, and kernel program loading with teammates 
    Personally developed a read-only file system, and kernel system calls to support user programs 
    
    CS 225 (Data Structures) - Final Project 
    Champaign, IL: November 2020-December 2020 
    Used C++ to create a Force-Directed graph of a dataset of physics authors and their co-authors 
    Used BFS and Dijkstra traversals to gather information about the nodes representing collaborations 
    
    I'm an application developer at Vanguard, currently in my second rotation in the Technology Leadership Program.

    contact me: 630-729-4928, philadelphia, PA, tracytanggg@gmail.com

    interests: hiking, music, emotional literacy, true crime, plants
    ` + 'use the above resume to answer the following question: ' +  message

    // Call OpenAI API
    const response = await fetchOpenAiApi(message);

    // Add AI response to chat output
    chatOutput.innerHTML += `<div><strong>AI:</strong> ${response}</div>`;
    chatOutput.scrollTop = chatOutput.scrollHeight;
});

async function fetchOpenAiApi(message) {
    const apiKey = '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'; // Replace with your OpenAI API key
    const apiUrl = 'https://api.openai.com/v1/chat/completions'; // Modify this URL according to the API version and desired engine

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            messages: [{ "role": "user", "content": message }],
            model: "gpt-3.5-turbo",
        })
    };


    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();
    console.log(data)
    return data.choices[0].message.content;
    // return 'hi'
}