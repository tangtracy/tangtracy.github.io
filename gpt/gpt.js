const chatOutput = document.getElementById('chat-output');
const typingDelay = 30; // Delay between each character being typed

// Function to add a message to the chat output with typing animation
async function addMessageWithTypingAnimation(sender, message) {
    const output = document.createElement('div');
    output.innerHTML = `<strong>${sender}:</strong> `;
    chatOutput.appendChild(output);

    for (let i = 0; i < message.length; i++) {
        await delay(typingDelay); // Delay before typing next character
        output.innerHTML += message.charAt(i);
    }

    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom of chat output
}

// Function to add a message to the chat output without typing animation
async function addMessageWithoutTypingAnimation(sender, message) {
    const output = document.createElement('div');
    output.innerHTML = `<strong>${sender}:</strong> `;
    chatOutput.appendChild(output);

    output.innerHTML += message
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to bottom of chat output
}

// Function to delay for a given amount of time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Start message
addMessageWithTypingAnimation('AI', "Hi :-) I'm a GPT powered chat bot. Ask me a question about Tracy's site!");

document.getElementById('chat-form').addEventListener('submit', async(event) => {
    event.preventDefault();

    const chatInput = document.getElementById('chat-input');

    let message = chatInput.value;
    chatInput.value = '';

    // Add user message to chat output with typing animation
    await addMessageWithoutTypingAnimation('You', message);

    message = `answer in the 3rd person, like you are tracy's chatbot. the following information is my resume: Tracy Tang
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

    I am now in my second rotation of TLP on the Desk Development team. We build technology tools and solutions for traders. 

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

    about me currently: I'm an application developer at Vanguard, currently in my second rotation in the Technology Leadership Program.

    link to follow me on instagram: https://www.instagram.com/tracytangggg/
    link to follow me on linkedin: https://www.linkedin.com/in/tracymtang/
    link to follow me on facebook: https://www.facebook.com/tracy.tang.56884
    link to my github: https://github.com/tangtracy 
    link to follow me on all trails: https://www.alltrails.com/members/tracg-tang?utm_campaign=mobile-iphone?utm_campaign=mobile-iphone 
    link to follow me on strava: https://www.strava.com/athletes/110743050 

    my personal interests: hiking, music, true crime, plants, painting, running, traveling, and watching shows

    ` + 'now that you have my resume, use it to answer the following question for a chatbot: ' + message + `. If the question is not relevant, say "The question is not relevant to Tracy's site." if it is not a question, say "That is not a question."`;

    // Call OpenAI API
    const response = await fetchOpenAiApi(message);
    console.log("Response ", response)

    // Add AI response to chat output with typing animation
    await addMessageWithTypingAnimation('AI', response);
});

async function fetchOpenAiApi(message) {
    const apiUrl = 'https://pjk4psw4e6.execute-api.us-east-1.amazonaws.com/Tracy'; // Modify this URL according to the API version and desired engine

    console.log("Message ", message);
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain',
        },
        body: message
    };

    const response = await fetch(apiUrl, requestOptions).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        return data;
    });
    console.log("Response ", response);
    return response;
}