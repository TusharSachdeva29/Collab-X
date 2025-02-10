export const templates = [
    {
        id: "blank",
        label: "Blank Document",
        imageUrl: "/blank-document.svg",
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "/resume.svg",
        initialContent: `
<h1>Resume</h1>

<h2>Your Name</h2>
<p>123 Your Street</p>
<p>Your City, ST 12345</p>
<p>Phone: (555) 555-5555</p>
<p>Email: your.email@example.com</p>

<h2>Summary</h2>
<p>A highly motivated [Your Profession] with expertise in [Skills].</p>

<h2>Experience</h2>
<h3>Job Title – Company Name (YYYY - Present)</h3>
<ul>
  <li>Accomplishment 1</li>
  <li>Accomplishment 2</li>
</ul>

<h3>Job Title – Previous Company (YYYY - YYYY)</h3>
<ul>
  <li>Accomplishment 1</li>
  <li>Accomplishment 2</li>
</ul>

<h2>Education</h2>
<p>Degree Name – University Name (YYYY - YYYY)</p>

<h2>Skills</h2>
<ul>
  <li>Skill 1</li>
  <li>Skill 2</li>
  <li>Skill 3</li>
</ul>

<h2>Certifications</h2>
<ul>
  <li>Certification Name</li>
</ul>
`
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "/letter.svg",
        initialContent: `
<h1>Letter</h1>

<p>Your Name</p>
<p>123 Your Street</p>
<p>Your City, ST 12345</p>
<p>Phone: (555) 555-5555</p>
<p>Email: your.email@example.com</p>

<p>[Date]</p>

<p>Recipient Name</p>
<p>Recipient Title</p>
<p>Company Name</p>
<p>123 Company Street</p>
<p>Company City, ST 12345</p>

<h2>Dear [Recipient's Name],</h2>
<p>[Your letter content goes here. Introduce the purpose of the letter and elaborate as needed.]</p>

<h2>Sincerely,</h2>
<p>Your Name</p>
`
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "/cover-letter.svg",
        initialContent: `
<h1>Cover Letter</h1>

<p>Your Name</p>
<p>123 Your Street</p>
<p>Your City, ST 12345</p>
<p>Phone: (555) 555-5555</p>
<p>Email: your.email@example.com</p>

<p>[Date]</p>

<p>Hiring Manager</p>
<p>Company Name</p>
<p>123 Company Street</p>
<p>Company City, ST 12345</p>

<h2>Dear Hiring Manager,</h2>
<p>I am excited to apply for the [Job Title] position at [Company Name]. With a background in [Your Field] and experience in [Relevant Experience], I am confident that I can make a valuable contribution to your team.</p>

<p>[Discuss your skills, experiences, and how they align with the job.]</p>

<h2>Sincerely,</h2>
<p>Your Name</p>
`
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "/project-proposal.svg",
        initialContent: `
<h1>Project Proposal: [Project Name]</h1>

<h2>Submitted By</h2>
<p>Your Name</p>
<p>Your Company (if applicable)</p>
<p>Your Email</p>

<h2>Submitted To</h2>
<p>Client Name</p>
<p>Client Company</p>

<h2>Date</h2>
<p>[Date]</p>

<h2>Introduction</h2>
<p>This proposal outlines the objectives, timeline, and budget for the [Project Name].</p>

<h2>Objectives</h2>
<ul>
  <li>Objective 1</li>
  <li>Objective 2</li>
  <li>Objective 3</li>
</ul>

<h2>Timeline</h2>
<p>Project milestones and delivery schedule.</p>

<h2>Budget</h2>
<p>Estimated Cost: <b>$XXXX</b></p>

<h2>Conclusion</h2>
<p>This project aims to [reiterate project goals and importance].</p>

<h2>Sincerely,</h2>
<p>Your Name</p>
`
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "/business-letter.svg",
        initialContent: `
<h1>Business Letter</h1>

<p>Your Name</p>
<p>Your Business Name</p>
<p>123 Your Street</p>
<p>Your City, ST 12345</p>
<p>Phone: (555) 555-5555</p>
<p>Email: your.email@example.com</p>

<p>[Date]</p>

<p>Recipient Name</p>
<p>Recipient Title</p>
<p>Company Name</p>
<p>123 Company Street</p>
<p>Company City, ST 12345</p>

<h2>Dear [Recipient's Name],</h2>
<p>I am writing to discuss [Main Purpose of the Letter]. We believe this collaboration will be mutually beneficial and look forward to working with you.</p>

<p>[Details about the business proposal, request, or information being shared.]</p>

<h2>Best regards,</h2>
<p>Your Name</p>
<p>Your Business Name</p>
`
    },
    {
        id: "software-proposal",
        label: "Software Proposal",
        imageUrl: "/software-proposal.svg",
        initialContent: `
<h1>Software Development Proposal</h1>

<h2>Project Overview</h2>
<p>Brief description of the proposed software development project.</p>

<h2>Scope of Work</h2>
<p>Detailed breakdown of project deliverables and requirements.</p>

<h2>Timeline</h2>
<p>Project milestones and delivery schedule.</p>

<h2>Budget</h2>
<p>Cost breakdown and payment terms.</p>
`
    }
];
